"use client";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  subtitle,
}) => (
  <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center">
    {/* Parallax wrapper */}
    <div
      className="absolute inset-0 will-change-transform"
      style={{ zIndex: 1 }}
    >
      <Image
        src={imageUrl}
        alt="Hero Image"
        fill
        className="object-cover w-full h-full scale-105 transition-transform duration-700"
        priority
      />
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-cyan-900/40 to-black/60 animate-gradient-move" />
      {/* Subtle extra overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 md:px-24 text-center">
      <h1
        className="capitalize text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 md:mb-4"
        style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="text-lg md:text-2xl text-white/90 font-medium drop-shadow-md max-w-2xl mx-auto"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
    <style jsx global>{`
      @keyframes gradient-move {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .animate-gradient-move {
        background-size: 200% 200%;
        animation: gradient-move 8s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default HeroSection;
