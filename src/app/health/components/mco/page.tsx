"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
];

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
];

const SolutionCard = ({ title, image }: { title: string; image: string }) => (
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
  </div>
);

export default function McoPage() {
  return (
    <div>
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1745874864678-f464940bb513?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            fill
            className="object-cover rounded-bl-[200px] md:rounded-bl-[300px] h-screen"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/30 rounded-bl-[200px] md:rounded-bl-[300px]" />

        <div className="relative z-10 grid grid-cols-2 items-center justify-center h-full text-center px-24">
          <div className="grid-cols-1 text-left mt-32">
            <h1 className="capitalize text-3xl md:text-5xl font-bold text-white mb-6">
              Managed Care Organization Market Growth
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-10/12 max-md:px-6 mx-auto py-16   md:py-20">
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-6">
          Our Community Finance team has deep expertise in supporting
          communities, particularly under-resourced ones, with their drinking
          water, wastewater, and stormwater infrastructure needs using public
          financing mechanisms such as the State Revolving Funds (SRFs).
          Quantified Ventures’ hands-on experience in municipal finance, water
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
          Business Enterprise. This, combined with the team’s knowledge and
          track record of partnering with other funders to leverage public
          resources, enables the most economically distressed communities to
          meet water infrastructure improvement goals more affordably.
        </p>
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />

        <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize my-10">
          services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <div className="flex flex-col items-center my-20 md:max-w-3/4 mx-auto">
          <Image
            src="/images/service1.jpg"
            alt="Map"
            width={200}
            height={200}
          />
          <p className="text-base md:text-lg text-center text-gray-600 my-4 leading-relaxed mt-10">
            QV worked with the Maryland Food Bank to design a home delivered
            grocery program in Baltimore, Md., which has notoriously low access
            to quality grocery stores. The ad hoc response to address food
            insecurity in the first 2 years of the Covid-19 pandemic, combined
            with elevated demand, left many smaller community-based
            organizations stretched too thin to meet the need in a sustainable
            way. We completed an assessment of the Baltimore food assistance
            environment to identify opportunities and potential partnerships,
            then worked with Maryland Food Bank to develop a program design and
            operating model that leverages healthcare and workforce outcomes
            payments along with other novel payment streams to create a
            financially sustainable program.
          </p>
        </div>

        <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize ">
          Representative Partnerships and clients testimonials
        </h1>
        <p className="text-base md:text-lg text-left text-gray-600 capitalize my-6">
          Quantified Ventures has partnered with the business development teams
          of several national medicaid health plans, helping them to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {solutionsList.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <Testimonial />
      </div>
    </div>
  );
}

export function Testimonial() {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      name: "Bob Brown",
    },
  ];

  const TestimonialCard = ({
    image,
    description,
    name,
  }: {
    image: string;
    description: string;
    name: string;
  }) => (
    <div className="flex flex-col w-full h-full bg-gray-200 rounded-tl-2xl rounded-br-2xl">
      <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10 italic">
        &quot;{description}&quot;
      </p>
      <div className="flex items-center mb-8 ml-4 ">
        <div className="flex justify-start relative rounded-full overflow-hidden h-10 w-10">
          <Image src={image} alt={name} fill objectFit="cover" />
        </div>
        <p className="pl-6 text-base font-semibold">{name}</p>
      </div>
    </div>
  );

  return (
    <div>
      <p className="text-base md:text-xl text-left font-medium text-gray-600 capitalize my-6">
        clients testimonials
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
