import { useState, useRef, useEffect } from "react";
import "./css/chatbot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey 👋 How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" },
      { text: "Got it 👍 Let me help you with that.", sender: "bot" }
    ]);

    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="cb-container">
      {/* Toggle */}
      <button className="cb-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chatbox */}
      <div className={`cb-box ${open ? "show" : ""}`}>
        
        {/* Header */}
        <div className="cb-header">
          <div className="cb-user">
            <div className="cb-avatar">🤖</div>
            <div>
              <h4>Support</h4>
              <span>Online</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Messages */}
        <div className="cb-body">
          {messages.map((msg, i) => (
            <div key={i} className={`cb-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={endRef}></div>
        </div>

        {/* Input */}
        <div className="cb-input">
          <input
            type="text"
            placeholder="Write a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;