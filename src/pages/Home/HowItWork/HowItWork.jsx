import { useState } from "react";
import howPhone from "../../../assets/howitworks/howPhone.png";

const faqs = [
  {
    step: 1,
    badge: "Choose a Property",
    show: "Land, flats, or resorts -  handpicked, legally verified.",
  },
  {
    step: 2,
    badge: "Invest from Just 500 Taka",
    show: "Buy a fractional share secured by smart contract.",
  },
  {
    step: 3,
    badge: "Earn Rental Income or ROI",
    show: "Get monthly rental or earn on appreciation when sold.",
  },
  {
    step: 4,
    badge: "Sell Anytime",
    show: "Sell shares in our secondary market or to Digiyog.",
  },
];

const HowItWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatFirstThreeWords = (text) => {
    const words = text.trim().split(" ");
    const firstThree = words.slice(0, 4).join(" ");
    const rest = words.slice(4).join(" ");
    return (
      <div className="text-3xl max-w-full lg:w-96 text-green-900">
        <span className="font-semibold font-montRegular">{firstThree}</span>{" "}
        <span className="font-normal font-montRegular">{rest}</span>
      </div>
    );
  };

  return (
    <div className="bg-[#06582C] relative font-montHeavy">
      <div className="container mx-auto p-4">
        <h1 className="text-7xl md:text-left text-center font-bold text-white my-7">
          How it works
        </h1>
        <div className="bg-[#BCDC8F] p-5 rounded-3xl flex items-center flex-col-reverse lg:block ">
          <div className="space-y-2 ml-0 lg:ml-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-md transition-all duration-200 hover:cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className="font-semibold text-green-900">
                  Step {faq.step}
                </h3>
                <div className="badge bg-[#06582C] text-white border-none rounded-2xl">
                  {faq.badge}
                </div>

                {activeIndex === index &&
                  (faq.step === 1 ? (
                    formatFirstThreeWords(faq.show)
                  ) : (
                    <div className="text-3xl max-w-full lg:w-96 text-green-900 font-montRegular">
                      {faq.show}
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div>
            <img
              src={howPhone}
              alt="phone img"
              className="lg:absolute top-[157px] left-[600px] xl:left-[800px] 2xl:left-[1200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
