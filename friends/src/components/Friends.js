import React from 'react'

function Friends(props) {
   
    return (
        <div className="friendHeader card">
            <i onClick={(e) => props.populateForm(e, props.friend.id)} className="fas fa-user-edit"></i>
            <h1> {props.friend.name}</h1>
            <p> Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <i onClick={(e) => props.deleteFriend(e, props.friend.id)} className="fas fa-trash-alt"></i>
        </div>
    )
}

export default Friends;