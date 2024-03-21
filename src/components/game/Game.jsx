import React, { useEffect, useState } from 'react'
import './Game.css'
  
export default function Game({ onResetClick }) {

  const [data, setData] = useState({});
  const [winnerBets, setWinnerBets] = useState("");
  const [numbersDrawed, setNumbersDrawed] = useState("");

  const [noWinners, setNoWinners] = useState(true)

    const apiKey = "http://localhost:8080/"

    useEffect(() => {
        fetch (`${apiKey}user/game`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then((response) => {
          response.json().then((json) => {
            console.log(json);
            setData(json)
            setWinnerBets(json.winnerBet.join(","));
            setNoWinners(false);
            setNumbersDrawed(json.numbersDrawed.join(","))
          })
        }).catch(error => {
          console.log(error);
        });

    }, [])

  return (
    <div className='game-area-container'>
      {
        !noWinners ? (
          <div>
            <h1>MEGA SENA</h1>
            <h1> VENCEDOR: {data.winnersName} 🎉🎉🥳 </h1>
            <p>Rodadas: {data.rounds}</p>
            <p>Números sorteados: {numbersDrawed ? numbersDrawed : ""}</p>
            <p>Aposta vencedora: {winnerBets}</p>
            <button className='back-button' onClick={onResetClick}> Reiniciar </button>
          </div>
    
        ) : (
          <div>
          <h1>MEGA SENA</h1>
          <h1>Não houve vencedores 😢</h1>
          <button className='back-button' onClick={onResetClick}> Reiniciar </button>
        </div>
        )
      }
    </div>
  )
}
