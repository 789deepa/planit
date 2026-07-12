import GiftForm from "./components/GiftForm";
import mockGiftData from "./data/mockGiftData.js";
import GiftCard from "./components/GiftCard";

function App() {

  console.log(mockGiftData);
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center">

      <h1 className="text-5xl font-extrabold text-rose-500 mb-8">
        PlanIt 🎁
      </h1>

      <p className="text-gray-700 mb-5 text-center">
        AI-powered gift Planner.
      </p>

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-xl">
       <GiftForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 m-4">
        {mockGiftData.map((gift) => (
          <GiftCard 
          key={gift.id}
          gift={gift}
          />
        ))}
      </div>
      
    </div>
  )
}

export default App;

