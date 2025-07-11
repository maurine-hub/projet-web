"use client";

import HeroSection from "@/components/HeroSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { TestimoniesSection } from "@/components/TestimoniesSection";

const services = [
  {
    image: "/images/service1.jpg",
    description:
      "Évaluer et accéder aux financements publics pour les projets liés au climat et à l’eau",
  },
  {
    image: "/images/service2.jpg",
    description: "Développer et mettre en œuvre des projets d’infrastructures hydrauliques",
  },
  {
    image: "/images/service3.jpg",
    description:
      "Accompagner les communautés dans le processus de demande de financements fédéraux",
  },
];

const solutionsList = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
    title: "Financement communautaire",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=400&h=250&fit=crop&crop=center",
    title: "Banques vertes et résilience climatique",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
    title: "Solutions climatiques naturelles",
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
  ];

  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1745874864678-f464940bb513?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
        title="Croissance du marché des organisations de soins gérés"
      />

      <div className="w-full md:max-w-10/12 max-md:px-6 mx-auto py-16   md:py-20">
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-6">
       Notre équipe de Financement Communautaire possède une expertise approfondie dans l’accompagnement des communautés, en particulier celles sous-financées, pour leurs besoins en infrastructures d’eau potable, d’eaux usées et de gestion des eaux pluviales, en utilisant des mécanismes de financement public tels que les Fonds de Révolution d’État (SRF). L’expérience pratique de Quantified Ventures en finance municipale, développement de projets d’infrastructures hydrauliques, exigences réglementaires et programmes de l’EPA, ainsi que dans le processus de demande des SRF pour l’eau propre et potable, distingue notre équipe des autres cabinets de conseil et prestataires d’assistance technique.
        </p>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed ">
          De plus, nous accompagnons les communautés dans la gestion de l’ensemble des exigences fédérales de financement (crosscutters), y compris les examens environnementaux (NEPA), le Single Audit Act, le Davis Bacon Wage Act, Build America, Buy America (BABA), American Iron and Steel (AIS), et les entreprises défavorisées (Disadvantaged Business Enterprise). Cette expertise, combinée à la capacité de notre équipe à collaborer avec d’autres bailleurs pour mobiliser des ressources publiques, permet aux communautés les plus économiquement fragiles d’atteindre leurs objectifs d’amélioration des infrastructures hydrauliques à moindre coût.
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
         QV a travaillé avec la Maryland Food Bank pour concevoir un programme de livraison de courses à domicile à Baltimore, dans le Maryland, où l’accès à des magasins d’alimentation de qualité est notoirement faible. La réponse ad hoc à l’insécurité alimentaire pendant les deux premières années de la pandémie de Covid-19, combinée à une demande accrue, a laissé de nombreuses petites organisations communautaires dans l’incapacité de répondre durablement aux besoins. Nous avons réalisé une évaluation de l’environnement de l’aide alimentaire à Baltimore afin d’identifier les opportunités et les partenariats potentiels, puis travaillé avec la Maryland Food Bank pour développer un modèle de programme et d’exploitation qui s’appuie sur les paiements liés aux résultats en matière de santé et d’emploi, ainsi que sur d’autres sources de financement innovantes, pour créer un programme financièrement durable.
          </p>
        </div>

        <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize ">
          Partenariats représentatifs et témoignages clients
        </h1>
        <p className="text-base md:text-lg text-left text-gray-600 capitalize my-6">
           Quantified Ventures a collaboré avec les équipes de développement commercial de plusieurs régimes nationaux de santé Medicaid, les aidant à :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {solutionsList.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <TestimoniesSection testimonies={testimonials} />
      </div>
    </div>
  );
}

