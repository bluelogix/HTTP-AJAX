import React from 'react'

function Friends(props) {
    return (
        <div className="friendHeader card">
            <h1> {props.friend.name}</h1>
            <p> Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friends;