import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {

        return (
            <div className="landing">
                <h1>Welcome</h1>
                <p><Link to="/new">create new profile</Link></p>
                <p><Link to="/profiles">see existing profiles</Link></p>
                <p><Link to="/preview">preview components</Link></p>
            </div>
        );
  
    }

  }
  
  export default Landing;
