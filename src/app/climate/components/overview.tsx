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
          aperçu
        </h1>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed ">
          L’équipe Financement Climat de Quantified Ventures collabore avec les communautés, les gouvernements fédéraux, étatiques et locaux, les entreprises, la philanthropie et les organisations à but non lucratif de tous secteurs pour fournir des solutions d’eau propre, d’atténuation du changement climatique et de résilience communautaire afin d’améliorer le bien-être des personnes et de la planète.
        </p>
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-6">
           Notre travail s’articule autour de quatre solutions :
        </p>
        {orderList.map((item, index) => (
          <ul className="list-disc pl-6 text-gray-600" key={index}>
            <li key={index} className="text-xl text-cyan-400 pb-3">
              {item}
            </li>
          </ul>
        ))}
        <p className="text-base md:text-xl text-left text-gray-600 leading-relaxed my-4">
          À travers ces solutions, nous nous concentrons sur la résolution de problèmes systémiques et l’accélération des investissements climatiques intelligents grâce au partenariat, au financement et à l’innovation politique.
        </p>
      </div>
      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
    </div>
  );
};
