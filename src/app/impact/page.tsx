import Image from "next/image";
import { OurImpact } from "./components/OurImpact";

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1748519707841-df414b70a215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D"
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
              our impact
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-10/12 mx-auto py-16">
        <OurImpact />
      </div>
    </div>
  );
}
