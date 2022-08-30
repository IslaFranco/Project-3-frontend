import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChakraIndex from '../pages/ChakraIndex';
import ChakraShow from '../pages/ChakraShow';

function ChakraMain(props) {

    const [ chakra, setChakra ] = useState(null);

    const API_URL = 'http://localhost:3001/chakras/chakra';

    const getChakra = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setChakra(data);
        } catch (error) {
            //to do
        }
    };

    useEffect(() => {
        getChakra();
    }, []);


    return (
        <main>
            <Routes>
                <Route path="/chakras" element={<ChakraIndex chakra={chakra}/>} />
                <Route path="/chakras/:id" element={<ChakraShow />} />
            </Routes>
        </main>
    );
  }
  
  export default ChakraMain;