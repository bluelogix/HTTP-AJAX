import React from 'react';

function FriendForm(props) {
 
  return (
      <div className="form">

        <form autoComplete="off" >

            

                <input className="name"
                    value={props.input.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChanges}
                />

                <input
                    value={props.input.age}
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChanges}
                />
                <input
                    value={props.input.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={props.handleChanges}
                />
        
        <div>
        <button onClick={props.addFriend} type="submit">Add Friend</button>
        </div>

        </form>
        
    </div>
  );
}

export default FriendForm;


