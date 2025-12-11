import React, { useState } from "react";
import { heroesData } from "./data/heroesData";
import HeroCard from "./components/HeroCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHeroes = heroesData.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hero.power.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hero.universe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No heroes found.
          </p>
        )}
      </div>
    </div>
  );
};#

export default App;
