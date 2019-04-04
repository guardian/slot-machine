
import AppConfig from '../config';

class SaveAPI {

    constructor() {

        this._profiles = [
            {
                name: "This is mock data",
                slot: { name: "banner" },
                abtest: "This is mock data",
                flags: []
            }
        ];

    }

    addProfile(config) {

        console.log("Saving data");
        console.log(config);

        const endpoint = (new AppConfig()).profileEndpoint;

        return fetch(endpoint, {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(config), 
        })
        .then(response => response.json());

    }

    getProfiles() {

        return this._profiles;

    }

}

export default SaveAPI;