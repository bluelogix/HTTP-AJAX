import React from 'react'
import Friends from './Friends'

function FriendsList(props) {
    return(
        <div>
             {props.friendsList.map( friend => {
                 return <Friends friend={friend} />
             })}
        </div> //end div
    )
}

export default FriendsList;