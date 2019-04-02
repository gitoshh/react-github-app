import React, { Component } from 'react';
import { CardComponent } from './CardComponent';

export class CardListComponent extends Component {
    render() {
      return (
        <div>
            <div className='header-list'>Github Users</div>
        <hr className='line'/>
          {this.props.profiles.map(profile => <CardComponent key={profile.id} {...profile} />)}
        </div>
      )
    }
  }
