import React from 'react';

function FriendForm(props) {
 
  return (
      <div className="form">

        <form autoComplete="off" onSubmit={props.addFriend}>

            <h1>Friend List</h1>

                <input className="name"
                    value={props.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChanges}
                />

                <input
                    value={props.age}
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChanges}
                />
                <input
                    value={props.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={props.handleChanges}
                />
        
        <div>
        <button type="submit">Add Friend</button>
        </div>

        </form>
        
    </div>
  );
}

export default FriendForm;


