import { Routes, Route } from 'react-router-dom';
import ChakraIndex from '../pages/ChakraIndex';
import ChakraShow from '../pages/ChakraShow';

function ChakraMain(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ChakraIndex />} />
                <Route path="/chakras/:id" element={<ChakraShow />} />
            </Routes>
        </main>
    );
  }
  
  export default ChakraMain;