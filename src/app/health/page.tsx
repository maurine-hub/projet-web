import Image from "next/image";
import { OverviewHealth } from "./components/overviewHealth";
import {Applications} from "./components/applications"

export default function HealthPage() {
  return (
    <div className="flex flex-col">
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
              health and human services 
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full sm:px-6 md:max-w-10/12 md:mx-auto my-14">
        <OverviewHealth/>
        <Applications/>
      </div>
    </div>
  );
}
