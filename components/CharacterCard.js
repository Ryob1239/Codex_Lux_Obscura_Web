// components/CharacterCard.js
import { motion } from 'framer-motion';

export default function CharacterCard({ name, title, image, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="bg-gradient-to-t from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </motion.div>
  );
}