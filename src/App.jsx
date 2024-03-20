import Form from './components/Form';
import Table from './components/Table/Table';
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [render, setRender] = useState(false);

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
            if(json.length>0){setData(json)}
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
      <Form onSubmit={handleSubmit}/>
      <Table data={data}/>
    </div>
  );
  }

export default App
