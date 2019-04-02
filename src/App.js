import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SlotsAPI from './proxies/slotsAPI';
import Wizard from './screens/wizard';
import Landing from './screens/landing';

class App extends Component {

  constructor() {

    super();

    this.slotsAPI = new SlotsAPI();

    this.state = {
      slots: [],
      components: []
    };

  }

  componentDidMount() {

    // contact 3rd party services, etc

    this.setState({
      components: this.slotsAPI.components(),
      slots: this.slotsAPI.slots()
    });

  }

  render() {

    const finishedProfileSetup = (config) => {
      console.log("Wizard finished with profile configuration");
      console.log(config);
    }

    const landing = () => (
      <Landing />
    )

    const wizard = () => (<Wizard 
      slots={this.state.slots}
      components={this.state.components}
      onFinished={(config)=>finishedProfileSetup(config)}
      />
    );

    return (
      <div className="App">
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Slot Machine
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="app-content">
            <Route path="/" exact={true} component={landing}/>
            <Route path="/new" component={wizard}/>
          </div>
        </Router>
      </div>
    );

  }
}

export default App;
