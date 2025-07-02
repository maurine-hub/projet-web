"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./navBar";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";

export default function ConditionalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", formData);
  };

  return (
    <footer className=" flex flex-col items-center bg-[#088F8F] text-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            We think emails should drive outcomes too.
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl font-medium mb-4">
              Let's make it happen together!
            </p>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Sign up to receive our outcomes-based financing checklist and stay
              up to date on our insights, work, and other news.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 h-14 px-6 bg-white text-gray-800 placeholder:text-gray-500 border-0  text-base"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="flex-1 h-14 px-6 bg-white text-gray-800 placeholder:text-gray-500 border-0 text-base"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 h-14 px-6 bg-white text-gray-800 placeholder:text-gray-500 border-0 text-base"
                required
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-cyan-400 hover:bg-cyan-300 text-[#035987] font-bold text-base rounded-full transition-colors duration-200 lg:min-w-[140px]"
              >
                SIGN UP
              </Button>
            </div>
          </form>

          <div className="flex justify-center space-x-4 mt-16">
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#035987] hover:bg-gray-100 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#035987] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#035987] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className=" py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1  gap-8 lg:gap-12 items-center">
            <div className="flex flex-col sm:flex-row lg:flex items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:space-y-4">
              <div className="flex items-center">
                  <Image
                    src="/images/logo1.png"
                    alt="Women Owned Logo"
                    width={200}
                    height={200}
                  />

                  <Image
                    src="/images/logo2.png"
                    alt="B Corp Certification"
                    width={200}
                    height={200}
                  />
              </div>

              <div className="text-start">
                <div className="space-y-2">
                  <a
                    href="mailto:info@quantifiedventures.com"
                    className="flex items-center justify-center lg:justify-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@quantifiedventures.com</span>
                  </a>
                  <div className="flex items-center justify-center lg:justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(202) 734-3712</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-blue-200">
                  © 2024 Quantified Ventures. All rights reserved.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-2 text-sm">
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-blue-300 hidden sm:inline lg:hidden">
                  |
                </span>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
