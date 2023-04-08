import { VscGithub } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar mb-12 shadow-lg bg-neutral text-neutral-content "
      data-theme="light"
    >
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2 tooltip-success">
          <VscGithub className="inline pr-2 text-3xl" />
          <Link className="text-lg font-bold align-middle " to="/">
            Github Finder{" "}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              <FcAbout /> About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
