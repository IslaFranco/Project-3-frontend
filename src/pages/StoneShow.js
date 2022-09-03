import { useParams, useNavigate } from 'react-router-dom';
import StoneHeader from '../components/StoneHeader';

function StoneShow({ stones, deleteStone }) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const stone = stones.find(s => s._id === id);

        const handleDelete = () => {
            deleteStone(id);
            navigate('/');
        }

        const handleBack = () => {
            navigate('/');
        }

    const loaded = () => (
        <div className="stone">
            <StoneHeader />
            <h1>{stone.name}</h1>
            <img className="stone-images" src={stone.img} alt={stone.name}></img>
            <h2>{stone.description}</h2>
            <h2>The color of this stone is {stone.color}</h2>
            <button className="delete-btn" onClick={handleDelete}>Delete this stone</button>
            <button className="goback-btn" onClick={handleBack}>Go back</button>
        </div>
    )

    const loading = () => (
        <div>Loading..</div>
    )

    return stone ? loaded() : loading();
}

export default StoneShow;