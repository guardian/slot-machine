
// proxy for a future Slots API

class SlotsAPI {

    constructor() {

        this.components = [
            { name: "EpicBanner", slot: "banner" },
            { name: "BannerAd", slot: "ad" },
            { name: "RelatedStories", slot: "onwards" },
            { name: "MostViewed", slot: "onwards" },
        ];

    }

    slotTypes() {
        return [
            { name: "banner", widthToHeightRatio:"1.3", "id": "banner" },
            { name: "ad", widthToHeightRatio:"1.3", "id": "ad" },
            { name: "onwards", widthToHeightRatio:"1.3", "id": "onwards" }
        ]
    }

    allComponents() {
        return this.components;
    }

    componentsForSlotType(slotType) {
        return this.components.filter((c)=>c.slot===slotType);
    }

}

export default SlotsAPI;