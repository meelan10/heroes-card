import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="border rounded-xl shadow-lg p-4 flex flex-col items-center bg-white">
      <img
        src={player.image}
        alt={player.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{player.name}</h2>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
      <p>Nationality: {player.nationality}</p>
      <p>League: {player.league}</p>
    </div>
  );
};

export default PlayerCard;
