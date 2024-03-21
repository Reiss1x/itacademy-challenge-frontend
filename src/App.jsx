import Form from './components/Form';
import Table from './components/Table/Table';
import './App.css'
import { useState, useEffect } from 'react';
import Game from './components/game/Game';

function App() {
  const [data, setData] = useState([])
  const [render, setRender] = useState(false);
  const [scene, setScene] = useState("start");
  const [list, setList]  = useState(false);

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




  return (
    <div id='game-container'>
      <div className='main-container'>
        {
          scene === "start" && (
            <div className='start-scene'>
              <h1>MEGA SENA</h1>
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
                <button type='button' id='list-button' onClick={() => setList(true)}> Listar Jogadares</button>
                <button className='play-button' onClick={() => {setScene("play")
              setList(false)}}> JOGAR </button>
              </div>
            {data.length>0 ? (
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
            ) : null}
            </div> 
        )
      }
      {
         scene === "play" && (
         <div className='game'>
           <Game onResetClick={() => setScene("start")}/>
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
