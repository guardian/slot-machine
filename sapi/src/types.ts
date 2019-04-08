interface Dimensions {
  width: number;
  height: number;
}

enum Weight {
  None,
  Want,
  Need
}

interface Interest<T> {
  weight: Weight;
  fillSlot: ((slot: string, domRef: T) => void)|undefined;
  allowFallback: boolean;
  fillFallbackSlot: ((slot: string, domRef: T) => void)|undefined;
}

interface Evaluation<T> {
  fillSlot: ((slot: string, domRef: T) => void);
  fillFallbackSlot: ((slot: string, domRef: T) => void)|undefined;
}

type Evaluator<T> = (slot: string, index: number) => Interest<T>;

export {Dimensions, Weight, Evaluation, Evaluator, Interest};
