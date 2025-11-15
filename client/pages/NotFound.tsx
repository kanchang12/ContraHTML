import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const DUCK_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F6383f97492d4498fb140746bb5dc13c8%2Fc88ba0d9380648349ffa20411291a104?format=webp&width=800";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-purple-200 to-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="text-center space-y-6 relative z-10">
        <img
          src={DUCK_IMAGE}
          alt="Confused iQuack"
          className="w-40 h-40 mx-auto animate-wiggle"
        />
        <div>
          <h1 className="text-7xl font-black text-purple-600 mb-3">404</h1>
          <h2 className="text-3xl font-black text-gray-800">
            Oops! iQuack is confused! 🦆
          </h2>
          <p className="text-gray-700 font-bold mt-3 text-lg">
            This page doesn't exist (iQuack looked everywhere for it!)
          </p>
        </div>
        <p className="text-gray-700 max-w-md font-semibold">
          Don't worry! Let's get you back to learning HTML. iQuack is waiting
          for you!
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg transition-all text-white font-black text-lg px-8 py-3 rounded-full">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
