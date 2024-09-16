import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChatWindow from "../components/ChatWindow";

const ChatPage = () => {
  const location = useLocation();
  const { uploadedImage } = location.state;

  // Initially, only the default system response
  const [messages, setMessages] = useState([
    { text: "Please wait, your response is being loaded", sender: "left" },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false); // Initially input is disabled

  // Enable input after a small delay to simulate response
  useEffect(() => {
    const timer = setTimeout(() => {
      setInputEnabled(true);
    }, 2000); // Simulate loading time before allowing input
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "right" }]);
      setInputMessage("");

      // Simulate a new system response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Response received! Ask me anything else.", sender: "left" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Left side: Chat Window (7 parts) */}
      <div className="col-md-7 d-flex flex-column p-4">
        <div className="card flex-grow-1">
          <div className="card-body d-flex flex-column">
            <ChatWindow messages={messages} />
          </div>
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="form-control"
            placeholder={inputEnabled ? "Type a message..." : "Loading..."}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && inputEnabled) handleSendMessage();
            }}
            disabled={!inputEnabled} // Disable input initially
          />
          <button
            className="btn btn-primary mt-2 w-100"
            onClick={handleSendMessage}
            disabled={!inputEnabled} // Disable button initially
          >
            Send
          </button>
        </div>
      </div>

      {/* Right side: Static Image (3 parts) */}
      <div className="col-5 d-flex justify-content-center align-items-center p-4">
        <div className="card w-100">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="img-fluid"
            style={{ maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
