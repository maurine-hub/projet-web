import HeroSection from "@/components/HeroSection";
import { Separator } from "@/components/ui/separator";

export default function CareersPage() {
  return (
    <div>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1744457167322-1e193924a1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D"
        title="carrières"
      />
      <div className="max-w-10/12 mx-auto py-24 flex flex-col i">
        <div className="text-left">
          <h1 className="capitalize text-2xl md:text-4xl font-bold text-[#035987] mb-6">
            Aucun poste à pourvoir pour le moment
          </h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            Nous sommes toujours à la recherche de personnes motivées et engagées pour faire avancer nos initiatives en finance de la conservation, environnement, santé, services sociaux, résilience et durabilité.
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            Si aucune opportunité ne correspond à votre profil ci-dessus, n'hésitez pas à nous contacter pour nous faire part de votre intérêt et de votre parcours. Nous avons appris qu'on ne sait jamais quand la bonne personne se présente !
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            Quantified Ventures est un employeur garantissant l’égalité des chances. Tous les candidats qualifiés bénéficieront des mêmes opportunités d’emploi sans discrimination fondée sur la race, la couleur, l’origine nationale, le sexe, l’âge, la religion, le handicap, l’état civil, l’apparence personnelle, l’orientation sexuelle, l’identité ou l’expression de genre, l’affiliation politique ou l’information génétique, qu’elle soit réelle ou perçue.
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed py-4">
            Nous recherchons et valorisons la diversité des parcours, des idées, des expériences et des points de vue. Nous nous engageons à créer un environnement inclusif pour tous les employés.
          </p>
        </div>
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6 md:mt-10" />
        <div className="mt-10">
          <h1 className="capitalize text-xl md:text-3xl font-bold text-left text-gray-700 mb-6">
            La vie chez Quantified Ventures
          </h1>
        </div>
      </div>
    </div>
  );
}