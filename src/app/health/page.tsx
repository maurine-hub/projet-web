import HeroSection from "../../components/HeroSection";
import { Applications } from "./components/applications";
import { OverviewHealth } from "./components/overviewHealth";

export default function HealthPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D"
        title="Services de santé et sociaux"
      />

      <div className="w-full sm:px-6 md:max-w-10/12 md:mx-auto my-14">
        <OverviewHealth />
        <Applications />
      </div>
    </div>
  );
}
