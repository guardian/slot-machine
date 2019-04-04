
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
            { name: "banner", height: 300, width: 900, widthToHeightRatio:3, "id": "banner" },
            { name: "articleTopRight", height: 300, width: 300, widthToHeightRatio:1, "id": "articleTopRight" },
            { name: "onwards", height: 300, width: 450, widthToHeightRatio:1.5, "id": "onwards" }
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