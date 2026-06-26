import GiftForm from "./components/GiftForm";
import mockData from "./data/mockData.js";

function App() {

  console.log(mockData);
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
      
    </div>
  )
}

export default App;

