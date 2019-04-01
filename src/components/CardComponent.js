import React, { Component } from 'react';

export class CardComponent extends Component {
    render() {
      const profile = this.props;
      return (
        <div className='github-profile'>
          <img src={profile.avatar_url} alt='something' width='100px' height='100px'/>
          <div className='info' style={{display:'inline-block', marginLeft:'10px'}}>
            <div className='name' style={{fontSize:'125%'}}>{profile.name}</div>
            <div className='company'>{profile.company}</div>
          </div>
        </div>
      )
    }
  }
