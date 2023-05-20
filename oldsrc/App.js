import { useState, useEffect } from 'react';
import './App.css';

// create component 
const Person = (props)=> {
  return (
    <>
    <h1>name: {props.name}</h1>
    <h2>Last: {props.last}</h2> 
    <h2>Age: {props.age}</h2> 
    </>
  )
}

function App() {
  const name = "Ahmed"; // if you change this to null you will find there is no name printed in the browser.
  const isNameShowing = false;
  const [counter, setCounter] = useState(0) // using of useState with events
  useEffect(() => {alert("You've Changed the counter to " + counter);},[counter])
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <h1>Hello, React from {isNameShowing ? name : "someone"}</h1>
      <h1>{2+2}</h1>
      { name ? (<> {name} </>) : ( <> <h1>Test</h1> <h2>There is no name</h2></>)}
      <Person name={"Ahmed"} last={"Qino"} age={"33"} />
      <Person name={"Mostafa"} last={"Ashor"} age={"43"} />
      <Person name={'Mohamed'} age={2+2} />
      <button onClick={()=> setCounter((prevCount)=>prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=>prevCount + 1)}>+</button>
      </div>
  );
}

export default App;
