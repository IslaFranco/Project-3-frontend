import { useState } from 'react';
import { Link } from 'react-router-dom';
import StoneHeader from "../components/StoneHeader";

function StoneIndex({ stones, createStone }) {

    const [ newForm, setNewForm ] = useState({
        name: "",
        img: "",
        description: "",
        color: ""

    })

    const loaded = () => {
        return stones.map(({ name, _id })=> {
            return (
                <div className="stone" key={_id}>
                    <Link to={`/${_id}`}>
                       <h1>{name}</h1>
                    </Link>
                    {/* <img src={img} alt={name} />
                    <h3>{description}</h3>
                    <h3>{color}</h3> */}
                </div>
            )
        })
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    const handleChange = event => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        createStone(newForm)
    };


    return (
        <div>
            <StoneHeader />
        <section>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newForm.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Turquoise stone..."
                />
                <input 
                    type="text" 
                    value={newForm.img}
                    onChange={handleChange}
                    name="img"
                    placeholder="https://your-image-url.png"
                />
                <input 
                    type="text" 
                    value={newForm.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="This stone is great for..."
                />
                <input 
                    type="text" 
                    value={newForm.color}
                    onChange={handleChange}
                    name="color"
                    placeholder="Mix of blue and green..."
                />
                <input type="submit" value="Add stone!" />

            </form>
                {stones ? loaded() : loading()}
        </section>
        </div>
        )
}

export default StoneIndex;