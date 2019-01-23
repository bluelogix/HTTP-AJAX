import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
// import { setupMaster } from 'cluster    ';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      error: ''
    }
  }

  componentDidMount() {
    console.log("cdm working");
    axios.get('http://localhost:5000/friends')
    .then(res => {
        this.setState({ friendsList: res.data})
    })
    .catch(err => {
      this.setState({ error: err})
    })
  }



  render() {
    return (
      <div className="App">
        {this.state.friendsList.map( friend => {
          return(
            <div>
             <h1>{friend.name}</h1>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
