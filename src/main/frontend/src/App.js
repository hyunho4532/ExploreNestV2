import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/test')
        .then(response => {
          setHello(response.data);
        })
        .catch(error => {
            console.log(error);
        })
  }, []);
  return (
      <div>
          {hello}
      </div>
  );
}

export default App;
