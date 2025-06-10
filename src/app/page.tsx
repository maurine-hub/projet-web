import Image from "next/image";
import {Button} from "@/components/ui/button";
import NavBar from "@/app/Header/components/layout/navBar";

export default function Home() {
  return (
    <div className="">
      {/* <NavBar /> */}
      <Hero />
      <ServicesSection />
    </div>
  );
}


function Hero (){
  return(

    // <div className="relative bg-[url(https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww)] bg-cover bg-center bg- min-h-screen flex items-center justify-center overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-b from-teal-100/50 to-transparent"></div>
    //   <div className="relative z-10 text-left px-4">
    //     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
    //       Bold, Investible Solutions
    //       <br />
    //       for People and Planet
    //     </h1>
    //     <Button variant="secondary" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
    //       Contact Us to Get Started
    //     </Button>
    //   </div>
    // </div>


    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1695019947916-c3e789ba0e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlbGxlJTIwaW1hZ2UlMjBkZSUyMGxhJTIwbmF0dXJlfGVufDB8fDB8fHww"
          alt="Hero Image"
          fill
          className="object-cover  h-screen"
          priority
        />
      </div>

      {/* <div className="absolute inset-0 bg-teal-500/20 rounded-br-[200px] md:rounded-br-[300px]" /> */}

      <div className="relative z-10 grid grid-cols-2 items-center justify-center h-full text-center px-24">
        <div className="grid-cols-1 text-left mt-32">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bold, Investible Solutions for the Wellbeing of People and Planet
          </h1>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Contact Us to Get Started
          </Button>
        </div>
      </div>
    </div>
  );

}



import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  TrendingUp,
  Lightbulb,
  HandHeart,
  Banknote
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 'consulting',
    icon: Users,
    titleKey: 'Conseils',
    descriptionKey: 'Nous évaluons la faisabilité d\'entreprendre un financement basé sur les résultats et des solutions de financement, et concevons des structures novatrices pour résoudre des défis environnementaux, sanitaires et sociaux prolongés.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'development',
    icon: Target,
    titleKey: 'Développement de Projets',
    descriptionKey: 'En travaillant avec des partenaires gouvernementaux, associatifs et corporatifs, nous développons des programmes et projets qui créent des bénéfices environnementaux, sanitaires et sociaux pour les personnes et les écosystèmes.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 'capitalization',
    icon: TrendingUp,
    titleKey: 'Capitalisation',
    descriptionKey: 'Nous offrons des solutions de financement et de fonds créatives pour les organisations publiques et privées cherchant des investisseurs et souhaitant utiliser des approches basées sur les résultats pour résoudre des problèmes environnementaux, sanitaires et sociaux critiques.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  }
];

function ServicesSection() {

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 ">
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-600 mb-6 lg:mb-8 leading-tight">
            QVentures designs, capitalizes, and scales investible solutions to
              address the most pressing challenges facing communities.
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We work with pioneers and change makers to catalyze impact for the greater good by pulling the
            levers of data, finance, innovation, partnerships, and policy to develop bold solutions that
            produce verified environmental and social outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id}
                className="group border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 "
              >
                <div className="p-6 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${service.color}`} />
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {service.titleKey}
                  </h3>

                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed flex-grow">
                    {service.descriptionKey}
                  </p>

                  <div className={`w-12 h-1 ${service.color.replace('text-', 'bg-')} rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


