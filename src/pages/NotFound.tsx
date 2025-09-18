import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center monastery-card p-12 max-w-md mx-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 spiritual-text">
          The page you're looking for doesn't exist. Perhaps you'd like to explore 
          our monastery heritage instead?
        </p>
        <div className="space-y-3">
          <Link to="/" className="block">
            <Button className="monastery-button w-full">
              Return to Home
            </Button>
          </Link>
          <Link to="/tours" className="block">
            <Button variant="outline" className="w-full">
              Explore Virtual Tours
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
