const HeroFour = () => {
  return (
    <div className="herofour h-[50vh] lg:h-[120dvh] flex flex-col justify-center lg:justify-between items-center text-center py-10">
      {/* Centered heading */}
      <h1 className="text-2xl lg:text-3xl  mt-[400px] lg:mt-16 -ml-4">
        Together for a <br />
        <span className="text-[#22B573]">Healthier</span> Tomorrow
      </h1>

      {/* Bottom text (only on large screens) */}
      <h4 className="text-lg hidden lg:block mb-2">
        At <span className="text-[#22B573]">Asshash Health</span>, we believe
        health is more than treatment <br />
        it’s a balance of body, mind, and spirit.
      </h4>
    </div>
  );
};

export default HeroFour;
