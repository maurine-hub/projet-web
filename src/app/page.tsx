"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Users, Target, TrendingUp, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full bg-gray-50">
      <Hero />
      <ServicesSection />
      <QuantifiedVenturesPage />
      <SolutionsSections />
      <News />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww"
          alt="Hero Image"
          fill
          className="object-cover  h-screen"
          priority
        />
      </div>

      {/* <div className="absolute inset-0 bg-teal-500/20 rounded-br-[200px] md:rounded-br-[300px]" /> */}

      <div className="relative z-10 grid grid-cols-2 items-center justify-center h-full text-center px-24">
        <div className="grid-cols-1 text-left mt-32">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bold, Investible Solutions for the Wellbeing of People and Planet
          </h1>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Contact Us to Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: "consulting",
    icon: Users,
    titleKey: "Conseils",
    descriptionKey:
      "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "development",
    icon: Target,
    titleKey: "Développement de Projets",
    descriptionKey:
      "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "capitalization",
    icon: TrendingUp,
    titleKey: "Capitalisation",
    descriptionKey:
      "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-16 ">
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-600 mb-6 lg:mb-8 leading-tight">
            QVentures designs, capitalizes, and scales investible solutions to
            address the most pressing challenges facing communities.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We work with pioneers and change makers to catalyze impact for the
            greater good by pulling the levers of data, finance, innovation,
            partnerships, and policy to develop bold solutions that produce
            verified environmental and social outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 "
              >
                <div className="p-6 text-center h-full flex flex-col">
                  <div
                    className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-10 h-10 ${service.color}`} />
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {service.titleKey}
                  </h3>

                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed flex-grow">
                    {service.descriptionKey}
                  </p>

                  <div
                    className={`w-12 h-1 ${service.color.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuantifiedVenturesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://youtu.be/k4ua4eFgMWE";
  const videoId = videoUrl.split("/").pop(); // extrait "k4ua4eFgMWE"

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-green-300">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-white mb-6 md:mb-8 leading-tight">
            We work with innovators, risk takers, pragmatists, and optimists.
          </h1>
          <p className="text-base md:text-lg text-gray-50 leading-relaxed max-w-5xl mx-auto">
            Quantified Ventures builds trusted partnerships with key public and
            private stakeholders to structure outcomes-based transactions and
            drive capital toward groundbreaking solutions and promising
            innovations across the environmental, health, and social sectors.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Quantified Ventures Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/30 transition-colors">
                <div className="bg-red-600 rounded-full p-4 md:p-6 hover:bg-red-700 transition-colors shadow-lg">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
              </div>
            </div>
          )}

          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-white/20 tracking-wider text-center">
              WE ARE THE CATALYST
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

type PropsCard = {
  title: string;
  image: string;
};

function SolutionsSections() {
  const climateFinanceSolutions = [
    {
      title: "Community Finance",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Green Banks and Climate Resilience",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Natural Climate Solutions",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Outdoor Recreation",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const healthSolutions = [
    {
      title: "Community-Based Organization Sustainability Solutions",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Managed Care Organization Market Growth",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "SDOH Strategy and Financing",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "State Medicaid Innovation",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const SolutionCard = ({ title, image }: PropsCard) => (
    <div className="relative group cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105">
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
          <h3 className="text-white font-bold text-lg md:text-xl text-center leading-tight drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-11/12 mx-auto py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-8">
            Climate Finance Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateFinanceSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-700 text-center mb-8">
            Health and Human Services Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
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
        "Broadband internet and water systems may seem like an odd pairing, but they’re inseparable when it comes to tackling challenges like aging infrastructure, workforce shortages, and the growing impacts of climate change. As affordability becomes an even greater concern, reliable fiber optic broadband offers a transformative solution to modernize water systems, enhance efficiency, and bridge urban-rural divides. ",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title: "Innovative Health Solutions for Community Wellbeing",
      description:
        "As Quantified Ventures celebrates 10 years of pioneering work developing novel solutions to improve the well-being of people and planet, we look back at some of our notable achievements and look ahead to how we are building for the future with new partnerships, projects, and innovations. Learn more about how QV’s top-notch team continues to think big, collaborate with bold pioneers, and implement investible solutions that drive measurable outcomes.",
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
        <div className="relative w-[40%] h-72">
          <Image
            src={image}
            alt={title}
            fill
            className=" w-full h-full object-cover "
          />
        </div>
        <div className="flex flex-col items-start w-[60%]  ml-6 md:ml-12">
          <h3 className="text-lg md:text-2xl font-bold text-cyan-500 mb-8">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 mb-4">{description}</p>
          <a
            href={link}
            className="text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Read more
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-11/12 mx-auto pb-16 px-4">
      <h1 className="capitalize text-4xl font-bold text-gray-700">
        Quantified ventures news
      </h1>
      <div className="flex flex-col mt-10">
        {latestNews.map((news, index) => (
          <div key={index} className="w-full mb-6">
            {renderNewsItem(news)}
          </div>
        ))}
      </div>
      <Separator />
      {/* <div className="mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div> */}
    </div>
  );
}
