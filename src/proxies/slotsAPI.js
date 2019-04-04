
// proxy for a future Slots API

class SlotsAPI {

    constructor() {

        this._components = [
            { name: "EpicBanner", slot: "banner" },
            { name: "AskForMoneyBanner", slot: "banner" },
            { name: "RelatedStories", slot: "onwards" },
            { name: "MostRead", slot: "onwards" },
            { name: "LongestRead", slot: "onwards" },
            { name: "Outbrain", slot: "articleTopRight" },
            { name: "GoogleAd", slot: "articleTopRight" }
        ];

        this._slots = [
            { name: "banner", widthToHeightRatio:3, "id": "banner" },
            { name: "articleTopRight", widthToHeightRatio:1, "id": "articleTopRight" },
            { name: "onwards", widthToHeightRatio:1.5, "id": "onwards" }
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