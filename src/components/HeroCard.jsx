import React from "react";
import { User, MapPin, Trophy } from "lucide-react";

const HeroCard = ({ hero }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&background=random&size=200`;
          }}
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
          {hero.universe}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">{hero.name}</h2>
        </div>

        <div className="space-y-2 mt-2 text-sm text-gray-600 flex-grow">
          <div className="flex items-center gap-2">
            <User size={16} className="text-green-500" />
            <span>{hero.power}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
