import React, { Component } from 'react';

class Profile extends Component {

    render() {

        const myProfile = this.props.profiles.filter((p)=>p.name === this.props.profileName)[0];

        const profiles = this.props.profiles.map((s)=><p>{s.name}</p>);

        if(myProfile === undefined){
            return <div>No profile with that name exists</div>;
        } else {
            return <div className="profile">
                <h2>{myProfile.name}</h2>
                <p>abtest: {myProfile.abtest}</p>
                <p>slot: {myProfile.slot.name}</p>
                <p>component: {myProfile.component}</p>
            </div>;
        }
    }

}

export default Profile;