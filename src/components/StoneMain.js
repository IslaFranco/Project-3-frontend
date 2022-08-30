import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import StoneIndex from '../pages/StoneIndex';
import StoneShow from '../pages/StoneShow';

function StoneMain(props) {
    const [ stone, setStone ] = useState(null)

    const API_URL = 'http://localhost:3001/stones/seed';

    const getStone = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setStone(data);
        } catch (error) {
            // to do: add logic or task
        }
    };

    const createStone = async (stone) => {
        try {
             await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(stone)
            });
            getStone(); //updated version once they create a new stone
        } catch (error) {
            //to do
        }
    }

    useEffect(() => {
        getStone();
    }, [])

    return (
    <main>
        <Routes>
           <Route path="/stones" element={<StoneIndex stone={stone} createStone={createStone} />} />
           <Route path="/stones/:id" element={<StoneShow />} />
        </Routes>
    </main>
    )
}
export default StoneMain;