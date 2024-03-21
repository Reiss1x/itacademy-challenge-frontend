import React, { useEffect, useState } from 'react'
import './Game.css'
import { API_BASE_URL } from '../../config/apiConfig';
  
export default function Game({ onResetClick }) {

  const [data, setData] = useState({});
  const [winnerBets, setWinnerBets] = useState("");
  const [numbersDrawed, setNumbersDrawed] = useState("");

  const [noWinners, setNoWinners] = useState(true)

    const apiKey = API_BASE_URL;

    useEffect(() => {
        fetch (`${apiKey}user/game`)
        .then((response) => {
            return response.json();
        }).then(json => {
            console.log(json);
            setData(json)
            setNumbersDrawed(json.numbersDrawed.join(","))
            if(json.win){
                setWinnerBets(json.winnerBet.join(","));
                setNoWinners(false);
            }
        }).catch(error => {
          console.log(error);
        });
    }, [])

    const reward = (playerCount) => {
        return (playerCount * 5.23) * (data.rounds * 1.25);
    }

  return (
    <div className='game-area-container'>
      { 
        !noWinners ? (
          <div>
            <h1>💸MEGA SENA💸</h1>
            <h1> VENCEDOR: {data.winnersName} 🎉🎉🥳 </h1>
            <p>Rodadas: {data.rounds}</p>
            <p>Números sorteados: {numbersDrawed}</p>
            <p>Aposta vencedora: {winnerBets}</p>
            <p id='trophy'>🏆</p>
            <h1>PREMIO: R${reward(data.playerCount)} 🤑🤑</h1>
            <button className='back-button' onClick={onResetClick}> Reiniciar </button>
          </div>
    
        ) : (
          <div>
          <h1>💸MEGA SENA💸</h1>
          {Object.keys(data).length === 0 ? (
            <h1>Não há jogadores o suficiente.</h1>
          ) : (               
            <div>
                <h1>Não houve vencedores 😢</h1>
                <div className='no-winners'>
                    <p>Números sorteados: {numbersDrawed}</p> <br />
                    <p>Rodadas: {data.rounds}</p>
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
