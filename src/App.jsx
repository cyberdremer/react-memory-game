import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayArea from "./components/DisplayArea";
import { CatAPI } from "./code/CatAPI";
function App() {
  const [cats, setCats] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [clickedItems, setClickedItems] = useState(new Set());

  let catArray;
  let catAPI = new CatAPI();
  useEffect(() => {
    catAPI.getCatData(10).then((data) => setCats(data));
  }, []);

  function shuffleArray() {
    const tempArr = [...cats];
    let currIndex = tempArr.length;
    while (currIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currIndex);
      currIndex--;
      [tempArr[currIndex], tempArr[randomIndex]] = [
        tempArr[randomIndex],
        tempArr[currIndex],
      ];
    }
    setCats(tempArr);
  }

  function handleClick(e) {
    let clickedID = e.currentTarget.id;
    if (clickedItems.has(clickedID)) {
      changeHighScore()
      setClickedItems(new Set());
    } else {
      setClickedItems((old) => new Set(old).add(clickedID));
    }
    
    shuffleArray();
  }

  function changeHighScore(){
    if(highScore <= clickedItems.size){
      setHighScore(clickedItems.size);
    }
  }

  return (
    <>
      <Header currScore={clickedItems.size} highScore={highScore}></Header>
      <DisplayArea catArray={cats} handleClick={handleClick}></DisplayArea>
      <Footer></Footer>
    </>
  );
}

export default App;
