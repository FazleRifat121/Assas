import img1 from "../../../assets/ourmission/banner.png";

const OurMission = () => {
	return (
		<section className="w-full flex flex-col lg:flex-row">
			{/* Left: Image */}
			<div className="w-full lg:w-1/2">
				<img
					src={img1}
					alt="Our Mission"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Right: Mission Text */}
			<div className="w-full lg:w-1/2 bg-[#22B573] text-white flex items-center">
				<div className="p-10 lg:p-16">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
					<p className="text-base md:text-xl leading-relaxed">
						To make <span className="font-semibold">quality healthcare</span>{" "}
						available <br className="hidden md:block" /> to everyone{" "}
						<span className="italic">anytime, anywhere</span>
						<br className="hidden md:block" /> by integrating{" "}
						<span className="font-semibold">
							physical, mental, and spiritual <br className="hidden md:block" />
						</span>{" "}
						well-being through technology and community driven{" "}
						<br className="hidden md:block" /> solutions.
					</p>
				</div>
			</div>
		</section>
	);
};

export default OurMission;
