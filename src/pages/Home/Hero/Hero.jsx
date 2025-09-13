import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import heroImg from "../../../assets/hero/hero-img.png";
// import topArrow from "../../../assets/hero/top-arrow.png";
const Hero = () => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.from("#heroImg", {
      scale: 0,
      opacity: 0,
      delay: 0.5,
      duration: 3, // slower (was 1.5)
      ease: "power2.out", // smoother than "back.out"
    });
    gsap.from(titleSplit.words, {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.8,
    });

    gsap.from(paraRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.6,
      delay: 1,
    });
  }, []);

  return (
    <div className="mb-52 overflow-hidden">
      <div className="flex justify-around gap-10 items-center flex-col lg:flex-row-reverse">
        <div className="relative w-[500px] pb-20">
          {/* <img
            src={topArrow}
            alt="top-arrow "
            className="absolute -right-14  z-50"
          /> */}
          <img
            src={heroImg}
            className="relative left-14 xl:left-16 max-w-sm md:max-w-2xl rounded-lg z-0"
            id="heroImg"
          />
        </div>
        <div className="md:w-[500px]">
          <h1
            ref={titleRef}
            className="md:text-6xl text-5xl font-montHeavy text-[#0EBE7F] lg:-mb-2"
          >
            Asshash Health
          </h1>
          <p ref={paraRef} className="py-6 font-regular text-3xl lg:-mb-2">
            Your <span className="font-medium">Complete Health & Wellness</span>{" "}
            Partner
          </p>
          <p className="font-medium text-[#0E4E2F]">
            Bridging Physical, Mental & Spiritual Healthcare
          </p>
          <button className="btn bg-[#0EBE7F] mt-5 text-white">
            Book Your First Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
