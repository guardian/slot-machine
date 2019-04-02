import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SlotsAPI from './proxies/slotsAPI';
import Wizard from './components/wizard';

class App extends Component {

  constructor() {

    super();

    this.slotsAPI = new SlotsAPI();

    this.state = {
      slotComponents: [],
    };

  }

  componentDidMount() {

    // contact 3rd party services, etc

    this.setState({
      slotComponents: this.slotsAPI.allComponents()
    });

  }

  render() {

    return (
      <div className="App">

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Slot Machine
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="app-content">
          <Wizard />
        </div>
      </div>
    );

  }
}

export default App;
