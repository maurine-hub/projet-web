"use client";

import HeroSection from "@/components/HeroSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { TestimoniesSection } from "@/components/TestimoniesSection";

const partnerships = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
    title: "Community Finance",
    description:
      "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=400&h=250&fit=crop&crop=center",
    title: "Green Banks and Climate Resilience",
    description:
      "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
    title: "Natural Climate Solutions",
    description:
      "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    title: "Outdoor Recreation",
    description:
      "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats.",
  },
];

const SolutionCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
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
        <h3 className="text-white font-semibold text-lg md:text-xl text-center leading-tight ">
          {title}
        </h3>
      </div>
    </div>
    <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10">
      {description}{" "}
    </p>
  </div>
);

export default function NatrualPage() {
   const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      name: "Bob Brown",
    },
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      name: "Bob Brown",
    },
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      name: "Bob Brown",
    },
  ];

  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D"
        title="Natural Climate Solutions"
      />

      <div className="w-full md:max-w-10/12 max-md:px-6 mx-auto py-16   md:py-20">
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-6">
          Our Community Finance team has deep expertise in supporting
          communities, particularly under-resourced ones, with their drinking
          water, wastewater, and stormwater infrastructure needs using public
          financing mechanisms such as the State Revolving Funds (SRFs).
          Quantified Ventures' hands-on experience in municipal finance, water
          infrastructure project development, EPA program and regulatory
          requirements, and the Clean and Drinking Water SRF application process
          differentiates our team from other consulting firms and technical
          assistance providers.{" "}
        </p>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed ">
          Additionally, we support communities through completing the expanse of
          federal funding requirements (crosscutters) including environmental
          (NEPA) reviews, Single Audit Act, Davis Bacon Wage Act, Build America,
          Buy America (BABA), American Iron and Steel (AIS), and Disadvantaged
          Business Enterprise. This, combined with the team's knowledge and
          track record of partnering with other funders to leverage public
          resources, enables the most economically distressed communities to
          meet water infrastructure improvement goals more affordably.
        </p>
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
        <Services />
        <News />
        <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize my-10">
          Representative Partnerships and Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
          {partnerships.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
        <TestimoniesSection testimonies={testimonials} />
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      image: "/images/service1.jpg",
      description:
        "Evaluate and access public funding and financing for climate and water projects",
    },
    {
      image: "/images/service2.jpg",
      description: "Develop and implement water infrastructure projects",
    },
    {
      image: "/images/service3.jpg",
      description:
        "Assist communities with the application process for federal funding requirements",
    },
    {
      image: "/images/service4.jpg",
      description:
        "Assist communities with the application process for federal funding requirements",
    },
  ];
  return (
    <div>
      <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize my-10">
        services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={service.image}
              alt={service.description}
              width={400}
              height={400}
            />
            <p className="text-base md:text-lg text-center text-gray-600 mt-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


type NewsItem = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function News() {
  const latestNews = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
      title: "Quantified Ventures Launches New Climate Finance Solutions",
      description:
        "Broadband internet and water systems may seem like an odd pairing, but they're inseparable when it comes to tackling challenges like aging infrastructure, workforce shortages, and the growing impacts of climate change. As affordability becomes an even greater concern, reliable fiber optic broadband offers a transformative solution to modernize water systems, enhance efficiency, and bridge urban-rural divides. ",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title: "Innovative Health Solutions for Community Wellbeing",
      description:
        "As Quantified Ventures celebrates 10 years of pioneering work developing novel solutions to improve the well-being of people and planet, we look back at some of our notable achievements and look ahead to how we are building for the future with new partnerships, projects, and innovations. Learn more about how QV's top-notch team continues to think big, collaborate with bold pioneers, and implement investible solutions that drive measurable outcomes.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title: "Partnerships Driving Impact in Environmental Sectors",
      description:
        "CEO Tee Thomas reflects back on 2024, her first year as CEO and QV's 10th year of breaking through barriers to drive impact for people and planet.",
      link: "#",
    },
  ];

  const renderNewsItem = ({ image, title, description, link }: NewsItem) => {
    return (
      <div className="flex flex-col md:flex-row w-full items-start md:items-center  ">
        <div className="relative w-full md:w-[40%] h-72">
          <Image
            src={image}
            alt={title}
            fill
            className=" w-full h-full object-cover "
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-[60%] p-2 md:ml-12">
          <h3 className="text-lg md:text-2xl font-bold text-cyan-500 mb-8">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 mb-4">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:max-w-11/12 mx-auto pb-4 px-4">
      <div className="flex flex-col mt-10">
        {latestNews.map((news, index) => (
          <div key={index} className="w-full mb-6">
            {renderNewsItem(news)}
          </div>
        ))}
      </div>
      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
    </div>
  );
}
