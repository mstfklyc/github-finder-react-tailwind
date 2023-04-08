import { useRouteError } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div id="error-page" className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl fond-bold mb-8">Opps</h1>
          <p className="text-5xl mb-8">404 - Page not found</p>
          <Link to="/" className="btn btn-secondary btn-lg">
            <FaHome className="mr-5" />
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
