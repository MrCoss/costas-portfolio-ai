import React, { useState, useRef, useEffect } from "react";
import chatService from "../../services/chatbotService";
import { Send, Bot, X, Sparkles, User } from "lucide-react"; // *Requires: npm install lucide-react*
// If you don't have lucide-react, you can replace these components with simple SVGs or Emoji.

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const msgEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  // Core message handler
  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMsg = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate network delay or fetch real service
    // const reply = await chatService(text); 
    // Note: Ensure chatService handles errors gracefully
    let reply = "";
    try {
         reply = await chatService(text);
    } catch (e) {
         reply = "I'm having a bit of trouble connecting right now.";
    }

    const botMsg = {
      sender: "bot",
      text: reply,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setTyping(false);
    setMessages((prev) => [...prev, botMsg]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const suggestions = [
    "Show major projects",
    "List certifications",
    "Skills summary",
    "Experience overview",
  ];

  return (
    <>
      {/* --- Trigger Button (Orb Style) --- */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-8 right-8 z-50
            w-16 h-16 rounded-full
            bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
            shadow-[0_0_30px_rgba(99,102,241,0.6)]
            flex items-center justify-center
            hover:scale-110 transition-transform duration-300 ease-out
            group
          "
        >
          {/* Inner glow ring */}
          <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/60 transition-colors" />
          <Sparkles className="text-white w-7 h-7 animate-pulse-slow" />
        </button>
      )}

      {/* --- Main Chat Window (Apple Glass) --- */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-50
            w-[90vw] max-w-[380px] h-[600px] max-h-[80vh]
            flex flex-col
            bg-gray-900/60 backdrop-blur-3xl
            border border-white/10
            rounded-[2rem]
            shadow-2xl shadow-black/50
            animate-in fade-in slide-in-from-bottom-4 duration-300
            overflow-hidden
          "
        >
          {/* --- Header --- */}
          <div className="
            flex justify-between items-center px-6 py-4 
            bg-white/5 border-b border-white/5
          ">
            <div className="flex items-center gap-3">
              <div className="
                w-10 h-10 rounded-full 
                bg-gradient-to-tr from-blue-500 to-purple-600
                flex items-center justify-center
                shadow-lg shadow-purple-500/20
              ">
                <Bot className="text-white w-5 h-5" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-base tracking-wide">Portfolio AI</h2>
                <p className="text-white/50 text-xs">Online & Ready</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="
                w-8 h-8 rounded-full bg-white/5 hover:bg-white/10
                flex items-center justify-center transition
                text-white/70 hover:text-white
              "
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* --- Chat Area --- */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {/* Welcome / Empty State */}
            {messages.length === 0 && (
              <div className="text-center mt-10 space-y-4 opacity-0 animate-fade-in-delay">
                <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center border border-white/10">
                    <Sparkles className="text-purple-400 w-8 h-8" />
                </div>
                <p className="text-white/80 text-sm px-6">
                  Ask me anything about the projects, skills, or experience displayed here.
                </p>
                
                <div className="grid grid-cols-1 gap-2 px-2 mt-4">
                  {suggestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(q)}
                      className="
                        text-xs text-left text-white/70
                        bg-white/5 hover:bg-white/10 border border-white/5
                        rounded-xl py-3 px-4
                        transition-all duration-200
                        hover:pl-5 hover:border-white/20
                      "
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message List */}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end gap-3 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Bot className="w-3 h-3 text-white/70" />
                  </div>
                )}

                <div
                  className={`
                    max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                    animate-pop-in
                    ${
                      m.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md"
                    }
                  `}
                >
                  {m.text}
                  <div className={`text-[10px] mt-1 ${m.sender === 'user' ? 'text-blue-200' : 'text-white/40'}`}>
                    {m.time}
                  </div>
                </div>

                {m.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                     <User className="w-3 h-3 text-blue-400" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white/70" />
                </div>
                <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            )}
            <div ref={msgEndRef} />
          </div>

          {/* --- Input Area (Capsule Style) --- */}
          <div className="p-4 pt-2 bg-gradient-to-t from-black/20 to-transparent">
            <div className="
              flex items-center gap-2 
              bg-white/10 border border-white/10 
              backdrop-blur-md 
              rounded-full pl-4 pr-2 py-2
              focus-within:bg-white/15 focus-within:border-white/20
              transition-all duration-300
            ">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="
                  flex-1 bg-transparent text-white placeholder-white/30 text-sm
                  outline-none min-w-0
                "
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className={`
                  w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                  ${input.trim() 
                    ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 scale-100" 
                    : "bg-white/5 text-white/20 scale-90 cursor-not-allowed"}
                `}
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CSS Utilities for Animations --- */}
      <style>{`
        /* Custom Scrollbar for Glass Effect */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Animations */
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInDelay {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-fade-in-delay {
            animation: fadeInDelay 0.5s ease-out 0.2s forwards;
        }
        
        .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default ChatBot;