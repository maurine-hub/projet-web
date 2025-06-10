import Image from "next/image";
import {Button} from "@/components/ui/button";
import NavBar from "@/app/Header/components/layout/navBar";

export default function Home() {
  return (
    <div className="">
      {/* <NavBar /> */}
      {/* Hero Section */}
      <Hero />
    </div>
  );
}


function Hero (){
  return(

    // <div className="relative bg-[url(https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww)] bg-cover bg-center bg- min-h-screen flex items-center justify-center overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-b from-teal-100/50 to-transparent"></div>
    //   <div className="relative z-10 text-left px-4">
    //     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
    //       Bold, Investible Solutions
    //       <br />
    //       for People and Planet
    //     </h1>
    //     <Button variant="secondary" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
    //       Contact Us to Get Started
    //     </Button>
    //   </div>
    // </div>


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