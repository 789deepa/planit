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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
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


            <button 
                type="submit" 
                className="w-full bg-rose-500 text-white py-3 px-4 rounded-xl font-semibold shadow-md hover:bg-rose-600 hover:shadow-lg transition-all duration-200"
            >Get Gift Ideas
            </button>

    
        </form>
    )
}

export default GiftForm;