import {evaluateForSlot, main} from '../src/index';
import {Evaluator, Interest, Slot, SlotAction, Weight} from '../src/types';

const testSlot: Slot<string> = {
  id: 'test-slot',
  domRef: 'test-ref'
};

const testWantEvaluator: Evaluator<string> = (slot: string, index: number) =>
    ({weight: Weight.Want, fillSlot: () => 'want', allowFallback: false});

const testNeedEvaluator: Evaluator<string> = (slot: string, index: number) =>
    ({weight: Weight.Need, fillSlot: () => 'need', allowFallback: false});

const testNoneEvaluator: Evaluator<string> = (slot: string, index: number) =>
    ({weight: Weight.None, allowFallback: false});

describe('evaluateForSlot', () => {
  beforeEach(() => {});
  afterEach(() => {});

  it('should return an empty array if no-one wants or needs it', () => {
    expect(evaluateForSlot(testSlot, [
      testNoneEvaluator, testNoneEvaluator
    ])).toEqual([]);
  });

  it('should return all the interests that want or need the slot', () => {
    expect(evaluateForSlot(testSlot, [
      testWantEvaluator, testNeedEvaluator, testNoneEvaluator
    ])).toBe(2);
  });

  it('should return the correct interests', () => {
    expect(evaluateForSlot(
               testSlot,
               [testWantEvaluator, testNeedEvaluator, testNoneEvaluator]))
        .toEqual([
          testWantEvaluator('testSlot', 0),
          testNeedEvaluator('testSlot', 0),
        ]);
  });
});

describe('combineInterestsIntoActions', () => {
  beforeEach(() => {});
  afterEach(() => {});
  it('should fail here', () => {
    expect(true).toBe(false);
  });

  it('should award the slot to the evaluator that needs it', () => {});

  it('should be deeply unhappy if more than one evaluator needs it', () => {});

  it('should award the slot to the evaluator that wants it, if none need it',
     () => {});

  it('should award it to no-one, if no-one wants or needs it', () => {});

  it('should award it to no-one, if no-one wants or needs it', () => {});
});