import React, { Component } from 'react';
import { FormComponent } from './FormComponent';
import { CardListComponent}  from './CardListComponent';


export class GameComponent extends Component
{ 
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   }
  // }

  state = {
    profiles: []
  }
  addNewProfile = (profileData) =>{
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <FormComponent onSubmit={this.addNewProfile}/>
        <CardListComponent profiles={this.state.profiles}/>
      </div>
    
    )
  }
}
