 import Image from "next/image"


export const OurImpact = () => {
  const solutionsList = [
      {
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
        title: "Community Finance",
      },
      {
        image:
          "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=400&h=250&fit=crop&crop=center",
        title: "Green Banks and Climate Resilience",
      },
      {
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
        title: "Natural Climate Solutions",
      },
      {
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
        title: "Outdoor Recreation",
      },
      {
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
        title: "Natural Climate Solutions",
      },
    ];
  
    const SolutionCard = ({
      title,
      image,
    }: {
      title: string;
      image: string;
    }) => (
      <div className="flex flex-col relative group cursor-pointer overflow-hidden transition-transform duration-300 ">
        <div className="aspect-[4/2.5] relative ">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-cyan-600/40"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <h3 className="text-white font-medium text-xl md:text-2xl text-center leading-tight ">
              {title}
            </h3>
          </div>
        </div>
        {/* <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10">
          {description}{" "}
        </p> */}
      </div>
    );


  return (
    <div className="flex flex-col">
      <div className="flex w-full items-start mt-8">
        <div className="w-[80%]">
          <p className="text-base md:text-xl text-left font-bold text-neutral-600 leading-relaxed mb-4">During our first 10 years (March 2014 to March 2024), Quantified Ventures mobilized more than $310 million of net new capital for climate, health, and social impact.</p>
          <p className="text-base md:text-xl text-left items-start text-gray-600 leading-relaxed">In our early years, Quantified Ventures focused on innovative, first-of-a-kind deals and transactions. In recent years we added a layer of intentionality around organizational and community capacity building. </p>
        </div>
        <div className="w-[20%]">
          <Image src="/image/logo2.png" alt="" width={100} height={100}/>
        </div>
      </div>
      <div className="flex w-full mt-4 justify-between">
        <div className="w-[80%]">
          <p className="text-base md:text-xl text-left items-start text-gray-600 leading-relaxed mb-4">This focus has enabled a wider array of philanthropic, private, and public organizations to grow the pipeline of impact-oriented projects, replicate our outcomes-based models, and deploy solutions for broader impact. </p>
          <p className="text-base md:text-xl text-left items-start text-gray-600 leading-relaxed">We continue to help our partners think bigger, get initiatives unstuck, assemble blended capital stacks, and create novel ways to deliver better outcomes for the well-being of people and planet!</p>
        </div>
        <div className="w-[20%] ">
          <Image src="" alt="" width={100} height={100}/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {solutionsList.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>

    </div>
  )
}