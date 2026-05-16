function GiftForm() {
    return (

        <form>
    <div className="w-full p-2 rounded border border-rose-200 mb-4">
        <h2>Select the gift for your loved once</h2>
        <label htmlFor="giftName" >Person</label>
        <select id="giftName" name="giftName" className="w-full p-2 rounded border border-rose-200 mb-4">
            <option value="person1">Mother</option>
            <option value="person2">Father</option>
            <option value="person3">Girlfriend</option>
            <option value="person3">Boyfriend</option>
            <option value="person4">Brother</option>
            <option value="person5">Sister</option>
             <option value="person6">Friend</option>
             <option value="person7">Colleague</option>
             <option value="person3">Husband</option>
             <option value="person3">Wife</option>
             <option value="person8">Other</option>
        </select>

        <label htmlFor="occasion" >Occasion</label>
        <select id="occasion" name="occasion" className="w-full p-2 rounded border border-rose-200 mb-4">
            <option value="person1">Birthday</option>
            <option value="person2">Anniversary</option>
             <option value="person8">Other</option>
        </select>

        <label htmlFor="interests" >Interests</label>
        <textarea id="interests" placeholder="e.g. loves handmade stuff, books, travel..." className="w-full p-2 rounded border border-rose-200 mb-4" />

        <button type="submit" className="w-full bg-rose-500 text-white p-2 rounded hover:bg-rose-600 transition">Get Gift Ideas</button>

    </div>
        </form>
    )
}

export default GiftForm;

