import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Handshake, Leaf, Lightbulb, ShieldCheck } from "lucide-react";

export default function ValuesPage() {
  const valuesList = [
    {
      title: "Integrity",
      description:
        "This leads to stronger teams, more impactful projects, and a track record that aligns",
      icon: <ShieldCheck />,
    },
    {
      title: "Innovation",
      description:
        "We believe in the power of doing business for good and good business.",
      icon: <Lightbulb />,
    },
    {
      title: "Collaboration",
      description:
        " We are committed to equity and inclusion in our workplace and our work.",
      icon: <Leaf />,
    },
    {
      title: "Sustainability",
      description:
        " We are committed to equity and inclusion in our workplace and our work.",
      icon: <Handshake />,
    },
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
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww"
            alt="Hero Image"
            fill
            className="object-cover rounded-bl-[200px] md:rounded-bl-[300px] h-screen"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/30 rounded-bl-[200px] md:rounded-bl-[300px]" />

        <div className="relative z-10 grid md:grid-cols-2 items-center justify-center h-full text-center px-24">
          <div className="md:grid-cols-1 text-left mt-32">
            <h1 className="capitalize text-3xl md:text-5xl font-bold text-white mb-6">
              Our values
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full max-sm:px-6 md:max-w-10/12 md:mx-auto my-24">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#035987]">
            Our values
          </h1>
          <p className="text-xl font-bold md:text-2xl  text-gray-700">
            We believe in the power of doing business
          </p>
          <p className="text-xl font-bold md:text-2xl mb-16 text-gray-700">
            for good and good business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {valuesList.map((value, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center md:items-start gap-2 mb-2">
                    <div className="p-2 bg-yellow-200 rounded-full ">
                      {value.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                      {value.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          <div className="flex items-center justify-end">
            <Image
              src="https://images.unsplash.com/photo-1632961974688-fae53de3cabc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxvdXIlMjB2YWx1ZXN8ZW58MHx8MHx8fDA%3D"
              alt="values"
              width={400}
              height={400}
              className="rounded-tl-3xl rounded-br-3xl "
            />
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg  md:p-16 mt-20">
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
