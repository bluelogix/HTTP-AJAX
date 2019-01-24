import React from 'react'
import Friends from './Friends'
import './Friends.css'

function FriendsList(props) {
    return(
        <div className="something">
             {props.friendsList.map( (friend , index) => {
                 return <Friends key={index} friend={friend} />
             })}
        </div> //end div
    )
}

export default FriendsList;