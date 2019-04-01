import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SlotsAPI from './proxies/slotsAPI'

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

    const items = this.state.slotComponents.map((item)=><li>{item.name} ({item.slot})</li>);

    return (
      <div className="App">

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Slot Machine
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          
          <p><img alt="pikachu with open mouth looking surprised" class="pikachu" src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"></img></p>
          <h2>Slots</h2>

          <ul>
            {items}
          </ul>

          <Button variant="contained" color="primary">
            New Profile
          </Button>

        </header>
      </div>
    );

  }
}

export default App;
