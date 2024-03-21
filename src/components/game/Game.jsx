import React, { useState } from 'react'
  
export default function Game() {

  const [data, setData] = useState({});
  const [winnerBets, setWinnerBets] = useState("");
  const [numbersDrawed, setNumbersDrawed] = useState("");

  const [noWinners, setNoWinners] = useState(false)

    const apiKey = "http://localhost:8080/"


    const handleGame = () => {
        const fetchWinners = async () => {
        await fetch (`${apiKey}user/game`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          response.json().then((json) => {
            setData(json) 
            setNumbersDrawed(json.numbersDrawed.join(","));
            setWinnerBets(json.winnerBet.join(","));
          })
        }).catch(error => {
          console.log(error);
          setNoWinners(true)
        });
      }
      fetchWinners(); 
      console.log(data);
      
    }

    


  return (
    <div>
        <button onClick={handleGame}> AAAAAAAAA</button>
        <h1>Mega Sena</h1>
        
        <p>Rodadas: {data.rounds}</p>
        <p>Vencedores: {data.winnersName}</p>
        <p>Números sorteados: {numbersDrawed ? numbersDrawed : ""}</p>
        <p>Aposta vencedora: {winnerBets}</p>
        <p>{noWinners ? "Não houve vencedores." : ""}</p>
    </div>
  )
}
