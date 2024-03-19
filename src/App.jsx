import { useState } from 'react';
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const [sequence, setSequence] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

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
    
    fetch("http://localhost:8080/user",{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newBet)
    }).then(() => {
      console.log("New bet added.");
    })
    
    setName("")
    setCpf("")
    setSequence("")
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder='seu nome'
            id='nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            placeholder='seu CPF'
            id='cpf'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bet Numbers:
            <input
              type="text"
              placeholder='seus numeros'
              id='numbers'
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
            />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  }

export default App
