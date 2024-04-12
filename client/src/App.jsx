import Form from './components/Form';
import Table from './components/Table/Table';
import './App.css'
import { useState, useEffect } from 'react';
import Game from './components/game/Game';
import { API_BASE_URL } from './config/apiConfig';

function App() {
  const [data, setData] = useState([])
  const [gameData, setGameData] = useState({});
  const [render, setRender] = useState(false);
  const [scene, setScene] = useState("start");
  const [list, setList]  = useState(false);

  const apiKey = API_BASE_URL;

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

    const handleSubmit = (type) => {
      if(type === "remove"){
        setList(false)
        setGameData({});
      }
      
      setRender(true);
    }

    const fetchGame = () => {
        fetch (`${apiKey}user/game`)
        .then((response) => {
            return response.json();
        }).then(json => {
            console.log(json);
            setGameData(json)
        }).catch(error => {
          console.log(error);
        });
    };
  return (
    <div id='game-container'>
      <div className='main-container'>
        {
          scene === "start" && (
            <div className='start-scene'>
              <h1>💸MEGA SENA💸</h1>
              <p>clique para jogar:</p>
              <button onClick={() => {
                setScene("register")
                setList(false)
                }}>Iniciar</button>
            </div>
          )

        }
        { scene === "register" && (
            <div className='main-game'>
                <div className='form'>
                  <Form onSubmit={handleSubmit}/>
                  <button type='button' id='list-button' onClick={() => {
                    setList(true)
                    }}> Listar Jogadores</button>
                  <button className='play-button' onClick={() => {
                    setScene("apuracao")
                    setList(false)
                    fetchGame()}
                    }> JOGAR </button>
                </div>
                  
              <div className='table-container'>
                {
                  list && (
                    <div>
                      <p>Jogadores:</p>
                      <Table data={data}/>
                    </div>

                  )
                }
              </div>
            </div> 
          )
        }
        {
          scene === "apuracao" && (
            <div className='apuracao'>
              <h1> Carregando Apuração ⏳</h1>
              <div id='loading'>
                
                {
                setTimeout(() => {
                  setScene("play");
                },2000)
              }
              </div>
              
            </div>
          )
        }
        {
         scene === "play" && (
         <div className='game'>
           <Game onResetClick={() => {
            setScene("register")
            
            }} gameData={gameData}/>
         </div>
        )
        }

        </div>
        <div id='credit'>Feito por: Gabriel Reis <br />
        Itacademy
      </div>
    </div>
    
  
  );
  }

export default App
