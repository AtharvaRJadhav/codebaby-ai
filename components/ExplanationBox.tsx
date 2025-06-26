"use client";

interface ExplanationBoxProps {
  explanation: string;
}

export default function ExplanationBox({ explanation }: ExplanationBoxProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <div className="bg-purple-500 text-white p-2 rounded-lg mr-3">
          <span className="text-lg">🎓</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Your Code Explanation</h3>
      </div>
      
      <div className="prose prose-purple max-w-none">
        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {explanation}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-purple-200">
        <p className="text-sm text-purple-600 font-medium">
          🌟 Was this helpful? Try pasting more code to learn!
        </p>
      </div>
    </div>
  );
}