import React from "react";


const List =({setLists, tweet, lists, key}) =>{

    const deleteTweet = () =>{
        setLists(lists.filter((state)=> state.id !== tweet.id));
    }
return(
    <div className="List">
        <button> Like</button>
        <h3>{tweet.task} </h3>
        <button onClick={deleteTweet}> delete</button>
    </div>
)

}


export default List;