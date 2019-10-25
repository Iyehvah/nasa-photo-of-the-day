import React, {useState, useEffect} from "react";
import "./App.css";
import SpaceCard from './components/SpaceCard';
import CardInfo from "./components/CardInfo";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=EzeObyP91MSsBjv4GWZpWbx9qxjYDoozapCA0n8D')
      .then(response => {
              console.log(response)
              setData(response.data)
       });
  }, []);


  return (
    <div className="App">
      <CardInfo data={data}/>
      <SpaceCard data={data} />
    </div>
  );
};

export default App;
