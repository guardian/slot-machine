
// proxy for a future Slots API

class SlotsAPI {

    constructor() {

        this._components = [
            { name: "EpicBanner", slot: "banner", id: "EpicBanner" },
            { name: "AskForMoneyBanner", slot: "banner", id:"AskForMoneyBanner" },
            { name: "RelatedStories", slot: "onwards", id:"RelatedStories" },
            { name: "MostRead", slot: "onwards", id:"MostRead" },
            { name: "LongestRead", slot: "onwards", id:"LongestRead" },
            { name: "Outbrain", slot: "articleTopRight", id:"Outbrain" },
            { name: "GoogleAd", slot: "articleTopRight", id:"GoogleAd" }
        ];

        this._slots = [
            { name: "banner", height: 300, width: 900, widthToHeightRatio:3, id: "banner" },
            { name: "articleTopRight", height: 300, width: 300, widthToHeightRatio:1, id: "articleTopRight" },
            { name: "onwards", height: 300, width: 450, widthToHeightRatio:1.5, id: "onwards" }
        ];

    }

    slots() {
        return this._slots;
    }

    components() {
        return this._components;
    }

    componentsForSlotType(slotType) {
        return this.components.filter((c)=>c.slot===slotType);
    }

}

export default SlotsAPI;