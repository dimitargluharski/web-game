import { useState } from 'react';
import data from './data/players.json';

function App() {
  const [players] = useState(data.players);

  return (
    <>
      {players.map((player) => (
        <div key={player.name} className="player-card">
          <div className="flex justify-center font-bold text-lg">{player.name}</div>

          <div className="flex flex-col items-center mt-2">
            {Object.entries(player).map(([key, value]) => (
              key !== 'name' && (
                <div key={key} className="flex justify-between w-40 border-b py-1">
                  <span className="text-gray-600 capitalize">{key}:</span>
                  <span className="text-black font-medium">{value}</span>
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
