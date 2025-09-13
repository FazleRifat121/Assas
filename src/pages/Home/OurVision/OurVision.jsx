import rect from "../../../assets/ourvision/rect.png";
import mask1 from "../../../assets/ourvision/Maskgroup.png";
import mask2 from "../../../assets/ourvision/Maskgroup1.png";
import mask3 from "../../../assets/ourvision/Maskgroup2.png";
import houses from "../../../assets/ourvision/houses.png";
const OurVision = () => {
  return (
    <div className="bg-[#06582C] ">
      <div className="container mx-auto p-4 ">
        <div className="flex items center justify-between flex-col-reverse lg:flex-row mt-20 gap-10">
          <div className="text-white space-y-5">
            <h1 className="text-white text-7xl font-montSemiBold">
              Our Vision
            </h1>
            <p className="text-xl lg:w-[500px]">
              We're not just building an investment app—we're building a real
              estate ecosystem. One where:
            </p>
            <ul className="font-montRegular">
              <li>· Property owners can sell partial ownership </li>
              <li>· Buyers can diversify risk</li>
              <li>· Tenants can be matched with verified landlords </li>
              <li>· And real estate becomes liquid, inclusive, and fair</li>
            </ul>
            <h3 className="text-2xl font-montSemiBold">
              As we grow, our roadmap includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:w-[500px] ">
              {/* first card  */}
              <div className="flex items-start gap-3">
                <img src={rect} alt="vertical bar" className="h-12 mt-7" />
                <div className="flex flex-col items-center text-white">
                  <img src={mask1} alt="globe icon" />
                  <p className=" w-36 ">
                    Onboarding NRBs from the Middle East, Europe, and Asia
                  </p>
                </div>
              </div>
              {/* second card  */}
              <div className="flex items-start gap-3">
                <img src={rect} alt="vertical bar" className="h-12 mt-7" />
                <div className="flex flex-col items-center text-white">
                  <img src={mask2} alt="globe icon" />
                  <p className=" w-36 ">
                    A platform for renting, selling, or managing properties
                    digitally
                  </p>
                </div>
              </div>
              {/* third card  */}
              <div className="flex items-start gap-3">
                <img src={rect} alt="vertical bar" className="h-12 mt-7" />
                <div className="flex flex-col items-center text-white">
                  <img src={mask3} alt="globe icon" />
                  <p className=" w-36 ">
                    Future support for crypto-based international investments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={houses} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
