import React, { useState, useRef, useEffect } from "react";
import RecordRTC from "recordrtc";

// Function to get the token from localStorage
const getToken = () => localStorage.getItem('token');

// Function to get the refresh token from localStorage
const getRefreshToken = () => localStorage.getItem('refresh_token');

// Function to save tokens to localStorage
const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem('token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

// Function to refresh the token
const refreshToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    console.error("No refresh token available");
    return null;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refresh: refreshToken })
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const result = await response.json();
    saveTokens(result.access, result.refresh);
    return result.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

const AudioRecorder = () => {
  const [assistantResponse, setAssistantResponse] = useState("");
  const [recording, setRecording] = useState(false);
  const audioRecorder = useRef(null);
  const mediaStream = useRef(null);
  const audioElement = useRef(null);

  // Token refresh logic on component mount
  useEffect(() => {
    const interval = setInterval(async () => {
      const token = getToken();
      if (token) {
        const decodedToken = jwt_decode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        // Refresh the token if it will expire in the next minute
        if (decodedToken.exp < currentTime + 60) {
          await refreshToken();
        }
      }
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const startRecording = async () => {
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000, // Set the sample rate
        }
      });
      audioRecorder.current = new RecordRTC(mediaStream.current, {
        type: "audio",
        mimeType: "audio/webm",
        // Note: `audioBitsPerSecond` is not a typical parameter in RecordRTC
      });
      audioRecorder.current.startRecording();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing audio devices:", error);
    }
  };

  const stopRecording = async () => {
    if (audioRecorder.current) {
      audioRecorder.current.stopRecording(async () => {
        const blob = audioRecorder.current.getBlob();
        const formData = new FormData();
        formData.append("audio", blob, "audio.webm");

        try {
          let token = getToken(); // Get the token from localStorage
          if (!token) {
            token = await refreshToken();
          }

          const response = await fetch("http://127.0.0.1:8000/transcribe_and_respond/", {
            method: "POST",
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log("Response from backend:", result);

          if (result.assistant_message) {
            setAssistantResponse(result.assistant_message);
            if (result.audio_content) {
              const audioSrc = `data:audio/mp3;base64,${result.audio_content}`;
              if (audioElement.current) {
                audioElement.current.src = audioSrc;
                audioElement.current.play();
              }
            }
          } else {
            console.warn("No assistant message found in the response");
            setAssistantResponse("No response available");
          }
        } catch (error) {
          console.error("Error during transcription and response:", error);
          setAssistantResponse("Error during transcription and response");
        }
      });
      mediaStream.current.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button style={{ cursor: 'pointer' }} onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button style={{ cursor: 'pointer', margin: '10px' }} onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      <p style={{ color: 'blue' }}>Assistant Response: {assistantResponse}</p>
      <audio ref={audioElement} controls style={{ marginTop: '20px' }} />
    </div>
  );
};

export default AudioRecorder;
