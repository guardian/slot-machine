import AppConfig from '../config';

// proxy for a future Slots API

class SlotsAPI {

    constructor() {
        
        this._slots = [
            { name: "overlay-banner-slot", height: 300, width: 900, widthToHeightRatio:3, id: "overlay-banner-slot" },
            { name: "article-top-right", height: 300, width: 300, widthToHeightRatio:1, id: "article-top-right" },
            { name: "header-slot-a", height: 300, width: 450, widthToHeightRatio:1.5, id: "header-slot-a" }
        ];

    }

    slots() {
        return this._slots;
    }

    components() {
        const endpoint = (new AppConfig()).componentsEndpoint;
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

}

export default SlotsAPI;