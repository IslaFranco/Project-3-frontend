import { Link } from 'react-router-dom';

function ChakraIndex(props) {

    const loaded = () => {
        return props.chakra.map(({ name, chakra, originChakra, description, img, _id }) => {
            return (
                <div className="chakra" key={_id}>
                    <Link to={`/chakras/${_id}`}>
                        <h2>{chakra}</h2>
                        {/* <h2>{name}</h2>
                        <h2>{originChakra}</h2>
                        <h3>{description}</h3>
                        <img src={img} alt={name} /> */}
                    </Link>
                </div>
            )
        })
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.chakra ? loaded() : loading();



    // return <h1>Chakra index page component</h1>
}

export default ChakraIndex;