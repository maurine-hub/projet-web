import HeroSection from "@/components/HeroSection";
import { OurImpact } from "./components/OurImpact";

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1748519707841-df414b70a215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D"
        title="our impact"
      />
      <div className="max-w-10/12 mx-auto py-16">
        <OurImpact />
      </div>
    </div>
  );
}
