import { Link } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = ({ color }) => {
  return (
    <div className={`${color} text-neutral-conten`}>
      <div className="container mx-auto p-4">
        <footer
          className={`footer px-10 py-8 ${color} text-neutral-content grid-cols-3`}
        >
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/footer.svg" alt="logo" className="w-40 mb-2" />
            </Link>
          </div>
          <div></div>
          <div className="grid grid-cols-2 gap-20 md:gap-5 -ml-6 md:ml-0 ">
            <div className="flex flex-col gap-2">
              <a className="link link-hover">About</a>
              <a className="link link-hover">Contact Us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Blog</a>
            </div>

            <div className="flex flex-col gap-2">
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

            <div className="grid grid-flow-col gap-2.5 md:gap-4 mt-6 lg:mt-0">
              <a href="mailto:hello@digiyog.app">
                <IoMdMail className="text-xl" />
              </a>
              <a>
                <FaLinkedinIn className="text-xl" />
              </a>
              <a>
                <FaXTwitter className="text-xl" />
              </a>
              <a>
                <AiFillInstagram className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/digiyog.official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-xl" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
