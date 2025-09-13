import building from "../../../assets/whydigiyog/building.png";
import halfCircle from "../../../assets/whydigiyog/halfCircle.png";
import blockChain from "../../../assets/whydigiyog/blockChain.png";
import halal from "../../../assets/whydigiyog/halal.png";
import roi from "../../../assets/whydigiyog/roi.png";
import legal from "../../../assets/whydigiyog/legal.png";
import secondary from "../../../assets/whydigiyog/secondary.png";
import seller from "../../../assets/whydigiyog/seller.png";
import rectangle1 from "../../../assets/whydigiyog/Rectangle 217.png";
import rectangle2 from "../../../assets/whydigiyog/Rectangle 218.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhyDigiyog = () => {
  useGSAP(() => {
    const first = gsap.utils.toArray("#firstGrid > div");
    const second = gsap.utils.toArray("#secondGrid > div");
    const third = gsap.utils.toArray("#thirdGrid > div");

    gsap.set([...first, ...second, ...third], { x: -50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#whybg",
        start: "top 40%",
        toggleActions: "restart none none none",
      },
    });

    tl.to(first, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        second,
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.2"
      )
      .to(
        third,
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.2"
      );
    gsap.from("#halfCircle", {
      scrollTrigger: {
        trigger: "#whybg",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      x: -100,
      duration: 2,
      opacity: 0,
      ease: "power2.out",
    });
    gsap.from("#building", {
      scrollTrigger: {
        trigger: "#whybg",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      x: 100,
      duration: 2,
      opacity: 0,
      ease: "power2.out",
    });
    gsap.from("#rectangle1", {
      scrollTrigger: {
        trigger: "#whybg",
        start: "top 160%",
        scrub: true,
      },
      y: 100,
      duration: 2,
      ease: "power2.out",
    });

    gsap.from("#rectangle2", {
      scrollTrigger: {
        trigger: "#whybg",
        start: "top 160%",
        scrub: true,
      },
      y: 100,
      duration: 2,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="relative z-10" id="whybg">
      <div className="whyBg lg:mt-32 ">
        <div className="container mx-auto p-4">
          <h1 className="text-7xl md:text-left text-center font-bold lg:mt-96  mt-32">
            Why Digiyog?
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5  lg:-mt-5 ">
            <div className="grid gap-4 mt-20">
              {/* first row */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                id="firstGrid"
              >
                {/* first card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={blockChain} alt="Blockchain Secured" />
                    <h3 className="text-black font-bold ">
                      Blockchain <br /> Secured
                    </h3>
                  </div>
                </div>

                {/* second card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={halal} alt=" Halal Investment" />
                    <h3 className="text-black font-bold  ">
                      Halal <br /> Investment
                    </h3>
                  </div>
                </div>
                {/* third card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={roi} alt="High ROI Assets" />
                    <h3 className="text-black font-bold ">
                      High ROI <br /> Assets
                    </h3>
                  </div>
                </div>
              </div>
              {/* second row  */}
              <div
                className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                id="secondGrid"
              >
                {/* first card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={legal} alt="Legally Verified Properties" />
                    <h3 className="text-black font-bold">
                      Legally Verified <br /> Properties
                    </h3>
                  </div>
                </div>
                {/* second card  */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={seller} alt="Seller Onboarding Option" />
                    <h3 className="text-black font-bold">
                      Seller Onboarding <br /> Option
                    </h3>
                  </div>
                </div>
              </div>
              {/* third row  */}
              <div
                className="grid grid-col-1 md:grid-cols-3 gap-4 "
                id="thirdGrid"
              >
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={secondary} alt="Secondary Marketplace" />
                    <h3 className="text-black font-bold">
                      Secondary <br />
                      Marketplace
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute right-0 bottom-0">
              <div className="relative justify-end">
                <img
                  src={halfCircle}
                  className="absolute z-0 top-28 md:top-32 2xl:w-2xl"
                  id="halfCircle"
                />
                <img
                  src={building}
                  alt="building"
                  className="relative 2xl:w-2xl"
                  id="building"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={rectangle1}
        className="lg:absolute lg:top-14 lg:left-44 xl:top-[70px] xl:left-80 2xl:top-24 2xl:left-80 -z-10 hidden lg:block"
        id="rectangle1"
      />
      <img
        src={rectangle2}
        className="lg:absolute top-24 right-0 2xl:top-24 -z-10 hidden lg:block "
        id="rectangle2"
      />
    </div>
  );
};

export default WhyDigiyog;
