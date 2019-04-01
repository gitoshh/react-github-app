import React, { Component } from 'react';
import axios from 'axios';

export class FormComponent extends Component {

    // usernameInput = React.createRef();
    state = { username: ''}

    handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
      this.props.onSubmit(response.data);
      this.setState({username: ''});
      
    };
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Github username'
            value={this.state.username}
            onChange = {event => this.setState({username: event.target.value})}
            /*ref={this.usernameInput} */ 
            required
          />
          <button>Add cart</button>
        </form>
      );
    }
  }