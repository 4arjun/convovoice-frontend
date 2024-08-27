import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Processing.css";
import RecordRTC from "recordrtc";
import { ClipLoader } from "react-spinners";

const AudioRecorder = () => {
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(""); // Initial state is empty
  const audioRecorder = useRef(null);
  const mediaStream = useRef(null);
  const audioElement = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Set token from localStorage when component mounts
    const savedToken = localStorage.getItem("accessToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []); // Empty dependency array means this runs once on mount

  
  useEffect(() => {
    const refreshAccessToken = async () => {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }) // Ensure the key is 'refresh'
          });

          if (response.ok) {
            const data = await response.json();
            setToken(data.access);
            localStorage.setItem('accessToken', data.access);
          } else {
            const errorData = await response.json();
            console.error('Failed to refresh access token:', errorData);
            if (errorData.code === "token_not_valid") {
              // Handle token issues, e.g., prompt re-login
            }
          }
        } catch (error) {
          console.error('Error refreshing access token:', error);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      refreshAccessToken();
    }, 2 * 60 * 100); // 2 minutes

    return () => clearTimeout(timeoutId);
  }, []);


  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const startRecording = useCallback(async () => {
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: { sampleRate: 16000 },
      });
      audioRecorder.current = new RecordRTC(mediaStream.current, {
        type: "audio",
        mimeType: "audio/webm",
      });
      audioRecorder.current.startRecording();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing audio devices:", error);
    }
  }, []);

  const stopRecording = useCallback(async () => {
    if (audioRecorder.current) {
      audioRecorder.current.stopRecording(async () => {
        const blob = audioRecorder.current.getBlob();
        const formData = new FormData();
        formData.append("audio", blob, "audio.webm");

        setLoading(true); // Show loading symbol

        try {
          const response = await fetch(
            "http://127.0.0.1:8000/transcribe_and_respond/",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formData,
            }
          );

          if (response.ok) {
            const result = await response.json();
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                text: result.user_message || "No message available",
                type: "user",
              },
              {
                text: result.assistant_message || "No response available",
                type: "assistant",
              },
            ]);

            if (result.audio_content) {
              const audioSrc = `data:audio/mp3;base64,${result.audio_content}`;
              if (audioElement.current) {
                audioElement.current.src = audioSrc;
                audioElement.current.play();
              }
            }
          } else if (response.status === 401) {
            // Handle unauthorized access
            console.warn("Unauthorized. Redirecting to login.");
            localStorage.removeItem("accessToken");
            // Redirect to login page or show an error message
          } else {
            console.warn("No assistant message found in the response");
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: "No response available", type: "assistant" },
            ]);
          }
        } catch (error) {
          console.error("Error during transcription and response:", error);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Error during transcription and response",
              type: "assistant",
            },
          ]);
        } finally {
          setLoading(false); // Hide loading symbol
        }
      });

      mediaStream.current.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  }, [token]);

  useEffect(() => {
    return () => {
      if (mediaStream.current) {
        mediaStream.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Language Learner</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="loading-container">
            <ClipLoader color="#2196f3" size={60} />
          </div>
        )}
        {/* Scroll to bottom */}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <button onClick={startRecording} disabled={recording}>
          {recording ? "Recording..." : "Start Recording"}
        </button>
        <button onClick={stopRecording} disabled={!recording}>
          Stop Recording
        </button>
      </div>
      <audio ref={audioElement} controls style={{ display: "none" }} />
    </div>
  );
};

export default AudioRecorder;
