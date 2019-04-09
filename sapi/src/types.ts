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
  readonly fillSlot?: ((slot: Slot<T>) => void);
  readonly allowFallback: boolean;
  readonly fillFallbackSlot?: ((slot: Slot<T>) => void);
}

interface SlotAction<T> {
  readonly fillSlot: ((slot: Slot<T>) => void);
  readonly fillFallbackSlot?: ((slot: Slot<T>) => void);
}

type Evaluator<T> = (slot: string, index: number) => Interest<T>;

export {Dimensions, Weight, SlotAction, Evaluator, Interest, Slot};
