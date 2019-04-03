
import AppConfig from '../config';

class SaveAPI {

    addProfile(config) {

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