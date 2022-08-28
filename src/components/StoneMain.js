import { Routes, Route } from 'react-router-dom';
import StoneIndex from '../pages/StoneIndex';
import StoneShow from '../pages/StoneShow';

function StoneMain(props) {
    return (
    <main>
        <Routes>
           <Route path="/" element={<StoneIndex />} />
           <Route path="/stones/:id" element={<StoneShow />} />
        </Routes>
    </main>
    )
}
export default StoneMain;