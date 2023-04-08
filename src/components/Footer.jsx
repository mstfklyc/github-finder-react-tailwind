import { FaGithub } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className=" flex justify-around footer p-10 bg-gray-700 text-primary-content footer-center text-white w-90">
      <div className="flex">
        <FaGithub color="dark" />
        <p>&copy; {footerYear} Github, inc</p>
      </div>
      <div>
        <ul className="text-left link no-underline">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="">
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact Github</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-left link no-underline">
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li className="">
            <a href="#">Status</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-left link no-underline">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li className="">
            <a href="#">Docs</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
