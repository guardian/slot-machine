import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SlotsAPI from "./proxies/slotsAPI";
import ProfilesAPI from './proxies/profilesAPI';
import Wizard from "./screens/wizard";
import Landing from "./screens/landing";
import Preview from "./screens/preview";
import Profile from "./screens/profile";
import Profiles from "./screens/profiles";

class App extends Component {

    constructor() {

        super();

        this.slotsAPI = new SlotsAPI();
        this.profilesAPI = new ProfilesAPI();

        this.state = {
            slots: [],
            components: [],
            profiles: []
        };

    }

    componentDidMount() {

        this.setState({
            components: this.slotsAPI.components(),
            slots: this.slotsAPI.slots(),
            profiles: this.profilesAPI.getProfiles()
        });

    }

    render() {

        const landing = () => <Landing />;

        const wizard = () => (
            <Wizard
                slots={this.state.slots}
                components={this.state.components}
                save={ config => this.profilesAPI.addProfile(config) }
            />
        );

        const preview = () => <Preview slots={this.state.slots} />;
        
        const profiles = () => <Profiles profiles={this.state.profiles} />

        const profile = (id) => <Profile id={id} />

        return (
            <div className="App">
                <Router>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                <a href="/" className="toolbar-link">Slot Machine</a>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="app-content">
                        <Switch>
                            <Route path="/" exact={true} component={landing} />
                            <Route path="/new" component={wizard} />
                            <Route path="/preview" component={preview} />
                            <Route path="/profiles/:id" component={profile} />
                            <Route path="/profiles" component={profiles} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
    
}

export default App;
