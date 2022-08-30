import { Link } from 'react-router-dom';

function StoneIndex(props) {

    const loaded = () => {
        return props.stone.map(({ name, description, img, color, _id })=> {
            return (
                <div className="stone" key={_id}>
                    <Link to={`/stones/{$_id}`}>
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


    return props.stone ? loaded() : loading();



    // return <h1>Stone index page component</h1>
}

export default StoneIndex;