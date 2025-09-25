import { useGSAP } from "@gsap/react";
import img1 from "../../../assets/faq/doc.png"
import gsap from "gsap";
import { useState } from "react";

const faqData = [
  {
    question: "How does the Health Card work?",
    answer:
      "Anyone with a Bangladeshi bank account or MFS (Mobile Financial Services) account can invest in fractionalized <br /> real estate properties through Digiyog.",
  },
  {
    question: "Can patients without smartphones get help via an agent?",
    answer:
      "We use advanced cybersecurity technologies and strict access controls to protect user data stored in the cloud.",
  },
  {
    question: "How is privacy protected?",
    answer:
      "Yes! We provide property details and encourage you to visit the properties in person.",
  },
  {
    question: "Supported payment methods",
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
      <h1 className="text-3xl text-center mb-4">Frequently Asked Questions</h1>
      <div className="container mx-auto p-4 bg-[#D9D9D9] rounded-3xl relative z-10">
        
        <div className="flex flex-col items-center justify-around lg:flex-row-reverse ">
          
          <div className="lg:w-52  mt-20">
            <img src ={img1} />
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

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
