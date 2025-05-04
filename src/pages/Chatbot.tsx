
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatMessage } from "@/lib/types";
import { getInitialMessages, getChatbotResponse } from "@/lib/chatbotData";

const Chatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages());
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response delay (500-1500ms)
    setTimeout(() => {
      const botResponse = getChatbotResponse(userMessage.content);
      const botMessage: ChatMessage = {
        role: "assistant",
        content: botResponse,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Liver Health Assistant</h1>
            <p className="mt-2 text-lg text-gray-600">
              Ask questions about liver health, test results, or general wellness advice.
            </p>
          </div>

          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-medical-blue text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your question here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button 
                  type="submit" 
                  className="bg-medical-green hover:bg-opacity-90 text-white"
                  disabled={!inputMessage.trim() || isTyping}
                >
                  Send
                </Button>
              </form>
            </div>
          </Card>

          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900">Popular Questions</h2>
            <p className="mt-2 text-sm text-gray-600">
              Here are some questions you can ask the assistant:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
              {["What does the liver do?", 
                "What are symptoms of liver disease?",
                "How can I protect my liver?",
                "What foods are good for liver health?",
                "How does alcohol affect the liver?",
                "What do liver test results mean?"
              ].map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left border-medical-blue text-medical-blue hover:bg-medical-lightblue"
                  onClick={() => {
                    setInputMessage(question);
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              This chatbot provides general educational information about liver health. <br />
              It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;
