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
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1749370250800-4164aea78707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
            fill
            className="object-cover rounded-bl-[200px] md:rounded-bl-[300px] h-screen"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/30 rounded-bl-[200px] md:rounded-bl-[300px]" />

        <div className="relative z-10 grid grid-cols-2 items-center justify-center h-full text-center px-24">
          <div className="grid-cols-1 text-left mt-32">
            <h1 className="capitalize text-3xl md:text-5xl font-bold text-white mb-6">
              about us
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-10/12 mx-auto  my-24">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Our Vision is to catalyze bold, investible solutions that unlock more
          capital for a measurably healthier people and planet.​
        </h1>
        <p className="text-base md:text-lg text-center text-gray-500 leading-relaxed max-w-4xl mx-auto">
          At Quantified Ventures, we are committed to equity and inclusion in
          our workplace and our work. By building inclusive and equitable
          policies and principles, we are laying the foundation for various
          backgrounds and perspectives to be heard, valued, and to shape our
          organization and our project outcomes. This leads to stronger teams,
          more impactful projects, and a track record that aligns with our
          culture and values.{" "}
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


