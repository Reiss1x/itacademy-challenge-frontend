import { useState } from 'react';
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const [response, setResponse] = useState('');
  const { register, handleSubmit }  = useForm();

  
  
  
  const onSubmit = async ( data ) => {
    console.log(data);
    
    try {
        const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify({ data })
      });

      const responseData = await response.json();
      setResponse(responseData);
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
        <label>
          Name:
          <input
            type="text"
            placeholder='seu nome'
            {...register('name')}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            placeholder='seu CPF'
            {...register('cpf')}
          />
        </label>
        <br />
        <label>
          Bet Numbers:
            <input
              type="text"
              placeholder='seus numeros'
              {...register('numbers')}
            />
        </label>
        <br />
        <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
      <div>Response: {response}</div>
    </div>
  );
  }

export default App
