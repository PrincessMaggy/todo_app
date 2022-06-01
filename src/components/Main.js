import React from "react";
import Task from "./Task";

const Main =({userInput, setUserInput, lists, setLists}) =>{

return(
    <div>
        <div className="header">
            <h1>TODO</h1>
            <div><img src="" alt="icon"/></div>
        
        <Task
        input={userInput}
        setInput ={setUserInput}
        lists ={lists}
        setLists= {setLists}/>
        </div>

    </div>
)

}


export default Main;