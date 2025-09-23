// import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
// import AppAd from "./AppAd/AppAd";
// import ClientReviews from "./ClientReviews/ClientReviews";
// import Faq from "./ClientReviews/Faq";
// import FaqHalf from "./ClientReviews/FaqHalf";
import Hero from "./Hero/Hero";
import HeroTwo from "./Hero/HeroTwo";
import OurMission from "./OurMission/OurMission";

// import HowItWork from "./HowItWork/HowItWork";
// import OurVision from "./OurVision/OurVision";
// import WhatWeDo from "./WhatWeDo/WhatWeDo";
// import WhyDigiyog from "./WhyDigiyog/WhyDigiyog";

const Home = () => {
  return (
    <div>
      <div className="w-full  ">
        <div className="max-w-[1800px] mx-auto p-4">
          <Navbar />
          <Hero />
        </div>
        <HeroTwo />
        <OurMission />
      </div>
      {/* <div className="bg-[#06582C]">
        <HowItWork />
        <WhyDigiyog />
      </div>
      <div className="relative">
        <ClientReviews />
        <div className="lg:absolute lg:left-5 lg:top-[900px] xl:left-32 2xl:top-[700px] 2xl:left-[400px] lg:w-[1000px] xl:w-[1200px]">
          <div>
            <Faq />
          </div>
        </div>
        <div className="bg-[#BCDC8F]">
          <FaqHalf />
          <WhatWeDo />
        </div>
      </div>
      <OurVision />
      <AppAd />
      <Footer color="bg-[#1E1E1E]" /> */}
    </div>
  );
};

export default Home;
