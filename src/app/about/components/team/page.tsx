import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ubmVzfGVufDB8fDB8fHww",
      link: "#",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ubmVzfGVufDB8fDB8fHww",
      link: "#",
    },
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ubmVzfGVufDB8fDB8fHww",
      link: "#",
    },
    {
      name: "Bob Brown",
      role: "UX/UI Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbm5lc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
    {
      name: "Bob Brown",
      role: "UX/UI Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ubmVzfGVufDB8fDB8fHww",
      link: "#",
    },
    {
      name: "Bob Brown",
      role: "UX/UI Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ubmVzfGVufDB8fDB8fHww",
      link: "#",
    },
  ];

  const TeamMemberCard = ({
    name,
    role,
    image,
    link,
  }: {
    name: string;
    role: string;
    image: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col w-full mb-6 group  ">
        <div className="relative rounded-bl-2xl rounded-tr-2xl w-full h-64 overflow-hidden ">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-base md:text-xl font-semibold text-center text-gray-500 pt-4">
          {name}
        </h3>
        <p className="text-base text-center text-gray-500 pt-1">{role}</p>
      </div>
    );
  };

  const AffiliateMembersCard = ({
    name,
    role,
    image,
    link,
  }: {
    name: string;
    role: string;
    image: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col w-full mb-6 group  ">
        <div className="relative rounded-bl-2xl rounded-tr-2xl w-full h-48 overflow-hidden ">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-base md:text-xl font-semibold text-center text-gray-500 pt-4">
          {name}
        </h3>
        <p className="text-base text-center text-gray-500 pt-1">{role}</p>
      </div>
    );
  };

  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww"
        title="Our team"
      />

      <div className="w-full max-sm:px-6 md:max-w-10/12 md:mx-auto py-24">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-700 capitalize mb-6">
            core team
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl md:text-2xl font-bold text-gray-700 capitalize mb-6">
            affiliate staff
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <AffiliateMembersCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
