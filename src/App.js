import React, { Component } from 'react';
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
      slotComponents: this.slotsAPI.all(),
    });

  }

  render() {

    const items = this.state.slotComponents.map((item)=><li>{item}</li>);

    return (
      <div className="App">
        <header className="App-header">
          
          <h1>Slot Profile Creator</h1>
          <p><img class="pikachu" src="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png"></img></p>
          <h2>Slots</h2>

          <ul>
            {items}
          </ul>

        </header>
      </div>
    );

  }
}

export default App;
