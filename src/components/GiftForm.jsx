import { useState } from "react";

function GiftForm() {

    const [formData, setFormData] = useState({
        person : "",
        occasion : "",
        interests : "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/gifts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data);
    }

    return (

        <form onSubmit={handleSubmit}>
            <select
                name = "person"
                placeholder="Who is this gift for ? "
                value = {formData.person}
                onChange={handleChange}
                className="w-full p-2 rounded border border-rose-200 mb-4"
            >

                <option value="">Select an option</option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="girlfriend">Girlfriend</option>
                <option value="boyfriend">Boyfriend</option>
                <option value="wife">Wife</option>
                <option value="husband">Husband</option>
                <option value="sister">Sister</option>
                <option value="brother">Brother</option>
                <option value="friend">Friend</option>
                <option value="colleague">Colleague</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="occasion">Occasion</label>

            <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full p-2 rounded border border-rose-200 mb-4"
            >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="gratitude">Gratitude</option>
                <option value="surprise">Surprise</option>
                <option value="valentines_day">Valentines Day</option>
                <option value="wedding">Wedding</option>
                <option value="promotion">Promotion</option>
                <option value="graduation">Graduation</option>
                <option value="housewarming">Housewarming</option>
                <option value="festival">Festival</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="interests">Interests</label>

            <textarea
                id="interests"
                name="interests"
                placeholder="e.g. loves handmade stuff, books, travel..."
                value={formData.interests}
                onChange={handleChange}
                className="w-full p-2 rounded border border-rose-200 mb-4"
            />
            <button 
                type="submit" 
                className="w-full bg-rose-500 text-white py-3 px-4 rounded-xl font-semibold shadow-md hover:bg-rose-600 hover:shadow-lg transition-all duration-200"
            >Get Gift Ideas
            </button>

    
        </form>
    )
}

export default GiftForm;