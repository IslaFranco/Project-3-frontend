import { useParams, useNavigate } from 'react-router-dom';

function StoneShow({ stones, deleteStone }) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const stone = stones.find(s => s._id === id);


        const handleDelete = () => {
            deleteStone(id);
            navigate('/');
        }

    const loaded = () => (
        <div className="stone">
            <h1>{stone.name}</h1>
            <img className="stone-images" src={stone.img} alt={stone.name}></img>
            <h2>{stone.description}</h2>
            <h2>{stone.color}</h2>
            <button onClick={handleDelete}>Delete this stone</button>
        </div>
    )

    const loading = () => (
        <div>Loading..</div>
    )

    return stone ? loaded() : loading();
}

export default StoneShow;