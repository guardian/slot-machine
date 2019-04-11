import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {

    render() {

        const myProfile = this.props.profiles.filter((p)=>p.Name === this.props.profileName)[0];

        if(myProfile === undefined){
            return <div>No profile with that name exists</div>;
        } else {
            return <Paper className="profile">
                <h3>{myProfile.Name}</h3>
                <p>abtest: {myProfile.Conditions.ABTest}</p>
                <p>slot: {myProfile.SlotID}</p>
                <p>component: {myProfile.ComponentID}</p>
            </Paper>;
        }
    }

}

export default Profile;