import React from "react";
import check from '../images/check.png';
import bin from '../images/bin.png';

const List =({setLists, tweet, lists}) =>{

    const checkList =(e)=>{
        e.target.classList.toggle('checked');
        if (e.target.classList.contains('checked')){
        e.target.parentElement.nextElementSibling.style.textDecoration= "line-through";
        }else{
            e.target.parentElement.nextElementSibling.style.textDecoration= "none";
        }
    }
    const display =(e)=>{
        e.target.parentElement.nextElementSibling.style.display = "flex";
    }
    const deleteTweet = () =>{
        setLists(lists.filter((state)=> state.id !== tweet.id));
    }
    const cancel =(e)=>{
        e.target.parentElement.parentElement.style.display = "none";
    }
    
return(
    <div>
        <ul className="list">
            <li>
                <div><img src={check} alt="check" onClick={checkList}/></div>
                <h3>{tweet.task} </h3>
                <div><img src={bin} alt="bin" onClick={display} /></div>
                <div className="confirm">
                    <div><button onClick={deleteTweet}>CONFIRM</button> </div>
                   <div> <button className="cancel" onClick={cancel}>CANCEL</button></div>
                </div>
            </li>
        </ul>
    </div>
)

}


export default List;