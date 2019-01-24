import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList'

import './App.css';
// import { setupMaster } from 'cluster    ';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      // error: ''
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



  render() {
    return (
      <div className="App">

        <FriendsList friendsList={this.state.friendsList} />
      
      </div> // end div
    );
  }
}

export default App;
