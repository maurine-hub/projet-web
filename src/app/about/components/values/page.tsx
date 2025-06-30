import HeroSection from "@/components/HeroSection";
import { Separator } from "@/components/ui/separator";

export default function ValuesPage() {
  const valuesList = [
    "Integrity",
    "Innovation",
    "Collaboration",
    "Sustainability",
    "Equity and Inclusion",
  ];

  const certifications = [
    {
      title: "Certification 1",
      image:
        "https://images.squarespace-cdn.com/content/v1/5d5b210885b4ce0001663c25/1719508622237-THGLY11H286Z5XBZXLXO/image-asset.png?format=500w",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
    },
    {
      title: "Certification 2",
      image:
        "https://images.squarespace-cdn.com/content/v1/5d5b210885b4ce0001663c25/1578012821589-B6JPHTOXG54A3232U0HK/image.jpg?format=500w",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
    },
    {
      title: "Certification 3",
      image:
        "https://images.squarespace-cdn.com/content/v1/5d5b210885b4ce0001663c25/1719508622237-THGLY11H286Z5XBZXLXO/image-asset.png?format=500w",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww"
        title="Our values"
      />

      <div className="w-full max-sm:px-6 md:max-w-10/12 md:mx-auto my-24">
        <h1 className="text-xl md:text-2xl font-bold text-[#035987]">
          Our values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <p className="text-xl font-bold md:text-2xl ">
            We believe in the power of doing business for good and good
            business.
          </p>
          <div>
            <ul className="list-disc pl-6 mt-4">
              {valuesList.map((value, index) => (
                <li key={index} className="text-lg md:text-xl mb-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg  md:p-16 mt-6">
          <p className="text-lg md:text-2xl text-gray-600 ">
            Our Vision is to catalyze bold, investible solutions that unlock
            more capital for a measurably healthier people and planet.​{" "}
          </p>
          <p className="text-lg md:text-2xl text-gray-600 py-6">
            At Quantified Ventures, we are committed to equity and inclusion in
            our workplace and our work. By building inclusive and equitable
            policies and principles, we are laying the foundation for various
            backgrounds and perspectives to be heard, valued, and to shape our
            organization and our project outcomes.
          </p>
          <p className="text-lg md:text-2xl text-gray-600 ">
            This leads to stronger teams, more impactful projects, and a track
            record that aligns with our culture and values.
          </p>
        </div>

        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6 md:mt-10" />

        <div>
          <h1 className="capitalize text-xl md:text-3xl font-bold text-center text-gray-700 mt-10">
            awards and certifications
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-16">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex flex-col items-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-48 h-48 rounded-full"
                />
                <p className="text-sm md:text-base text-center font-semibold text-gray-600 mt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
