import bgCircle from "../../../assets/appAd/bgCircle.png";
import appComingSoon from "../../../assets/appAd/appComingSoon.png";
import googleplay from "../../../assets/appAd/googleplay.png";
import appstore from "../../../assets/appAd/appstore.png";
import iphone from "../../../assets/appAd/iphone.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AppAd = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#appAd",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
    tl.from("#iphone", {
      duration: 1,

      opacity: 0,
      scale: 0,
      ease: "elastic.out(1, 0.5)", // perfect for that pop feel
    });
    tl.from("#comingSoon", {
      x: 100,

      duration: 0.1,
      opacity: 0,
      ease: "power1.out",
    }).from(
      "#googlePlay, #appStore",
      {
        x: 100,
        duration: 0.1,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.2,
      },
      "<=0.5"
    );
  }, []);
  return (
    <div className="relative bg-[#BCDC8F] " id="appAd">
      <div className="grid items-center min-h-[770px] container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div>
            <img
              src={bgCircle}
              className="xl:absolute xl:top-10 xl:left-[270px] z-0 w-2xl"
              id="bgCircle"
            />
            <img
              src={iphone}
              className="absolute -top-2 left-16 md:top-5 md:left-44  md:w-sm lg:top-32  lg:left-28 xl:top-7  xl:left-[360px] z-10 w-[300px] xl:w-auto "
              id="iphone"
            />
          </div>
          <div className="flex flex-col items-end gap-10 mt-32 xl:mt-20 xl:ml-32">
            <img src={appComingSoon} alt="app coming soon" id="comingSoon" />
            <div>
              <img
                src={googleplay}
                alt="googleplay"
                className="w-sm"
                id="googlePlay"
              />
              <img
                src={appstore}
                alt="googleplay"
                className="w-sm "
                id="appStore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAd;
