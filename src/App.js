
import './App.css';
import { useState, useEffect } from 'react';
import Die from './components/Die';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice,setDice]=useState(allNewDice());
  const [tenzies,setTenzies]=useState(false);
  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [hours,setHours]=useState(0);
  const [rolls, setRolls]=useState(0)
  if(seconds >59){
    setSeconds(0)
  }
  if(minutes>59){
    setMinutes(0)
    setHours(hour=>hour +1)
  }
  useEffect(()=>{
    let timer = setInterval(()=>{
      
      if(tenzies){
        return
      }
      setSeconds(seconds=>seconds+1)
    },1000)
    return ()=> clearInterval(timer)
  },[!tenzies])



 
  useEffect(()=>{
    const allHeld=dice.every(die=>die.isHeld===true)
    const firstValue=dice[0].value;
    const allSameValue=dice.every(die=> die.value===firstValue)
    if(allHeld && allSameValue){
      setTenzies(true);
      
    }
  },[dice])

  function allNewDice(){
    const arrNumbers=[] ;
    const numberOfNumbers = 10; 
    for(let i=0; i<numberOfNumbers;i++){
      arrNumbers.push({value: Math.floor(Math.random() * (6 - 1 + 1)) + 1, isHeld: false, id: nanoid() })
    }
    return arrNumbers
  }
  function roll(){
    if(!tenzies){setDice(dice.map(die=> die.isHeld===true ? die : {value: Math.floor(Math.random() * (6 - 1 + 1)) + 1, isHeld: false, id: nanoid() }));
    setRolls(x=>x+1)
    }else{
      setTenzies(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      // setStart(false);
      setDice(allNewDice)}
  }
  

  function handleHeld(id){
    setDice(dice.map(die=> die.id===id ?
       {...die,isHeld:!die.isHeld} : 
       die))
  }
  
  
  const dieElements=dice.map(die=><Die value={die.value} key={die.id} isHeld={die.isHeld} held={()=>handleHeld(die.id)}/>)
  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <h3 className='time'>Time: <span>{String(hours).padStart(2,'0')}:{String(hours).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</span></h3>
      <div className='dice'>
          {dieElements}
      </div>
      <button onClick={roll}>{tenzies ? "New game" : "Roll"}</button>
      <h4 className='rolls'>Rolls: <span>{rolls}</span></h4>


    </main>
  );
}

export default App;
