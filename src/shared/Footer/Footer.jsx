import { Link } from "react-router";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = ({ color }) => {
  return (
    <div className={`${color} text-neutral-content`}>
      <div className="container mx-auto p-4">
        <footer className={`footer px-6 py-8 grid md:grid-cols-3 gap-8 ${color}`}>
          
          {/* Logo + Socials */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/footer.png" alt="logo" className="w-40 mb-4" />
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Twitter">
                <FaSquareXTwitter className="text-xl text-blue-400 hover:opacity-80" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl" style={{ color: '#E1306C' }} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl text-blue-600 hover:opacity-80" />
              </a>
            </div>
          </div>

          {/* Links Group 1 */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
          </div>

          {/* Links Group 2 */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <Link className="link link-hover">Privacy Policy</Link>
            <Link
              to="/terms"
              className="link link-hover"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Terms
            </Link>
            <a className="link link-hover">Legal</a>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
