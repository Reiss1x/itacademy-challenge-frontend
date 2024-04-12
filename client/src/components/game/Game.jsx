import React, { useEffect, useState } from 'react'
import './Game.css'
import { API_BASE_URL } from '../../config/apiConfig';
  
export default function Game({ onResetClick, gameData }) {

  const [enoughPlayers, setEnoughPlayers] = useState(true);
  const [winnerBets, setWinnerBets] = useState("");
  const [numbersDrawed, setNumbersDrawed] = useState("");

  const [noWinners, setNoWinners] = useState(true)

  const apiKey = API_BASE_URL;

  useEffect(() => {
    console.log(gameData);
    if(Object.keys(gameData).length>0) {
      setNumbersDrawed(gameData.numbersDrawed.join(","))

      if(gameData.win){
      setWinnerBets(gameData.winnerBet.join(","));
      setNoWinners(false);
    }
      
    } else {
      setNoWinners(true);
      setEnoughPlayers(false)
    }
    
    
  }), []

    const reward = (playerCount) => {
        return (playerCount * 5.25) * (gameData.rounds * 1.25);
    }

  return (
    <div className='game-area-container'>
      { 
        !noWinners ? (
          <div>
            <h1>💸MEGA SENA💸</h1>
            <h1> VENCEDOR: {gameData.winnersName} 🎉🎉🥳 </h1>
            <p>Rodadas: {gameData.rounds}</p>
            <p>Números sorteados: {numbersDrawed}</p>
            <p>Aposta vencedora: {winnerBets}</p>
            <p id='trophy'>🏆</p>
            <h1>PREMIO: R${reward(gameData.playerCount)} 🤑🤑</h1>
            <button className='back-button' onClick={onResetClick}> Reiniciar </button>
          </div>
    
        ) : (
          <div>
          <h1>💸MEGA SENA💸</h1>
          {!enoughPlayers ? (
            <h1>Não há jogadores o suficiente.</h1>
          ) : (               
            <div>
                <h1>Não houve vencedores 😢</h1>
                <div className='no-winners'>
                    <p>Números sorteados: {numbersDrawed}</p> <br />
                    <p>Rodadas: {gameData.rounds}</p>
                </div>
            </div>            
          )}
          
          <button className='back-button' onClick={onResetClick}> Reiniciar </button>
        </div>
        )
      }
    </div>
  )
}
