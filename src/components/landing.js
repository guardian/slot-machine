import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {

        return (
            <div>
                <h1>Welcome</h1>
                <Link to="/new">create new profile</Link>
            </div>
        );
  
    }

  }
  
  export default Landing;
  