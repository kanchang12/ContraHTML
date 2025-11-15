import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Oops! This page doesn't exist
          </p>
        </div>
        <p className="text-gray-500 max-w-md">
          The page you're looking for might have been moved or doesn't exist.
          Let's get you back on track!
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-shadow">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
