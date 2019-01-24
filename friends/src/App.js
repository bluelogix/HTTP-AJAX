import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'

import './App.css';
// import { threadId } from 'worker_threads';


// const friendInput = {
//   name: '',
//   age: '',
//   email: ''
// }





class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      input: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  componentDidMount() {
    console.log("cdm working");
    axios.get('http://localhost:5000/friends')
    .then(res => {
        this.setState({ friendsList: res.data})
    })
    .catch(err => console.log(err))
    
   
  }

  handleChanges = e => {
    e.preventDefault(); 
        this.setState({ [e.target.name]: e.target.value });
};




addFriend = () => {
  axios.post('http://localhost:5000/friends' , this.state.input)
  .then(res => {
    this.setState({ friendsList: res.data });
    this.props.history.push('/')
  })
  .catch(err => console.log(err));
}




  render() {
    return (
      <div className="App">
        <FriendForm  
        addFriend={this.state.addFriend}
        input={this.state.input}
        handleChanges={this.handleChanges}
        />
        <FriendsList friendsList={this.state.friendsList} />
      
      </div> // end div
    );
  }
}

export default App;
