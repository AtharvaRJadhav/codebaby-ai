"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What programming languages does CodeBaby support?",
    answer: "CodeBaby supports all major programming languages including JavaScript, Python, Java, C++, C#, Ruby, Go, Rust, PHP, Swift, Kotlin, and many more. Our AI is trained to understand syntax and patterns across dozens of languages."
  },
  {
    question: "How accurate are the code explanations?",
    answer: "Our explanations are powered by advanced AI models trained specifically for code understanding. While we strive for high accuracy, we recommend using explanations as learning aids alongside proper documentation and testing. The explanations are designed to be educational and fun, perfect for beginners."
  },
  {
    question: "Can I use CodeBaby for production code reviews?",
    answer: "CodeBaby is perfect for educational purposes, learning, and informal code reviews. While our explanations are accurate, we recommend thorough testing and professional code review practices for production environments."
  },
  {
    question: "Is my code kept private and secure?",
    answer: "Yes! We take privacy seriously. Your code is processed securely and is not stored permanently on our servers. We use enterprise-grade encryption and follow industry best practices for data protection."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Absolutely! We offer special pricing for students, educators, and educational institutions. Contact our support team with your educational email address to learn about available discounts."
  },
  {
    question: "Can I integrate CodeBaby with my development tools?",
    answer: "Yes! Our Pro plan includes API access that allows you to integrate CodeBaby with your favorite IDEs, code review tools, and educational platforms. We also offer VS Code and other popular IDE extensions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <div className="space-x-4">
            <a 
              href="mailto:support@codebaby.com" 
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Email Support
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="#" 
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Join Discord Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}