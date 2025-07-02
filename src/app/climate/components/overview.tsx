import { Separator } from "@/components/ui/separator";
import HeroSection from "../../../components/HeroSection";

export const Overview = () => {
  const orderList = [
    "Climate Resilience",
    "Community Finance",
    "Natural Climate Solutions",
    "Outdoor Recreation",
  ];

  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D"
        title="climate finance"
      />

      <div className="max-w-10/12 mx-auto my-16">
        <h1 className="capitalize text-2xl md:text-4xl font-bold text-center text-gray-700 mt-24 mb-6">
          overview
        </h1>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed ">
          Quantified Ventures &apos; Climate Finance team partners with
          communities; federal, state, and local governments; corporations;
          philanthropy, and non-profit organizations from all sectors to deliver
          clean water, climate mitigation, and community resilience solutions to
          improve the wellbeing of people and planet.{" "}
        </p>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-6">
          Our work is centered around four solutions:{" "}
        </p>
        {orderList.map((item, index) => (
          <ul className="list-disc pl-6 text-gray-600" key={index}>
            <li key={index} className="text-xl text-cyan-400 pb-3">
              {item}
            </li>
          </ul>
        ))}
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-4">
          Across these solutions, we focus on solving systems-level problems and
          accelerating climate smart investments through partnership, finance,
          and policy innovation.
        </p>
      </div>
      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
    </div>
  );
};
