import { useContext } from "react"
import {UserContext} from "../../context/userContext"

const Profile = () => {

  const {user} = useContext(UserContext)

  // Example user data
  const test = {
    username: "Lucifer",
    avatar: "https://via.placeholder.com/150",
    bio: "Leveling up one game at a time! 🎮",
    games: [
      { name: "Quiz Game", score: 0 },
      { name: "Sanke & Ladder", score: 0 },
      { name: "Spin Wheel", score: 0 },
    ],
    stats: {
      level: 0,
      gamesPlayed: 0,
      trophies: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      {/* Profile Section */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-6">
          <img
            src='/user.png'
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
          {!!user && (<h2 className="font-semibold text-xl">{user.name}</h2>)}
            <p className="text-gray-400">{test.bio}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around mt-6 border-t border-gray-700 pt-4">
          <div className="text-center">
            <p className="text-xl font-bold">{test.stats.level}</p>
            <p className="text-gray-400">Level</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{test.stats.gamesPlayed}</p>
            <p className="text-gray-400">Games Played</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{test.stats.trophies}</p>
            <p className="text-gray-400">Trophies</p>
          </div>
        </div>
      </div>

      {/* Game Scores Section */}
      <div className="w-full max-w-3xl mt-8 bg-gray-800 rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          Game Scores
        </h3>
        <div className="space-y-4">
          {test.games.map((game, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
            >
              <div>
                <p className="font-bold text-lg">{game.name}</p>
              </div>
              <p className="text-xl font-bold text-blue-500">{game.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
