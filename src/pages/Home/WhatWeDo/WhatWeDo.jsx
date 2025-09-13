import magnify from "../../../assets/whatwedo/magnify.png";
import libra from "../../../assets/whatwedo/libra.png";
import book from "../../../assets/whatwedo/book.png";
import money from "../../../assets/whatwedo/money.png";
import cycle from "../../../assets/whatwedo/cycle.png";
const WhatWeDo = () => {
  return (
    <div>
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold mb-6 ">What We Do</h2>
          <p className="text-lg md:w-[490px]">
            All legal, financial, and operational tasks? We handle that. You
            simply invest, track, and earn
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {/* card 1  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r from-[#A3D65C] to-[#006838] shadow-md xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around gap-5 lg:gap-0">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 text-green-900 font-semibold">
                  Carefully select lands, flats, and commercial assets
                </p>
              </div>
            </div>
            {/* card 2  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r from-[#A3D65C] to-[#006838] shadow-md  xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around gap-5 lg:gap-0">
                <img src={libra} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 text-green-900 font-semibold">
                  Legally verify each property through due diligence
                </p>
              </div>
            </div>
            {/* card 3  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r from-[#A3D65C] to-[#006838] shadow-md  xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around gap-5 lg:gap-0">
                <img src={book} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 text-green-900 font-semibold">
                  Fractionalize the property into digital shares
                </p>
              </div>
            </div>
            {/* card 4  */}
            <div className="p-[2px] xl:ml-80 mt-8 rounded-lg bg-gradient-to-r from-[#A3D65C] to-[#006838] shadow-md  xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around gap-5 lg:gap-0">
                <img src={money} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 text-green-900 font-semibold">
                  Enable rental income or capital gain-based earnings
                </p>
              </div>
            </div>
            {/* card 5  */}
            <div className="p-[2px]  xl:ml-80 mt-8 rounded-lg bg-gradient-to-r from-[#A3D65C] to-[#006838] shadow-md  xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around gap-5 lg:gap-0 ">
                <img src={cycle} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 lg:w-32  text-green-900 font-semibold">
                  Offer buyback or secondary market exits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
