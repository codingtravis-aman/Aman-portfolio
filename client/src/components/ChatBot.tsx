import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { botResponses } from "../lib/data";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const ChatBot = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! 👋 How can I help you today?",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Add bot response after a delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: randomResponse,
        sender: "bot"
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Scroll to bottom
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button 
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with Aman"
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`absolute bottom-16 right-0 w-80 ${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-xl overflow-hidden`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold">Chat with Aman</h3>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-white/80"
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-4 h-80 overflow-y-auto space-y-4 no-scrollbar">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start mb-4">
                  {message.sender === "bot" ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-2 flex-shrink-0">
                        <span className="text-xs font-bold">AJ</span>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3 text-black dark:text-white max-w-[80%]">
                        <p>{message.text}</p>
                      </div>
                    </>
                  ) : (
                    <div className="ml-auto flex items-start">
                      <div className="bg-primary rounded-lg p-3 text-white max-w-[80%]">
                        <p>{message.text}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"} flex items-center justify-center ml-2 flex-shrink-0`}>
                        <span className="text-xs font-bold">You</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
            
            <div className={`p-4 border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
              <form onSubmit={handleSubmit} className="flex">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={handleInputChange}
                  className={`flex-grow px-4 py-2 rounded-l-lg ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600" 
                      : "bg-gray-100 border-gray-300"
                  } border focus:border-primary focus:outline-none transition-colors`}
                  placeholder="Type your message..."
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary/90 transition-colors"
                  aria-label="Send message"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
