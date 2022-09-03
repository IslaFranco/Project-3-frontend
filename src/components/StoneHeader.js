import { Link } from 'react-router-dom';

function StoneHeader(props) {
    return (
        <nav className="nav">
            <Link to="/">
               <div className="header">Blooming Stones</div>
            </Link>
        </nav>
    )
}
export default StoneHeader;