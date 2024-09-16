import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div
      className="chat-window"
      style={{
        height: "400px", // Fixed height for chat window
        width: "100%", // Full width of the container
        overflowY: "scroll", // Scrollable when content overflows
        border: "1px solid #ccc",
        padding: "15px",
      }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-bubble chat-bubble-${message.sender}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
