import Form from './components/Form';
import Table from './components/Table/Table';
import './App.css'
import { useState, useEffect } from 'react';
import Game from './components/game/Game';

function App() {
  const [data, setData] = useState([])
  const [render, setRender] = useState(false);
  const [play, setPlay] = useState(false);

  const apiKey = "http://localhost:8080/"

  useEffect(() => {
      const fetchUsers = async () => {
        await fetch (`${apiKey}user`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          response.json().then((json) => {
            setData(json)
            console.log(json);
            setRender(false);
          })  
        }).catch(error => {console.log(error)});
      }
      fetchUsers();
    }, [render])

    const handleSubmit = () => {
      setRender(true);
    }

    const handleReset = () => {
      setPlay(false);
      setLeaderboard(true)
    }


  return (
    <div id='game-container'>
      <div className='main-container'>
      {
        !play ? (
            <div className='main-game'>
              <div className='form'>
                <Form onSubmit={handleSubmit}/>
                <button className='play-button' onClick={() => setPlay(true)}> JOGAR </button>
              
              </div>
            {data.length>0 ? (
            <div className='table-container'>
              <p>Jogadores:</p>
              <Table data={data}/>
            </div>
            ) : null}
          
          
      </div> 
        )
        : (
          <div className='game'>
            <Game onResetClick={handleReset}/>
          </div>
      )
      }
      </div>
      <div>Feito por: Gabriel Reis <br />
      Itacademy
      </div>
    </div>
    
  
  );
  }

export default App
