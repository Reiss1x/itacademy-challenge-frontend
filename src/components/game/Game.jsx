import React from 'react'

export default function Game() {

    const apiKey = "http://localhost:8080/"


    const handleGame = (event) => {
        const fetchWinners = async () => {
        await fetch (`${apiKey}user/game`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          response.json().then((json) => {
            if(json.length>0){setData(json)}
            console.log(json);
            setRender(false);
          })  
        }).catch(error => {console.log(error)});
      }
      fetchWinners();
    }

  return (
    <div>
        <button onClick={handleGame}></button>
        <h1>Mega Sena</h1>
        <p>Rodadas:</p>
        <p>Vencedores:</p>
        <p></p>
    </div>
  )
}
