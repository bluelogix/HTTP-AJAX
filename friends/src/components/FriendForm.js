import React from 'react';

function FriendForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        if (props.isUpdating) {
            props.updateFriend();
        } else {
            props.addFriend();
        }
    }
  return (
      <div className="form">
    
    {/* <h2>{props.isUpdating ? 'Update Item' : 'Add New Friend'}</h2> */}
        <form autoComplete="off"  onSubmit={handleSubmit}>

            

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
                    placeholder="Email"
                    onChange={props.handleChanges}
                />
        
        <div>
        <button  type="submit">{props.isUpdating ? 'Update item' : 'Add new Item'}</button>
        </div>

        </form>
        
    </div>
  );
}

export default FriendForm;

// onClick={props.addFriend}
