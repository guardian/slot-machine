interface Dimensions {
  readonly width: number;
  readonly height: number;
}

enum Weight {
  None,
  Want,
  Need
}

interface Slot<T> {
  readonly id: string;
  readonly domRef: T;
}

interface Interest<T> {
  readonly weight: Weight;
  readonly fillSlot: ((slot: Slot<T>) => void)|undefined;
  readonly allowFallback: boolean;
  readonly fillFallbackSlot: ((slot: Slot<T>) => void)|undefined;
}

interface Evaluation<T> {
  readonly fillSlot: ((slot: Slot<T>) => void);
  readonly fillFallbackSlot: ((slot: Slot<T>) => void)|undefined;
}

type Evaluator<T> = (slot: string, index: number) => Interest<T>;

export {Dimensions, Weight, Evaluation, Evaluator, Interest, Slot};
