import { useState, useRef, useEffect } from "react";
import "./css/chatbot.css";

const ChatBot = () => {
    const baseUrl = import.meta.env.BASE_URL;
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
        <img src={`${baseUrl}/img/whatsapp.png`} alt="Chat Bot" />
      </button>

      {/* Chatbox */}
      
    </div>
  );
};

export default ChatBot;