import { useState } from "react";

function GiftCard ( { gift }) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="bg-white rounded-2xl shadow-md p-5"> 
            <h3 className="text-xl font-bold text-gray-800">
                {gift.name}
            </h3>

        <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 text-rose-500 font-medium">
            {isOpen ? "Hide Instructions" : "Show Instructions"}
        </button>

        {isOpen && (
            <p className="text-gray-600 mt-3">
            {/* seperation of concerns - giftcard doesn't care where data came from */}
                {gift.instructions}  
            </p>
        )}
        
        </div>
    );
}

export default GiftCard;