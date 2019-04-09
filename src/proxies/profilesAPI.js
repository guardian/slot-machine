
import AppConfig from '../config';

class SaveAPI {

    constructor() {

        this._profiles = [
            {
                name: "This is mock data",
                component: "some component",
                slot: { name: "banner" },
                abtest: "This is mock data",
                flags: []
            },
            {
                name: "This is mock data again",
                component: "google ad",
                slot: { name: "topRightArticle" },
                abtest: "This is mock data",
                flags: []
            },
            {
                name: "What are we even doing",
                component: "generic banner",
                slot: { name: "onwards" },
                abtest: "This is mock data",
                flags: []
            }
        ];

    }

    getProfiles(config) {

        const endpoint = (new AppConfig()).getProfileEndpoint;
        return fetch(endpoint, {            
            method: "GET", 
            mode: "cors", 
            cache: "no-cache", 
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
        }).then(response => response.json());

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

}

export default SaveAPI;