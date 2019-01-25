import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
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
        isUpdating: false
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
    e.persist();
        this.setState(prevState => {
          return {
            input: {
              ...prevState.input,
              [e.target.name]: e.target.value
            }
          }
        })
};




addFriend = () => {
  axios.post('http://localhost:5000/friends' , this.state.input)
  .then(res => {
    this.setState({ friendsList: res.data });
    // this.props.history.push('/')
  })
  .catch(err => console.log(err));
}

deleteFriend = (e, id) => {
  e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({ friendsList: res.data });
      // this.props.history.push('/')
    })
    .catch(err => { console.log(err);
  })
}


populateForm = (e, id) => {
  e.preventDefault();
  this.setState({
    input: this.state.friendsList.find(update => update.id === id),
    isUpdating: true
  });
  // this.props.history.push('/');
};


updateFriend = () => {
  axios.put(`http://localhost:5000/friends/${this.state.input.id}`, this.state.input)
  .then(res => {
    this.setState({
      friendsList: res.data,
      isUpdating: false,
      input: {
        name: '',
        age: '',
        email: ''
      }
    });
    this.props.history.push('/')
  }) .catch(err => {
        console.log(err);
  })
}


// updateFriend = (e, ids) => {
//   e.preventDefault();
//   this.setState({input: this.state.friendsList.find(update => update.id === ids)})
// }


  render() {
    return (
      <div className="App">

        <div className="friendTab">
          <Link to='/' > Friends</Link>
          <Link  to='/friend-input' > {this.state.isUpdating ? 'Update' : 'Add'} a Friend</Link>
          </div>

      <Route path="/friend-input" render={props =>  <FriendForm  
        {...props}
        addFriend={this.addFriend}
        input={this.state.input}
        handleChanges={this.handleChanges}
        isUpdating={this.isUpdating}
        updateFriend={this.updateFriend}
       
      /> } />
       
        <Route exact path='/' render={props => <FriendsList {...props}friendsList={this.state.friendsList} 
        deleteFriend={this.deleteFriend}
        populateForm={this.populateForm}
        /> } />
        
      
      </div> // end div
    );
  }
}

export default App;
