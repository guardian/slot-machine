
import AppConfig from '../config';

class SaveAPI {

    getProfiles(config) {

        const endpoint = (new AppConfig()).profileEndpoint;
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
        });

    }

}

export default SaveAPI;