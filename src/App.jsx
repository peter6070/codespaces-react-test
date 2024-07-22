import './App.css';
import React, {useState} from 'react';
import axios from "axios"

function App() {
  const [colorCode, setColorCode] = useState("#000000");
  const [textColorCode, setTextColorCode] = useState("#ffffff");
  const [colorChange, setColorChange] = useState(true);
  const applyColor = () => {
    setColorCode(colorChange ? "#ffffff":"#000000");
    setTextColorCode(colorChange ? "#000000":"#ffffff");
    setColorChange(!colorChange);
    setColor();
  }
  const [load, setLoad] = useState(false);
  // const [shoes, setShoes] = useState([]);

  const requestToServer = async () => {
    setLoad(true)
    await axios.get("https://upgraded-halibut-9g6wv74r674fpj6-4000.app.github.dev/colorValue")
    .then(response => {
      //console.log(props.shoes);
      console.log(response.data);
      //let copy = [...props.shoes, ...response.data];
      //console.log(copy);
      //props.setShoes(copy);
      setVariable(response);
    })
  }

  const setColor = () => {
    
    document.documentElement.style.setProperty(
      '--background-color', 
      colorCode
    );
    document.documentElement.style.setProperty(
      '--color', 
      textColorCode
    );
    
  }
  return (
    <div className="App">
      <header className='header'>
        <img src='../public/img/airDefense.webp' alt='방관사 로고'/>
        <h1 className='title'>방공관제사령부</h1>
      </header>
      <button className='button' onClick={applyColor}>버튼임</button>
      <button className='axiosbutton' onClick={requestToServer}>axios 테스트</button>
    </div>
  );
}

export default App;
