import img1 from "../../../assets/whychooseus/img1.png";
import img2 from "../../../assets/whychooseus/img2.png";
// import img3 from "../../../assets/whychooseus/img3.png";
import img4 from "../../../assets/whychooseus/img4.png";
import img5 from "../../../assets/whychooseus/img5.png";
import mobile from "../../../assets/whychooseus/mobile.png";

const WhyChooseUs = () => {
	const firstRow = [
		{
			img: img1,
			title: "Holistic Approach",
			desc: "Physical, mental & spiritual health together",
		},
		{
			img: img2,
			title: "Affordable & Accessible",
			desc: "Designed for underserved communities",
		},
		{
			img: img2,
			title: "Licensed Professionals",
			desc: "Certified doctors, therapists, and spiritual guides",
		},
	];

	const secondRow = [
		{
			img: img4,
			title: "Tech-Driven",
			desc: "Simple, user-friendly mobile application",
		},
		{
			img: img5,
			title: "Community Focused",
			desc: "Building healthier futures for families & societies",
		},
	];

	return (
		<section className="relative py-12 px-4 bg-[#22B573]">
			<h2 className="text-4xl font-bold mb-8">
				Why <br /> Choose Us
			</h2>

			<div className="flex flex-col-reverse justify-center items-center lg:flex-row gap-5 ">
				<div>
					{/* First row */}
					<div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
						{firstRow.map((item, index) => (
							<div
								className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start p-6 border border-white rounded-3xl shadow-md w-full lg:w-96"
								key={index}
							>
								<img
									src={item.img}
									alt={item.title}
									className="object-contain"
								/>
								<div className="text-white">
									<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>

					{/* Second row */}
					<div className="flex flex-col lg:flex-row gap-8 items-center lg:ml-20">
						{secondRow.map((item, index) => (
							<div
								className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start p-6 border border-white rounded-3xl shadow-md w-full lg:w-96"
								key={index}
							>
								<img
									src={item.img}
									alt={item.title}
									className="object-contain"
								/>
								<div className="text-white">
									<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<img src={mobile} alt="Mobile" />
			</div>
		</section>
	);
};

export default WhyChooseUs;
