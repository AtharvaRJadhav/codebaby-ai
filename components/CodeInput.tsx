"use client";

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CodeInput({ value, onChange, placeholder }: CodeInputProps) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-64 p-6 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 font-mono text-sm bg-gray-50"
        style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
      />
      <div className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
        Code Input
      </div>
    </div>
  );
}