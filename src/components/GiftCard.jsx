function GiftCard ( { gift }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5"> 
            <h3 className="text-xl font-bold text-gray-800">
                {gift.name}
            </h3>

            <p className="text-gray-600 mt-3">
                {gift.instructions}
            </p>
        </div>
    );
}

export default GiftCard;