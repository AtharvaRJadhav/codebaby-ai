"use client";

import { useState, useRef } from "react";
import { Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeInput from "@/components/CodeInput";
import ExplanationBox from "@/components/ExplanationBox";

export default function Hero() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setCode(event.target?.result as string);
    };
    reader.readAsText(file);
  };

  const handleExplain = async () => {
    if (!code.trim()) return;
    setIsLoading(true);
    setExplanation("");
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      setExplanation(data.explanation);
    } catch (err) {
      setExplanation("Sorry, something went wrong. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 transform -translate-x-1/2">
        <div className="relative">
          <Sparkles className="h-4 w-4 text-purple-500" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
        </div>
      </div>
      <div className="absolute top-32 right-1/4 transform translate-x-1/2">
        <div className="relative">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-200 rounded-full animate-ping"></div>
        </div>
      </div>
      <div className="absolute top-40 left-1/3">
        <div className="relative">
          <Sparkles className="h-3 w-3 text-purple-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-gray-900 p-4 rounded-2xl relative">
              <Code2 className="h-12 w-12 text-white" />
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                AI
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Explain code like{" "}
            <span className="text-purple-600">you're 5</span>
            <br />
            with <span className="text-red-500">AI magic</span> ✨
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Paste any code and get playful explanations with emojis, analogies, and simple words.
            <br />
            <span className="text-purple-600 font-medium">Perfect for beginners, students, and curious minds!</span>
          </p>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-4xl mx-auto">
            <CodeInput 
              value={code}
              onChange={setCode}
              placeholder="// Paste your code here... 
// Try something like:
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('World');"
            />
            
            <div className="mt-6">
              <Button 
                onClick={handleExplain}
                disabled={!code.trim() || isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Explaining...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explain Like I'm 5!
                  </>
                )}
              </Button>
            </div>

            {explanation && (
              <div className="mt-8">
                <ExplanationBox explanation={explanation} />
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Turn complex code into fun stories in{" "}
              <span className="font-semibold text-purple-600">seconds</span>
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                JavaScript, Python, Java & more
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Beginner-friendly explanations  
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Powered by AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}