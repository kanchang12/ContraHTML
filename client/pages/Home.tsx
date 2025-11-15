import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DUCK_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F6383f97492d4498fb140746bb5dc13c8%2Fc88ba0d9380648349ffa20411291a104?format=webp&width=800";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-300 via-sky-200 to-cyan-100 relative overflow-hidden">
      {/* Floating animated bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-5 w-32 h-32 bg-purple-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-sm border-b-4 border-yellow-400 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={DUCK_IMAGE}
              alt="iQuack the Duck"
              className="w-10 h-10 animate-wiggle"
            />
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              iQuack
            </span>
          </div>
          <Link to="/learn">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-all text-white font-bold text-lg px-6 py-2 rounded-full">
              Start Learning! 🚀
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-black text-gray-800 leading-tight">
                Hey there! 👋
              </h1>
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
                I'm iQuack!
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold leading-relaxed">
                Ready to learn HTML and become a super coder? 💻 Let's build
                awesome websites together! I'll be your guide, and you'll be
                amazed at what you can create!
              </p>
            </div>

            {/* Fun Features */}
            <div className="space-y-3 pt-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border-4 border-purple-300 flex gap-3">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="font-bold text-gray-800">Easy Lessons</h3>
                  <p className="text-sm text-gray-600">
                    Start super simple, level up step by step!
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border-4 border-pink-300 flex gap-3">
                <span className="text-3xl">🌈</span>
                <div>
                  <h3 className="font-bold text-gray-800">Your Creations</h3>
                  <p className="text-sm text-gray-600">
                    See your code come to life instantly!
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border-4 border-yellow-300 flex gap-3">
                <span className="text-3xl">💾</span>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Remember Everything
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your progress is saved automatically!
                  </p>
                </div>
              </div>
            </div>

            {/* Big CTA Button */}
            <Link to="/learn">
              <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:shadow-2xl transition-all text-white font-black text-xl px-8 py-4 rounded-full uppercase tracking-wider">
                Let's Learn HTML! 🦆
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>

          {/* Right Side - Duck Mascot */}
          <div className="flex justify-center lg:justify-end items-center relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-3xl blur-3xl"></div>
            <img
              src={DUCK_IMAGE}
              alt="iQuack the Duck"
              className="relative z-20 w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl animate-bounce-duck"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full blur-2xl opacity-40 z-10"></div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl mx-4 mt-12 p-8 shadow-xl border-4 border-yellow-300">
        <h2 className="text-4xl font-black text-center mb-12 text-gray-800">
          How iQuack Works 🦆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 border-4 border-purple-300">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="font-black text-gray-800 text-xl mb-2">Read</h3>
            <p className="text-gray-700 font-semibold">
              I give you simple instructions about what to build
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 border-4 border-pink-300">
            <div className="text-5xl mb-4">⌨️</div>
            <h3 className="font-black text-gray-800 text-xl mb-2">Code</h3>
            <p className="text-gray-700 font-semibold">
              You type HTML code to make the changes I ask for
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 border-4 border-yellow-300">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="font-black text-gray-800 text-xl mb-2">Create</h3>
            <p className="text-gray-700 font-semibold">
              Watch your creation appear on the screen instantly!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-16 pb-8">
        <p className="text-gray-700 font-bold text-lg">
          Made with 💜 by iQuack to help you become an amazing coder! 🚀
        </p>
        <p className="text-gray-600 text-sm mt-2">
          © 2024 iQuack Learning. All rights reserved. 🦆
        </p>
      </div>
    </div>
  );
}
