import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Partnerships } from "@/app/climate/components/parternShips";

export const Applications = () => {
  const features = [
    "Housing and Homelessness",
    "Mental Health and Substance Use ",
    "Healthy Aging ",
    "Food Security ",
    "Environment and Health ",
    "Economic Resilience ",
  ];

  const solutionsList = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center",
      title: "Community Finance",
      description:
        "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=400&h=250&fit=crop&crop=center",
      title: "Green Banks and Climate Resilience",
      description:
        "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
      title: "Natural Climate Solutions",
      description:
        "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      title: "Outdoor Recreation",
      description:
        "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
      title: "Natural Climate Solutions",
      description:
        "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    },
  ];

  const SolutionCard = ({
    title,
    image,
    description,
  }: {
    title: string;
    image: string;
    description: string;
  }) => (
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
          <h3 className="text-white font-medium text-xl md:text-2xl text-center leading-tight ">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10">
        {description}{" "}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700 my-10">
        Applications
      </h1>
      <p className="text-base md:text-xl text-gray-600 leading-relaxed ">
       Que ce soit pour le compte d’organisations de santé ou de prestataires de services à but non lucratif, nous avons soutenu le développement de programmes durables et élargi la capacité de service sur un large éventail de besoins sociaux liés à la santé, notamment :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mt-16">
        <Image src="/images/logo1.png" alt="" width={250} height={250} />
        <div className="flex flex-col">
          {features.map((item) => (
            <ul key={item} className="list-disc">
              <li className="text-lg text-gray-600 leading-relaxed">{item}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {solutionsList.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
      <Separator/>
      <Partnerships/>
    </div>
  );
};
