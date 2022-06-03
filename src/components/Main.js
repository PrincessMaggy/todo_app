import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import List from "./List";
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';


const Main =({userInput, setUserInput, lists, setLists}) =>{
    // state effect for changing to dark or light mode
    const [source, setSource] = useState(moon);

    const updateText =(e)=>{
        setUserInput(e.target.value);
        };
    
    const submitTask =(e)=>{
        e.preventDefault();
        setLists([...lists, {task:userInput, id:uuidv4()}])
        setUserInput('');
    }

    let currentTheme= 'dark';
    const changeTheme =() => {
    
    document.body.classList.toggle('dark-mode');
    if (currentTheme==='dark'){
        setSource(sun);
        currentTheme ='sun';

    }
    else {
        setSource(moon)
        currentTheme ='dark';

    }
    }


return(
    <div>
        <div className="header">
            <h1>TODO</h1>
            <div><img src={source}  onClick ={changeTheme} alt="icon"/></div>
        
        <div>
            <input 
            type="text"
            onChange={updateText}
            value={userInput} />

            <input 
            value="ENTER"
            type="submit" 
            onClick={submitTask} />

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