"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Users, Target, TrendingUp, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full bg-gray-100">
      {/* <HeroSection 
        imageUrl="/images/GreenOcity-home.png"
        title="GreenOcity, l'approche révolutionnaire dans le financement environnemental urbain"
      /> */}
      <Hero />
      <ServicesSection />
      <QuantifiedVenturesPage />
      <SolutionsSections />
      <News />
      <OurWork />
      <Benefits />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-[270px] md:h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/GreenOcity-home.png"
          alt="Hero Image"
          fill
          className="object-cover rounded-br-[200px] md:rounded-br-[300px] md:rounded-bl-[300px] h-screen"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 rounded-br-[200px] md:rounded-br-[300px] md:rounded-bl-[300px] " />

      <div className="relative z-10 grid md:grid-cols-1 px-6 items-center justify-center h-full text-center md:px-24">
        <div className=" mt-16 md:mt-32">
          <h1 className="text-3xl md:text-5xl/14 font-bold md:w-[750px] md:mx-auto text-white mb-6 li">
            Une approche révolutionnaire dans le financement environnemental
            urbain
          </h1>
          <Button size="large" className="bg-[#2AAA8A] rounded-full uppercase">
            Contacez-nous pour démarrer
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
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-11/12 mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-16 ">
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-600 mb-6 lg:mb-8 leading-tight">
            QVentures conçoit, capitalise et développe des solutions
            investissables pour relever les défis les plus pressants auxquels
            sont confrontées les communautés.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nous travaillons avec des pionniers et des acteurs du changement
            pour catalyser l’impact au service du bien commun en actionnant les
            leviers de la donnée, de la finance, de l’innovation, des
            partenariats et des politiques afin de développer des solutions
            audacieuses qui produisent des résultats environnementaux et sociaux
            vérifiés.
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

                  {/* <div
                    className={`w-12 h-1 ${service.color.replace(
                      "text-",
                      "bg-"
                    )} rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300`}
                  ></div> */}
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
            Nous travaillons avec des innovateurs, des preneurs de risques, des
            pragmatiques et des optimistes.
          </h1>
          <p className="text-base md:text-lg text-gray-50 leading-relaxed max-w-5xl mx-auto">
            Quantified Ventures construit des partenariats de confiance avec les
            parties prenantes publiques et privées clés pour structurer des
            transactions basées sur les résultats et orienter les capitaux vers
            des solutions révolutionnaires et des innovations prometteuses dans
            les secteurs environnemental, sanitaire et social.
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
      title: "Financement communautaire",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Banques vertes et résilience climatique",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Solutions climatiques naturelles",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Loisirs de plein air",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const healthSolutions = [
    {
      title: "Solutions de durabilité pour les organisations communautaires",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Croissance du marché des organisations de soins gérés",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Stratégie SDOH et financement à grande échelle",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Innovation Medicaid au niveau de l’État",
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
            Solutions de financement climatique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateFinanceSolutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-700 text-center mb-8">
            Solutions santé et services sociaux
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
      title:
        "Quantified Ventures lance de nouvelles solutions de financement climatique",
      description:
        "L’internet haut débit et les systèmes d’eau peuvent sembler être un duo improbable, mais ils sont indissociables pour relever les défis tels que le vieillissement des infrastructures, la pénurie de main-d’œuvre et les impacts croissants du changement climatique. Alors que l’accessibilité devient une préoccupation majeure, la fibre optique fiable offre une solution transformatrice pour moderniser les systèmes d’eau, améliorer l’efficacité et réduire la fracture entre zones urbaines et rurales. ",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des solutions innovantes pour la santé et le bien-être des communautés",
      description:
        "Alors que Quantified Ventures célèbre 10 ans de travail pionnier pour améliorer le bien-être des personnes et de la planète, nous revenons sur certaines de nos réalisations marquantes et nous tournons vers l’avenir avec de nouveaux partenariats, projets et innovations. Découvrez comment l’équipe QV continue de voir grand, de collaborer avec des pionniers audacieux et de mettre en œuvre des solutions investissables qui génèrent des résultats mesurables.",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des partenariats qui génèrent de l’impact dans les secteurs environnementaux",
      description:
        "La PDG Tee Thomas revient sur 2024, sa première année en tant que PDG et la 10e année de QV à franchir des barrières pour générer de l’impact pour les personnes et la planète.",
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
          <a
            href={link}
            className="text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            Lire la suite
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:max-w-11/12 mx-auto pb-10 md:pb-16 px-4">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700">
        Actualités Quantified Ventures
      </h1>
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

function OurWork() {
  const workList = [
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des solutions innovantes pour la santé et le bien-être des communautés",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
      title:
        "Quantified Ventures lance de nouvelles solutions de financement climatique",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des partenariats qui génèrent de l’impact dans les secteurs environnementaux",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des solutions innovantes pour la santé et le bien-être des communautés",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center",
      title:
        "Quantified Ventures lance de nouvelles solutions de financement climatique",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop&crop=center",
      title:
        "Des partenariats qui génèrent de l’impact dans les secteurs environnementaux",
      link: "#",
    },
  ];

  const RenderWorkItem = ({
    image,
    title,
    link,
  }: {
    image: string;
    title: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col w-full items-center  ">
        <Image
          src={image}
          alt={title}
          width={500}
          height={250}
          objectFit="cover"
        />
        <p className="text-base text-gray-500 pt-2">{title}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full jusct-center items-center  md:max-w-9/12 mx-auto pb-16 px-4">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700">
        Nos réalisations
      </h1>
      <p className="text-lg md:text-xl text-gray-500 text-center py-6">
        En encourageant la collaboration, en mesurant et en monétisant les
        résultats clés, et en impliquant des experts dans la conception et le
        développement de solutions, nous traçons la voie vers l’innovation,
        l’investissement et l’impact.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {workList.map((work, index) => (
          <RenderWorkItem key={index} {...work} />
        ))}
      </div>
    </div>
  );
}

function Benefits() {
  const benefitsList = [
    {
      image:
        "https://images.unsplash.com/photo-1689757762690-2f09ec1b7228?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "Conseils",
      description:
        "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "Développement de Projets",
      description:
        "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww",
      title: "Capitalisation",
      description:
        "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    },
  ];

  const RenderBenefitItem = ({
    image,
    title,
    description,
  }: {
    image: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className="flex flex-col w-full items-start  ">
        <div className="relative rounded-bl-2xl rounded-tr-2xl w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-cyan-800 py-4">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-500 pt-2">{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full jusct-center items-center max-w-11/12 mx-auto pb-16 px-4  md:mt-10">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700">
        Benefits of Outcomes-Based Finance
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-12 gap-6">
        {benefitsList.map((benefit, index) => (
          <RenderBenefitItem key={index} {...benefit} />
        ))}
      </div>
      <Button variant="cyan" size="large" className="mt-10">
        Plus d’actualités
      </Button>
    </div>
  );
}
