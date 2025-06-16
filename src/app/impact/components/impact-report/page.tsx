import { profile } from "console";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ImpactReportPage() {
  return (
    <div>
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D"
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
              impact report
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full sm:px-6 md:max-w-10/12 md:mx-auto my-24">
        <YearInReviewSection />
      </div>
    </div>
  );
}

const YearInReviewSection = () => {
  const reviewItems = [
    {
      id: 1,
      year: "2024",
      title: "2024 Year in Review",
      description:
        "CEO Tee Thomas reflects back on 2024, her first year as CEO and QV's 10th year of breaking through barriers to drive impact for people and planet.",
      highlight:
        "Tee selects a baker's dozen highlights from 2024 that are emblematic of the passion, expertise, and collaborative spirit that define QV and our partners.",
      conclusion:
        "We thank each of you for your contributions big and small to this work and the change we seek to create. We look forward to continuing to achieve incredible things – individually and collectively – in 2025!",
      buttonText: "2024 YEAR IN REVIEW BLOG",
      buttonLink: "#",
      collageImages:
        "https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
      profileImage: "/api/placeholder/400/300",
      hasProfile: true,
    },
    {
      id: 2,
      year: "2023",
      title: "2023 Impact Report",
      description:
        "Looking back at our achievements and the incredible journey we've had throughout 2023 with our partners and community.",
      highlight:
        "Key milestones and breakthrough moments that shaped our mission and vision for the future.",
      conclusion:
        "Together, we've made significant strides toward our goals and we're excited for what lies ahead.",
      buttonText: "2023 IMPACT REPORT",
      buttonLink: "#",
      collageImages:
        "https://images.unsplash.com/photo-1749731630653-d9b3f00573ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
      profileImage: "/api/placeholder/400/300",
      hasProfile: false,
    },
  ];

  return (
    <div className="py-16">
      {reviewItems.map((item, index) => (
        <div
          key={item.id}
          className={`max-w-7xl mx-auto px-4 ${index !== 0 ? "mt-24" : ""}`}
        >
          <div
            className={`grid ${
              item.hasProfile ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2"
            } gap-12 items-start`}
          >
            {/* Partie gauche */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-2 max-w-md">
                <div className="relative aspect-square overflow-hidden ">
                  <Image
                    src={item.collageImages}
                    alt="Collage image"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Badge "YEAR IN REVIEW" */}
                <div className="absolute -top-4 -left-4 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                  <span className="text-xs font-bold text-gray-700 tracking-wide">
                    {item.year} YEAR IN REVIEW
                  </span>
                </div>
              </div>

              {/* Bouton CTA */}
              <div className="mt-8">
                <Button variant="cyan" size="large">
                  {item.buttonText}
                </Button>
              </div>
            </div>

            {/* Partie centrale - Contenu texte */}
            <div
              className={`${
                item.hasProfile
                  ? "lg:col-span-1"
                  : "lg:col-span-1 max-w-4xl mx-auto"
              } space-y-6`}
            >
              <h2 className="text-xl lg:text-3xl font-bold text-blue-900 mb-6">
                {item.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>

              <p className="text-cyan-500 text-lg leading-relaxed font-medium">
                {item.highlight}
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.conclusion}
              </p>
            </div>

            {/* Partie droite - Photo de profil (conditionnelle) */}
            {/* {item.hasProfile && (
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src={item.profileImage}
                    alt="Profile"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-2xl object-cover w-full h-80"
                  />
                  
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg"></div>
                </div>
              </div>
            )} */}
          </div>
          <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
        </div>
      ))}
    </div>
  );
};
