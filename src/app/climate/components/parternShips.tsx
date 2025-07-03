import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Partnerships = () => {
const partners = [
  {
    image: "https://images.unsplash.com/photo-1749235936423-8434cd075fb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
    title: "Description du partenaire 1",
    link: "https://partner1.com"
  },
  {
    image: "https://images.unsplash.com/photo-1749230950849-f3f93591f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D2",
    title: "Description du partenaire 2",
    link: "https://partner2.com"
  },
  {
    image: "https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Description du partenaire 3",
    link: "https://partner3.com"
  },
  {
    image: "https://images.unsplash.com/photo-1749117631945-cbb1ff99c03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
    title: "Description du partenaire 4",
    link: "https://partner4.com"
  }
];

const PartnerCard = ({ image, title, link }: { image: string, title: string, link: string }) => {
  return(
    <div className='flex flex-col'>
      <div className='relative w-full h-[250px] overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-lg'>
        <Image src={image} alt={title} fill objectFit="cover"  />
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <p className="text-lg md:text-2xl text-gray-700 pt-6">{title}</p>
      </Link>
    </div>
  )
}

  return (
    <div className='flex flex-col items-center justify-center py-16'>
      <h1 className='capitalize text-2xl md:text-4xl font-bold text-gray-700 mb-16'>Partenariats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
      <Button variant="cyan" size="large" className="mt-16">
        afficher la carte des projets
      </Button>
    </div>
  )
}