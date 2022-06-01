import React from "react";


const Task =({userInput, setUserInput, lists, setLists}) =>{

const updateText =(e)=>{
    setUserInput(e.target.value);
    }

const submitTask =(e)=>{
    e.preventDefault();

}

return(
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
)

}


export default Task;