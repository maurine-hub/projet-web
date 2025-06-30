"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  image?: string;
  testimony: string;
};

export function TestimoniesSection({
  testimonies,
}: {
  testimonies: Testimonial[];
}) {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
    })
  );

  return (
    <section className="space-y-10">
      <h2 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize my-10">
        Clients testimonial
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {testimonies.map((testimonial, index) => (
            <CarouselItem key={index} className=" md:basis-w-full">
              <Card className="">
                <CardContent className="flex items-center justify-center space-y-4 gap-10">
                  <div className="flex items-centerw-1/2">
                    <Image
                      src={testimonial.image || "https://github.com/shadcn.png"}
                      alt="image-testimonial"
                      width={300}
                      height={300}
                      className="rounded-full"
                    />
                  </div>

                  <div className="w-1/2 flex flex-col items-start justify-center  space-y-4">
                    <p className="text-lg md:text-2xl font-semibold text-gray-700">
                      {testimonial.name}
                    </p>
                    <p className="text-lg mt-6 ">{testimonial.testimony}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" />
      </Carousel>
    </section>
  );
}
