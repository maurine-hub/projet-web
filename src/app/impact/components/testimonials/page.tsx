import Image from "next/image";

export default function TestimonialsPage() {
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
              Testimonials
            </h1>
          </div>          
        </div>
      </div>

      <div className="w-full sm:px-6 md:max-w-10/12 md:mx-auto my-24">
        <Testimonials />
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
      name: "Bob Brown",
    },
    {
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "John Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
      name: "Bob Brown",
    },
  ];

  const TestimonialCard = ({
    image,
    description,
    name,
  }: {
    image: string;
    description: string;
    name: string;
  }) => (
    <div className="flex flex-col w-full h-full bg-gray-200 rounded-tl-2xl rounded-br-2xl">
      <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10 italic">
        &quot;{description}&quot;
      </p>
      <div className="flex items-center mb-8 ml-4 ">
        <div className="flex justify-start relative rounded-full overflow-hidden h-10 w-10">
          <Image src={image} alt={name} fill objectFit="cover" />
        </div>
        <p className="pl-6 text-base font-semibold">{name}</p>
      </div>
    </div>
  );

  return (
    <div>
      <p className="text-base md:text-2xl text-left font-bold text-[#035987] capitalize my-6">
        clients testimonials
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
