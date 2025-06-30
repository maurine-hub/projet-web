"use client";

import * as React from "react";

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
}

export function TestimoniesSection({testimonies}: {testimonies: Testimonial[]}) {
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <Card className="py-4 ">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                  <p className="text-lg italic text-center">
                    &quot;{testimonial.testimony}&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image || "https://github.com/shadcn.png"}
                        alt="image-testimonial"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-gray-700">
                      - {testimonial.name}
                    </span>
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
