import { Link } from 'react-router-dom';

function StoneHeader(props) {
    return (
        <nav className="nav">
            <Link to="/">
               <div>Blooming Stones</div>
            </Link>
        </nav>
    )
}
export default StoneHeader;