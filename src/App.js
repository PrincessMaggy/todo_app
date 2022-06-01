import React,{useState} from "react";
import Main from "./components/Main";


function App() {
// states
const [userInput, setUserInput] = useState('');
const [lists, setLists] = useState([]);

  return (
    <div className="App">

     <Main
     input={userInput}
     setInput ={setUserInput}
     lists ={lists}
     setLists= {setLists}
     />

     <div className="bottom">
       <a href="#">Drag and drop to reorder list</a>
       <p>Challenge by Frontend Mentor. <a href="#">Coded by Maggy </a></p>
        </div>
    </div>
  );
}

export default App;
