import React,{useState} from "react";
import Main from "./components/Main";
import './styles/app.scss'

function App() {
// states
const [userInput, setUserInput] = useState('');
const [lists, setLists] = useState([]);

  return (
    <div className="App">

     <Main
     userinput={userInput}
     setUserInput ={setUserInput}
     lists ={lists}
     setLists= {setLists}
     />

     <div className="bottom">
       <p>Challenge by Frontend Mentor. <a href="https://www.github.com/PrincessMaggy">Coded by Maggy </a></p>
        </div>
    </div>
  );
}

export default App;
