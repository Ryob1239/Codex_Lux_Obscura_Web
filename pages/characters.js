// pages/characters.js
import CharacterCard from '../components/CharacterCard';
import { useRouter } from 'next/router';

export default function Characters() {
  const router = useRouter();

  const characters = [
    {
      name: "Zeriel",
      title: "Portador de la Luz de Gracia",
      image: "/zeriel.jpg",
      path: "/lore/zeriel"
    },
    {
      name: "Dazael",
      title: "Comandante Supremo del Reino de Dios",
      image: "/dazael.jpg",
      path: "/lore/dazael"
    },
    {
      name: "Azasel",
      title: "Custodio del Trono Celestial",
      image: "/azasel.jpg",
      path: "/lore/azasel"
    },
    {
      name: "Akrael",
      title: "Demonio Original, Corruptor de la Existencia",
      image: "/akrael.jpg",
      path: "/lore/akrael"
    }
  ];

  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Los Sacros y el Caído</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((char, index) => (
          <CharacterCard
            key={index}
            name={char.name}
            title={char.title}
            image={char.image}
            onClick={() => router.push(char.path)}
          />
        ))}
      </div>
    </div>
  );
}