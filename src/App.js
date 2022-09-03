import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StoneIndex from "./pages/StoneIndex";
import StoneShow from "./pages/StoneShow";

function App() {
  const [ stones, setStones ] = useState(null)

  const API_URL = 'http://localhost:3001/stones';

  const getStones = async () => {
      try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setStones(data);
      } catch (error) {
          // to do: add logic or task
      }
  };

  const createStone = async (stone) => {
    console.log(stone);
      try {
           await fetch(API_URL, {
              method: 'POST',
              headers: {
                  'Content-type': 'Application/json'
              },
              body: JSON.stringify(stone)
          });
          getStones(); //updated version once they create a new stone
      } catch (error) {
          //to do
      }
  }

  const deleteStone = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      getStones();
    } catch (error) {
      // to do 
    }
  }

  const updateStone = async (id, updatedStone) => {
    try {
        await fetch (`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedStone)
        });

        getStones();
    } catch (error) {
        //todo
    }
}

  useEffect(() => {
      getStones();
  }, [])



  return (
    <>
      <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <StoneIndex 
                    stones={stones} 
                    createStone={createStone}
                     />} />
            <Route 
                path="/:id" 
                element={
                  <StoneShow 
                      stones={stones}
                      deleteStone={deleteStone} 
                      updateStone={updateStone} />}
                       />
          </Routes>
      </div>
    </>
  );
}

export default App;
