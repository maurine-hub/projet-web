import Image from "next/image";

type PropsCard = {
  title: string;
  image: string;
  // description: string;
};

export const OurVision = () => {
  const aboutList = [
    {
      image:
        "https://images.unsplash.com/photo-1689757762690-2f09ec1b7228?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "Conseils",
      description:
        "Nous évaluons la faisabilité d'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "Développement de Projets",
      description:
        "En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww",
      title: "Capitalisation",
      description:
        "Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.",
    },
  ];

  const SolutionCard = ({ title, image }: PropsCard) => (
    <div className="relative group cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105">
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
          <h3 className="text-white font-bold text-lg md:text-xl text-center leading-tight drop-shadow-lg">
            {title}
          </h3>
        </div>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
  return (
    <div className="flex flex-col">
      <div className="max-w-10/12 mx-auto  my-24">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Notre vision est de catalyser des solutions audacieuses et
          investissables qui libèrent plus de capitaux pour une planète et des
          personnes mesurablement en meilleure santé.
        </h1>
        <p className="text-base md:text-lg text-center text-gray-500 leading-relaxed max-w-4xl mx-auto">
          Chez Quantified Ventures, nous sommes engagés pour l’équité et
          l’inclusion dans notre environnement de travail et dans nos actions.
          En construisant des politiques et des principes inclusifs et
          équitables, nous posons les bases pour que des parcours et des
          perspectives variés soient entendus, valorisés et puissent façonner
          notre organisation et les résultats de nos projets. Cela conduit à des
          équipes plus solides, des projets plus impactants et un parcours en
          accord avec notre culture et nos valeurs.
        </p>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-8">
            {aboutList.map((item, index) => (
              <SolutionCard key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
