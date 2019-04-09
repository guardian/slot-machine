import {
    Evaluator, Evaluation, Interest, Weight
} from "./types"
import {
    siteSlots
} from "./data"


const main = (evaluators: Evaluator[], lookupDomRef: (slot: string) => any) => {
    siteSlots.forEach(slot => {
        const interests = evaluateForSlot(slot, evaluators);
        const evaluation = combineInterestsIntoAnEvaluation(interests);
        evaluation.fillSlot(slot, lookupDomRef(slot));
        if (evaluation.fillFallbackSlot !== undefined) {
            evaluation.fillFallbackSlot(slot, lookupDomRef(slot));
        }
    });
}

const evaluateForSlot = function(slot: string, evaluators: Evaluator[]): Interest[] {
    return [
        {
            weight: Weight.Need,
            fillSlot: undefined,
            allowFallback: true,
            fillFallbackSlot: undefined
        }
    ];
};

const combineInterestsIntoAnEvaluation = function(interests: Interest[]): Evaluation {
    return {
        fillSlot: (slot: string, domRef: any) => {},
        fillFallbackSlot: undefined
    };
};
