import React, { Component } from 'react';

class Profile extends Component {

    render() {

        const myProfile = this.props.profiles.filter((p)=>p.Name === this.props.profileName)[0];

        if(myProfile === undefined){
            return <div>No profile with that name exists</div>;
        } else {
            return <div className="profile">
                <h2>{myProfile.Name}</h2>
                <p>abtest: AB-TEST-HERE</p>
                <p>slot: {myProfile.SlotID}</p>
                <p>component: {myProfile.ComponentID}</p>
            </div>;
        }
    }

}

export default Profile;