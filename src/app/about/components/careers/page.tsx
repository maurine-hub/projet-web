import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function CareersPage() {
  return (
    <div>
      <div className="relative w-full h-[450px] ">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1744457167322-1e193924a1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D"
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
              careers
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-10/12 mx-auto py-24 flex flex-col i">
        <div className="text-left">
          <h1 className="capitalize text-2xl md:text-4xl font-bold text-[#035987] mb-6">
            No open positions at this time
          </h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            We are always looking for motivated, mission driven talent to drive
            our conservation finance, environmental, health, human services,
            resiliency, and sustainability initiatives.
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            If the right opportunity is not listed above, feel free to contact
            us with your expression of interest and background details. We’ve
            learned that you never know when the right person comes along!
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            Quantified Ventures is an equal opportunity employer, and all
            qualified applicants will be afforded equal employment opportunities
            without discrimination because of actual or perceived race, color,
            national origin, sex, age, religion, disability, marital status,
            personal appearance, sexual orientation, gender identity or
            expression, political affiliation, or genetic information.
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            We seek and celebrate a diversity of background, thought,
            experience, and perspective. And we are committed to creating an
            inclusive environment for all employees.
          </p>
        </div>
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6 md:mt-10" />
        <div className="mt-10">
          <h1 className="capitalize text-xl md:text-3xl font-bold text-left text-gray-700 mb-6">Life @ Quantified Ventures</h1>
        </div>
      </div>
    </div>
  );
}
