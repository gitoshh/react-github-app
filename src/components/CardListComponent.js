import React, { Component } from 'react';
import { CardComponent } from './CardComponent';

export class CardListComponent extends Component {
    render() {
      return (
        <div>
          {this.props.profiles.map(profile => <CardComponent key={profile.id} {...profile} />)}
        </div>
      )
    }
  }
