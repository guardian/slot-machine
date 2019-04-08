import {siteSlots} from './data';
import {Evaluation, Evaluator, Interest, Weight} from './types';


const main =
    <T>(evaluators: Array<Evaluator<T>>, lookupDomRef: (slot: string) => T):
        void => {
          siteSlots.forEach(slot => {
            const interests = evaluateForSlot(slot, evaluators);
            const evaluation = combineInterestsIntoAnEvaluation<T>(interests);
            evaluation.fillSlot(slot, lookupDomRef(slot));
            if (evaluation.fillFallbackSlot !== undefined) {
              evaluation.fillFallbackSlot(slot, lookupDomRef(slot));
            }
          });
        };

const evaluateForSlot =
    <T>(slot: string, evaluators: Array<Evaluator<T>>): Array<Interest<T>> => {
      return [{
        weight: Weight.Need,
        fillSlot: undefined,
        allowFallback: true,
        fillFallbackSlot: undefined
      }];
    };

const combineInterestsIntoAnEvaluation =
    <T>(interests: Array<Interest<T>>): Evaluation<T> => {
      return {
        fillSlot: (slot: string, domRef: T) => {},
        fillFallbackSlot: undefined
      };
    };
