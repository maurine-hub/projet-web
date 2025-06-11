import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type PropsSolution = {
  image : string;
  title : string;
  description : string;
}

export const Solutions = () => {

const solutionsList = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
    title: "Community Finance",
    description: "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.",
  },
  {
    image: "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=400&h=250&fit=crop&crop=center",
    title: "Green Banks and Climate Resilience",
    description: "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.",
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
    title: "Natural Climate Solutions",
    description: "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
    title: "Outdoor Recreation",
    description: "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
  }
];

const SolutionCard = ({ title, image, description }: PropsSolution) => (
  <div className="flex flex-col relative group cursor-pointer overflow-hidden transition-transform duration-300 ">
    <div className="aspect-[4/2.5] relative ">
      <Image
        src={image}
        alt={title}
        fill
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 bg-cyan-600/40"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6"> 
        <h3 className="text-white font-bold text-2xl md:text-4xl text-center leading-tight drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
    <p className="text-base md:text-lg text-left text-gray-600 leading-relaxed my-10">{description} </p>
  </div>
);

  return (
    <div>
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-center text-gray-700 mb-16">Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {solutionsList.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
    </div>
  )
}