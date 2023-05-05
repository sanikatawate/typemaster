import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Mainpara.css";
import Letter from "./Letter";
import Timer from "./timer";
import Results from "./Result";

const timeLeft = 30;
const wordcount = 30;
const randomwords = faker.random.words(wordcount).toLowerCase();

function refreshPage() {
  window.location.reload(false);
}

function Mainpara() {

  const [style, setStyle] = useState("maindiv");
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState('inactive')
  const [redcount, setRedcount] = useState(0)
  const [whitecount, setWhitecount] = useState(0)
  const [wordcount, setWordcount] = useState(0)
//   const words = ["a", "b", "c", "d", "e"];

//   const dict = [
//     {letter: "a", check: 0},
//     {letter: "b", check: 0},
//     {letter: "c", check: 0},
//     {letter: " ", check: 0},
//     {letter: "d", check: 0},
//     {letter: "e", check: 0},
//   ]

  const dict =[]
  randomwords.split('').forEach(item => {
    dict.push({letter: item, check:0})
  });
  console.log(dict)

  const [words, setWords] = useState(dict)

  const handler = (event) => {
    
    if(index===0)
      setStatus(true)
    let check;
    if (words[index].letter === event.nativeEvent.key) 
    {
      check = 1;
      setWhitecount(whitecount+1) 

      if(event.nativeEvent.key===' '){
        check = 0;
        setWordcount(wordcount+1)}
    }
    else
    {
      check = -1;
      setRedcount(redcount+1)
    }
    
    const duplicatearr = [...words]
    duplicatearr[index].check = check
    setWords(duplicatearr)
    setIndex(index + 1);
  };

  return (
    <div className="main">

      <div className="timer"><h1><Timer/></h1></div>
    
      <div className="outerdiv">
        {words.map((word, index) => {
          return <Letter style="maindiv" key={index} letter={word.letter} check={word.check}></Letter>;
        })}
      </div>

      <input type="text" id="myinputbox" onKeyPress={(e) => handler(e)} autoFocus/>

      <button className="button-84" onClick={refreshPage}>Refresh</button>
      
      <Results right={whitecount} wrong={redcount} word={wordcount}/>

    </div>
  );
}

export default Mainpara;
