import { OurVision } from "./components/OurVision"
import HeroSection from "@/components/HeroSection"

export default function AboutPage() {
  return(
    <div className="flex flex-col items-center justify-center w-full  ">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D"
        title="Notre vision"
      />
      <OurVision />
    </div>
  )
}