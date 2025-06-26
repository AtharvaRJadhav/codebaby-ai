"use client";

import { useRouter } from "next/navigation";
import { Code2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const navigateToAuth = (mode: "signin" | "signup") => {
    router.push(`/auth?mode=${mode}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CodeBaby</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
                Use Cases
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {status === "loading" ? (
              <span className="text-gray-500">Loading...</span>
            ) : session?.user ? (
              <>
                <span className="text-gray-700 font-medium">{session.user.name}</span>
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => navigateToAuth("signin")}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => navigateToAuth("signup")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}