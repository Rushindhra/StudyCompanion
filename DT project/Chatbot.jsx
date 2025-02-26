import React, { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: "user" },
      ]);
      const botResponse = generateBotResponse(userInput);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
      setUserInput("");
    }
  };
  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("notes") || lowerInput.includes("help")) {
      return "You can check the study notes section for detailed explanations!";
    } else if (lowerInput.includes("practice")) {
      return "Check the practice problems section to try different problems!";
    } else {
      return "I'm here to help with notes and practice problems. How can I assist you?";
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(); 
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* Floating Chatbot Icon with an image (placeholder) */}
      <div
        className="chatbot-icon"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg" 
          alt="Chatbot"
          className="chatbot-logo"
        />
      </div>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chat-window">
            <div className="messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === "bot" ? "bot" : "user"}`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            <div className="input-section">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
