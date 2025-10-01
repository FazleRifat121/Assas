import { Link } from "react-router";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ color = "bg-[#18332A]" }) => {
  return (
    <div className={`${color} text-white`}>
      <div className="container mx-auto px-6 py-12">
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Section: Logo + Socials */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/footer.png" alt="logo" className="w-40 mb-6" />
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:opacity-80" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:opacity-80" />
              </a>
              <a href="#" aria-label="Twitter/X">
                <FaSquareXTwitter className="text-2xl hover:opacity-80" />
              </a>
            </div>
          </div>

          {/* Middle Section: Privacy Policy */}
          <div className="text-left">
            <h4 className="font-semibold mb-3">Privacy Policy</h4>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Introduction & Scope
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How Data is Used
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Sharing & Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Security
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Terms */}
          <div className="text-left">
            <h4 className="font-semibold mb-3">Terms</h4>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Introduction & Scope
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How Data is Used
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Sharing & Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Security
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
