import React from "react";
import check from '../images/check.png';
import bin from '../images/bin.png';

const List =({setLists, tweet, lists, key}) =>{

    const deleteTweet = () =>{
        setLists(lists.filter((state)=> state.id !== tweet.id));
    }
return(
    <div>
        <ul className="list">
            <li>
                <img src={check} alt="check"/>
                <h3>{tweet.task} </h3>
                <img src={bin} alt="bin" onClick={deleteTweet} />
            </li>
        </ul>
    </div>
)

}


export default List;