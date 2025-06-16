import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


export default function CaseStudiesPage() {
  return (
    <div>
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D"
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
              case studies
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full sm:px-6 md:max-w-10/12 md:mx-auto my-24">
        <Partnerships />
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6" />
        <FeaturedProjects />
      </div>
    </div>
  );
}

const Partnerships = () => {
  const partners = [
    {
      image:
        "https://images.unsplash.com/photo-1749235936423-8434cd075fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 1",
      subtitle: "Subtitle for Partner 1",
      link: "https://partner1.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D2",
      title: "Description of Partner 2",
      subtitle: "Subtitle for Partner 2",
      link: "https://partner2.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 3",
      subtitle: "Subtitle for Partner 3",
      link: "https://partner3.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749117631945-cbb1ff99c03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 4",
      subtitle: "Subtitle for Partner 4",
      link: "https://partner4.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D2",
      title: "Description of Partner 2",
      subtitle: "Subtitle for Partner 2",
      link: "https://partner2.com",
    },
     {
      image:
        "https://images.unsplash.com/photo-1749235936423-8434cd075fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 1",
      subtitle: "Subtitle for Partner 1",
      link: "https://partner1.com",
    },
    
  ];

  const PartnerCard = ({
    image,
    title,
    subtitle,
    link,
  }: {
    image: string;
    title: string;
    subtitle: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col mb-6">
        <div className="relative w-full h-[250px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-center text-lg md:text-xl font-semibold text-gray-500 pt-6">{title}</p>
          <p className="text-center text-sm md:text-lg text-gray-400 pt-1">{subtitle}</p>
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-col pb-10">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700 mb-10">
        case studies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </div>
  );
};


const FeaturedProjects = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1749235936423-8434cd075fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 1",
      subtitle: "Subtitle for Partner 1",
      link: "https://partner1.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D2",
      title: "Description of Partner 2",
      subtitle: "Subtitle for Partner 2",
      link: "https://partner2.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 3",
      subtitle: "Subtitle for Partner 3",
      link: "https://partner3.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749117631945-cbb1ff99c03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 4",
      subtitle: "Subtitle for Partner 4",
      link: "https://partner4.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D2",
      title: "Description of Partner 2",
      subtitle: "Subtitle for Partner 2",
      link: "https://partner2.com",
    },
     {
      image:
        "https://images.unsplash.com/photo-1749235936423-8434cd075fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
      title: "Description of Partner 1",
      subtitle: "Subtitle for Partner 1",
      link: "https://partner1.com",
    },
    
  ];

  const FeaturedCard = ({
    image,
    title,
    subtitle,
    link,
  }: {
    image: string;
    title: string;
    subtitle: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col mb-6">
        <div className="relative w-full h-[170px] overflow-hidden rounded-tl-3xl rounded-br-3xl">
          <Image src={image} alt={title} fill objectFit="cover" />
        </div>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-center text-lg md:text-xl font-semibold text-gray-500 pt-6">{title}</p>
          <p className="text-center text-sm md:text-lg text-gray-400 pt-1">{subtitle}</p>
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-col pt-10">
      <h1 className="capitalize text-2xl md:text-4xl font-bold text-gray-700 mb-10">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <FeaturedCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
