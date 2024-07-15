import React, { useState, useRef } from "react";
import RecordRTC from "recordrtc";

const AudioRecorder = () => {
  const [assistantResponse, setAssistantResponse] = useState("");
  const [recording, setRecording] = useState(false);
  const audioRecorder = useRef(null);
  const mediaStream = useRef(null);

  const startRecording = async () => {
    try {
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      audioRecorder.current = new RecordRTC(mediaStream.current, {
        type: "audio",
        audioBitsPerSecond: 16000, // Set the audio bits per second
        sampleRate: 16000, // Set the sample rate
        mimeType: "audio/wav",
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
        formData.append("audio", blob, "audio.wav");

        try {
          const response = await fetch("http://127.0.0.1:8000/transcribe_and_respond/", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log("Response from backend:", result);

          if (result.assistant_message) {
            setAssistantResponse(result.assistant_message);
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
    </div>
  );
};

export default AudioRecorder;
