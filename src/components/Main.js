import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import List from "./List";
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';


const Main =() =>{

    // state effect for changing to dark or light mode
    const [source, setSource] = useState(moon);

    //state effects for inputs
    const [userInput, setUserInput] = useState('');
    const [lists, setLists] = useState([]);
    
    //dark and light mode
    let currentTheme= 'dark';
    const changeTheme =() => { 
    document.body.classList.toggle('dark-mode');
    if (currentTheme==='dark'){
        setSource(sun);
        currentTheme ='light';
    }
    else {
        setSource(moon)
        currentTheme ='dark';
    }
    }

    const updateText =(e)=>{
        setUserInput(e.target.value);
        };
    
    const submitTask =(e)=>{
        e.preventDefault();
        setLists([...lists, {task:userInput, id:uuidv4()}])
        setUserInput('');
    }




return(
    <div className="main">
        <div className="header">
            <div className="todo">
                <h1>TODO</h1>
                <div><img src={source}  onClick ={changeTheme} alt="icon"/></div>
            </div>
        
            <div className="myDIV">
                <div>
                    <input 
                    type="text"
                    onChange={updateText}
                    value={userInput} />

                    <input 
                    value="ENTER"
                    type="submit" 
                    onClick={submitTask} /> 
                </div>

                <div className="task-list">
                { lists.map(tweet =>(
                    <List 
                    setLists={setLists}
                    tweet={tweet}
                    lists ={lists} 
                    key = {tweet.id} />))}
                </div>
            </div>

        </div>
    </div>
)

}


export default Main;