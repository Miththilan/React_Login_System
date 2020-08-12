import React, { Component } from 'react';

import LoginFront from './LoginFront';


class WelcomePage extends Component {
  logout(){
    this.props.history.push('/logout');
  }

  render() {
    const {username}=this.props.match.params;
    return (
      <div className="welcomePage">
        <h2>Welcome {username}</h2>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default WelcomePage;
