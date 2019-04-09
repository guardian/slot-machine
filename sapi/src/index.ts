import {guardianSlots} from './data';
import {Evaluator, Interest, Slot, SlotAction, Weight} from './types';

const main =
    <T>(evaluators: Array<Evaluator<T>>, slots: Array<Slot<T>>): void => {
      slots.forEach(slot => {
        const interests = evaluateForSlot(slot, evaluators);
        const evaluation = combineInterestsIntoActions<T>(interests);
        evaluation.fillSlot(slot);
        if (evaluation.fillFallbackSlot !== undefined) {
          evaluation.fillFallbackSlot(slot);
        }
      });
    };

const evaluateForSlot =
    <T>(slot: Slot<T>, evaluators: Array<Evaluator<T>>): Array<Interest<T>> => {
      return [{
        weight: Weight.Need,
        fillSlot: undefined,
        allowFallback: true,
        fillFallbackSlot: undefined
      }];
    };

const combineInterestsIntoActions =
    <T>(interests: Array<Interest<T>>): SlotAction<T> => {
      return {fillSlot: (slot: Slot<T>) => {}, fillFallbackSlot: undefined};
    };

export {main, guardianSlots, evaluateForSlot, combineInterestsIntoActions};
