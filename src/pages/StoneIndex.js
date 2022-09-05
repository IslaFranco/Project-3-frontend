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
        return stones.map(({ name, img, _id })=> {
            return (
                <div className="stone-link" key={_id}>
                    <Link to={`/${_id}`}>
                       <h1 className="stone-link">{name}</h1>
                    </Link>
                    {/* { <img className="stone-images" src={img} alt={name} /> } */}
                    {/* <h3>{description}</h3>
                    // <h3>{color}</h3> */}
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

            <form onSubmit={handleSubmit} className="create-stone">
                <h1 className="title">Create A New Stone</h1>
                <label for="name">Stone Name:</label>
                <input 
                    type="text" 
                    value={newForm.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Turquoise stone..."
                />
                <label for="img" name="img">Stone Image:</label>
                <input 
                    type="text" 
                    value={newForm.img}
                    onChange={handleChange}
                    name="img"
                    placeholder="https://your-image-url.png"
                />
                <lable for="description" name="description">Description of Stone:</lable>
                <input 
                    type="text" 
                    value={newForm.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="This stone is great for..."
                />
                <lable for="color" name="color">Color of Stone:</lable>
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