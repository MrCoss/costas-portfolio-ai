// /src/components/layout/ChatBot.jsx

import React, { useState, useRef, useEffect } from "react";
import { sendMessageToLLM } from "../../services/chatbotService";
import suggestions from "../../services/suggestions";

// Mic Icon (Apple minimal)
const MicIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10a7 7 0 0 1-14 0" />
    <line x1="12" y1="17" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

// Close Icon (Apple minimal X)
const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke="black"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startVoiceInput = () => {
    if (!window.webkitSpeechRecognition) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setInput(text);
    };

    recognition.start();
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const reply = await sendMessageToLLM(userMsg.content);

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        id="chat-toggler"
        className="
          fixed bottom-6 right-6
          bg-white/60 backdrop-blur-xl
          shadow-xl text-black px-6 py-3
          rounded-2xl font-semibold
          hover:bg-white/80 transition
        "
      >
        AI Assistant
      </button>

      {/* Apple-Glass Chat Window */}
      {open && (
        <div
          className="
            fixed bottom-10 right-6 w-[420px]
            bg-white/25 backdrop-blur-2xl
            border border-white/40
            shadow-[0_4px_40px_rgba(0,0,0,0.20)]
            rounded-3xl p-6 pt-10 flex flex-col
            animate-[fadeIn_0.35s_ease-out,scaleUp_0.35s_ease-out]
          "
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute top-3 right-3
              w-8 h-8 flex items-center justify-center
              bg-white/70 backdrop-blur-xl
              rounded-xl border border-white/40
              hover:bg-white transition
            "
          >
            <CloseIcon />
          </button>

          <h3 className="text-xl font-semibold mb-4 text-black">
            Portfolio Assistant
          </h3>

          {/* Message Area */}
          <div className="flex-1 h-72 overflow-y-auto space-y-3 pr-2 mb-5">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl max-w-[85%] ${
                  msg.role === "user"
                    ? "bg-white text-black ml-auto border border-gray-200"
                    : "bg-white/40 backdrop-blur-xl text-black"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="text-gray-600 text-sm">Generating response…</div>
            )}

            {listening && (
              <div className="text-gray-700 text-sm">Listening…</div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setInput(s)}
                className="
                  bg-white/50 border border-white/40
                  backdrop-blur-xl text-black
                  px-3 py-2 rounded-xl text-sm
                  hover:bg-white/70 transition truncate
                "
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="flex items-center gap-2">
            <input
              className="
                flex-1 p-3 bg-white/60 backdrop-blur-xl
                rounded-xl border border-white/50
                text-black placeholder-black/40
                focus:outline-none
              "
              placeholder="Ask about my portfolio…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Mic */}
            <button
              onClick={startVoiceInput}
              className="
                w-10 h-10 flex items-center justify-center
                bg-white/70 backdrop-blur-xl
                rounded-xl border border-white/40
                hover:bg-white transition
              "
            >
              <MicIcon />
            </button>

            {/* Send */}
            <button
              onClick={sendMessage}
              className="
                px-4 py-2 bg-white/90 backdrop-blur-xl
                rounded-xl text-black font-semibold
                border border-white/50 text-sm
                hover:bg-white transition
              "
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.92); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
