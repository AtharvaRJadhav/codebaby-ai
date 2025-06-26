"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read mode from URL search parameters
  useEffect(() => {
    setMounted(true);
    const mode = searchParams?.get('mode');
    // Default to sign in if no mode is specified
    setIsSignUp(mode === 'signup');
  }, [searchParams]);

  const handleGoogleAuth = () => {
    signIn("google");
  };

  // Show loading state until component is mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-900 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CodeBaby</span>
          </div>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? "Sign up" : "Sign in"}
            </h1>
            <p className="text-gray-600">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gray-900 font-medium hover:underline"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>

          {/* Google Auth Button */}
          <Button
            onClick={handleGoogleAuth}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium text-base h-auto flex items-center justify-center space-x-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>{isSignUp ? "Sign up with Google" : "Sign in with Google"}</span>
          </Button>

          {/* Security Message */}
          <p className="text-center text-gray-500 text-sm mt-6 leading-relaxed">
            We only use Google for authentication. Your Google data is safe and secure.
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}