import React from 'react'
import Friends from './Friends'
import './Friends.css'

function FriendsList(props) {
    return(
        <div className="something">
             {props.friendsList.map(friend  => {
                 return <Friends key={friend.id} friend={friend} deleteFriend={props.deleteFriend} />
             })}
        </div> //end div
    )
}

export default FriendsList;