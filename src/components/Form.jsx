import React from 'react'
import { useState } from 'react';
import './Form.css'

export default function Form({ onSubmit }) {

    const apiKey = "http://localhost:8080/"

    const [sequence, setSequence] = useState('');
    const [validSequence, setValidSequence] = useState(true);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    const [newBetSequence, setNewBetSequence] = useState('');
    const [newBetValidSequence, setNewBetValidSequence] = useState(true);
    const [newBetCpf, setNewBetCpf] = useState('');
    
    const handleBetChange = (event) => {
        event.target.id == "numbers" ? setSequence(event.target.value) : setNewBetSequence(event.target.value)
    
        if(!(/^([0-9]|[1-4][0-9]|50)(,([0-9]|[1-4][0-9]|50)){4}$/.test(event.target.value))){
            event.target.id == "numbers" ? setValidSequence(false) : setNewBetValidSequence(false);
            
        } else {   
            event.target.id == "numbers" ? setValidSequence(true) : setNewBetValidSequence(true);
        }
    }

    const handleBetSubmit = (event) => {
    
    event.preventDefault();
    
    const newBet = {
        cpf: newBetCpf,
        numbers: newBetSequence
    } 

    console.log(newBet);
    
    fetch(`${apiKey}user/addBet`,{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newBet)
    }).then(() => {
      console.log("New bet added to user.");
      onSubmit()
    })
    setNewBetValidSequence(true);
    setNewBetCpf("")
    setNewBetSequence("")
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const bet = {
      numbers: sequence
    }
    const newBet = {
      name: name,
      cpf: cpf,
      bets: [bet],
    } 

    console.log(newBet);
    
    fetch(`${apiKey}user`,{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newBet)
    }).then(() => {
      console.log("New bet added.");
      onSubmit()
    })
    setValidSequence(true);
    setName("")
    setCpf("")
    setSequence("")
  }

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <input
            className='form-input'
            type="text"
            placeholder='Seu Nome'
            id='nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
            />
            </div>
        
            <div className='form-group'>
            <input
            className='form-input'
            type="text"
            placeholder='Seu CPF'
            id='cpf'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            autoComplete="off"
            />
            </div>
        
        <div className='form-group'>
            <input
            className='form-input'
            type="text"
            placeholder='Números da aposta separados por vírgula'
            id='numbers'
            value={sequence}
            onChange={handleBetChange}
            required
            autoComplete="off"
            
            />
            {!validSequence && <p className="error-message">*5 números separados por vírgula</p>}
        </div>
        <button type='submit' id='submit-button' disabled={!validSequence}>Adicionar Jogador</button>
      </form>
      <hr />
      <form onSubmit={handleBetSubmit}>
        <div className='form-group'>
            <input
            className='form-input'
            type="text"
            placeholder='CPF do Jogador'
            id='newCpf'
            value={newBetCpf}
            onChange={(e) => setNewBetCpf(e.target.value)}
            required
            autoComplete="off"
            />
            </div>
        <div className='form-group'>
            <input
            className='form-input'
            type="text"
            placeholder='Números da aposta separados por vírgula'
            id='newNumbers'
            value={newBetSequence}
            onChange={handleBetChange}
            required
            autoComplete="off"
        />
        {!newBetValidSequence && <p className="error-message">*5 números separados por vírgula</p>}
        </div>
        <button type='submit' id='submit-button'> Adicionar aposta </button>
      </form>
    </div>

  )
}
