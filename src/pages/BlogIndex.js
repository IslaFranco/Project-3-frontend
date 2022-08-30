import { Link } from 'react-router-dom'


function BlogIndex(props) {

    const loaded = () => {
        return props.blog.map(({ name, description, img, _id }) => {
            return (
                <div className="blog" key={_id}>
                    <Link to={`/blogs/$_id`}>
                        <h1>{name}</h1>
                        {/* <img src={img} alt={name} />
                        <h3>{description}</h3> */}
                    </Link>
                </div>
            )
        })
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };


    return props.blog ? loaded() : loading();

    // return <h1>Blog index page component</h1>
}

export default BlogIndex;