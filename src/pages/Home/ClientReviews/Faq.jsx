import { useGSAP } from "@gsap/react";
import { IoMdArrowForward } from "react-icons/io";
import gsap from "gsap";
import { Link } from "react-router";
import { useState } from "react";

const faqData = [
  {
    question: "Who can invest with Digiyog?",
    answer:
      "Anyone with a Bangladeshi bank account or MFS (Mobile Financial Services) account can invest in fractionalized <br /> real estate properties through Digiyog.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "We use advanced cybersecurity technologies and strict access controls to protect user data stored in the cloud.",
  },
  {
    question: "Can I visit the property myself?",
    answer:
      "Yes! We provide property details and encourage you to visit the properties in person.",
  },
  {
    question: "What is the minimum investment amount on Digiyog?",
    answer: "The minimum investment is BDT 500.",
  },
];

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };
  useGSAP(() => {
    gsap.from("#faqCards > div", {
      scrollTrigger: {
        trigger: "#faqCards",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="relative my-5 lg:my-0 p-4 ">
      <div className="container mx-auto p-4 bg-green-800 rounded-3xl relative z-10">
        <div className="flex flex-col items-center justify-around lg:flex-row ">
          <div className="lg:w-52 text-center  mt-20">
            <h1 className="text-6xl lg:text-4xl 2xl:text-6xl text-white font-bold leading-15 ">
              Frequently <span className="xl:ml-12">Asked</span> Questions
            </h1>
          </div>
          <div className="mt-20" id="faqCards">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-5">
                <div
                  className={`collapse collapse-arrow border border-base-300 bg-base-100 ${
                    openFaqIndex === index
                      ? "collapse-open [&>div::after]:text-green-500"
                      : ""
                  }`}
                >
                  <div
                    className="collapse-title font-semibold cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </div>
                  {openFaqIndex === index && (
                    <div
                      className="collapse-content text-sm"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              </div>
            ))}

            <Link
              to="/frequent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#8EC63F] flex justify-end items-center"
            >
              <p>View More</p>
              <IoMdArrowForward className="mt-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
