import { Link } from "react-router-dom";
import { ArrowRight, Code2, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">CodeLearn</span>
          </div>
          <Link to="/learn">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-shadow">
              Start Learning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Learn HTML
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to your personal HTML learning journey! Every day brings a
                new, simple challenge designed just for you. Learn by doing—start with
                tags, change words, add colors, and watch your creation come to life
                in real-time.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Daily Lessons</h3>
                  <p className="text-sm text-gray-600">
                    New HTML challenges every day
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Learn by Doing</h3>
                  <p className="text-sm text-gray-600">
                    Edit code and see results instantly
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code2 className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Real HTML Code</h3>
                  <p className="text-sm text-gray-600">
                    Master actual HTML tags and attributes
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Save Progress</h3>
                  <p className="text-sm text-gray-600">
                    Your work is saved automatically
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/learn">
                <Button className="w-full sm:w-auto px-8 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all text-white font-semibold text-lg">
                  Let's Start Learning!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                ✨ No installation needed. Just start coding!
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="h-2 bg-white/30 rounded w-3/4"></div>
                <div className="h-2 bg-white/20 rounded w-1/2"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded p-4 space-y-2">
                  <div className="text-sm font-mono text-blue-600">
                    &lt;h1&gt;Hello World!&lt;/h1&gt;
                  </div>
                  <div className="text-sm font-mono text-purple-600">
                    &lt;p&gt;Welcome&lt;/p&gt;
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-10 bg-white/10 rounded flex items-center justify-center text-xs text-gray-300">
                    Your Code
                  </div>
                  <div className="flex-1 h-10 bg-white/10 rounded flex items-center justify-center text-xs text-gray-300">
                    Preview
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full blur-2xl opacity-40"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="bg-white/50 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Read Instructions</h3>
              <p className="text-gray-600">
                Each lesson has clear, simple instructions on what to do
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Write HTML Code</h3>
              <p className="text-gray-600">
                Edit the HTML code to make the changes the instruction asks for
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">See It Live</h3>
              <p className="text-gray-600">
                Watch your creation appear instantly on the right side
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>
            Made with 💜 to help young learners discover the magic of coding
          </p>
        </div>
      </div>
    </div>
  );
}
