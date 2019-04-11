
// proxy for a future Slots API

class SlotsAPI {

    constructor() {

        this._components = [
            { name: "EpicBanner", slot: "overlay-banner-slot", id: "EpicBanner" },
            { name: "AskForMoneyBanner", slot: "overlay-banner-slot", id:"AskForMoneyBanner" },
            { name: "RelatedStories", slot: "onwards", id:"RelatedStories" },
            { name: "JoinTheGuardian", slot: "header-slot-a", id:"JoinTheGuardian" },
            { name: "SomethingElse", slot: "header-slot-a", id:"SomethingElse" },
            { name: "Outbrain", slot: "article-top-right", id:"Outbrain" },
            { name: "GoogleAd", slot: "article-top-right", id:"GoogleAd" }
        ];

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
        return this._components;
    }

    componentsForSlotType(slotType) {
        return this.components.filter((c)=>c.slot===slotType);
    }

}

export default SlotsAPI;