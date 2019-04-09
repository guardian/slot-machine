import {guardianSlots} from './data';
import {Evaluation, Evaluator, Interest, Slot, Weight} from './types';


const main =
    <T>(evaluators: Array<Evaluator<T>>, slots: Array<Slot<T>>): void => {
      slots.forEach(slot => {
        const interests = evaluateForSlot(slot, evaluators);
        const evaluation = combineInterestsIntoAnEvaluation<T>(interests);
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

const combineInterestsIntoAnEvaluation =
    <T>(interests: Array<Interest<T>>): Evaluation<T> => {
      return {fillSlot: (slot: Slot<T>) => {}, fillFallbackSlot: undefined};
    };

export {main, guardianSlots};
