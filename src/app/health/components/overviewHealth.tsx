import { Separator } from "@/components/ui/separator";
import { Solutions } from "@/app/climate/components/solutions";
import Image from "next/image";

type PropsCard = {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
};

export const OverviewHealth = () => {
  const solutionsTabs = [
    {
      image:
        "https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      title: "community-based organization sustainability solutions",
      description:
        "We work with community-based service organizations (CBOs) to access new sources of revenue – and sometimes financing – that allows them to sustainably operate and grow programs that address health-related social needs and deliver whole-person care.",
      link: "#",
      index: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      title: "community-based organization sustainability solutions",
      description:
        "We work with community-based service organizations (CBOs) to access new sources of revenue – and sometimes financing – that allows them to sustainably operate and grow programs that address health-related social needs and deliver whole-person care.",
      link: "#",
      index: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      title: "community-based organization sustainability solutions",
      description:
        "We work with community-based service organizations (CBOs) to access new sources of revenue – and sometimes financing – that allows them to sustainably operate and grow programs that address health-related social needs and deliver whole-person care.",
      link: "#",
      index: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      title: "community-based organization sustainability solutions",
      description:
        "We work with community-based service organizations (CBOs) to access new sources of revenue – and sometimes financing – that allows them to sustainably operate and grow programs that address health-related social needs and deliver whole-person care.",
      link: "#",
      index: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
      title: "community-based organization sustainability solutions",
      description:
        "We work with community-based service organizations (CBOs) to access new sources of revenue – and sometimes financing – that allows them to sustainably operate and grow programs that address health-related social needs and deliver whole-person care.",
      link: "#",
      index: 5,
    },
  ];

  const SolutionsCard = ({
    image,
    title,
    description,
    link,
    index,
  }: PropsCard) => {
    return (
      <div
        className={`flex flex-col md:flex-row justify-center items-center mb-10 md:mb-2 ${
          index % 2 === 0 ? "md:flex-row-reverse" : " md:flex"
        }`}
      >
        <div className="relative h-64 w-full mb-6 md:mb-0 md:mr-10">
          <Image src={image} alt={title} fill objectFit="cover" />
          <div className="absolute inset-0 bg-cyan-600/30"></div>
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl font-bold text-gray-500 mb-4">
            {title}{" "}
          </h1>
          <p className="text-base md:text-lg text-left items-start text-gray-600 leading-relaxed md:mr-10">
            {description}{" "}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="capitalize text-2xl md:text-4xl font-bold text-left text-gray-700 mt-24 mb-6">
          aperçu
        </h1>
        <p className="text-base md:text-xl text-left items-start text-gray-600 leading-relaxed ">
         La santé est le résultat de nombreux facteurs, dont seuls certains sont liés aux soins médicaux. Pourtant, nous continuons à payer chaque année davantage pour les soins médicaux tout en sous-investissant systématiquement dans les services humains et sociaux qui ont le plus grand potentiel pour prévenir les maladies et améliorer la santé individuelle et collective. Sans une attention et des ressources accrues pour des solutions en amont qui répondent aux besoins sociaux liés à la santé, nous en subissons individuellement et collectivement les conséquences.
        </p>
        <p className="text-base md:text-xl text-left font-bold text-neutral-600 leading-relaxed my-6">
        Notre groupe Santé et Services Sociaux crée les conditions permettant aux organisations de santé et aux prestataires de services communautaires de construire des partenariats solides qui offrent des solutions durables – améliorant les résultats de santé, réduisant les disparités et diminuant les coûts à grande échelle.
        </p>
      </div>

      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6 md:mt-10" />

      <div className="grid grid-cols-1">
        <h1 className="capitalize text-2xl md:text-4xl font-bold text-center text-gray-700 my-10">
          solutions
        </h1>
        {solutionsTabs.map((solution) => (
          <div key={solution.index}>
            <SolutionsCard
              image={solution.image}
              title={solution.title}
              description={solution.description}
              link={solution.link}
              index={solution.index}
            />
          </div>
        ))}
      </div>
      
      <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4 md:mt-10" />

    </div>
  );
};
