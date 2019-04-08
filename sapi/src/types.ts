interface Dimensions {
    width: number;
    height: number;
}

enum Weight {
    None,
    Want,
    Need
}

interface Interest {
    weight: Weight;
    fillSlot: ((slot: string, domRef: any) => void) | undefined;
    allowFallback: boolean;
    fillFallbackSlot: ((slot: string, domRef: any) => void) | undefined;
}

interface Evaluation {
    fillSlot: ((slot: string, domRef: any) => void);
    fillFallbackSlot: ((slot: string, domRef: any) => void) | undefined;
}

type Evaluator = (slot: string, index: number) => Interest

export {
    Dimensions, Weight, Evaluation, Evaluator, Interest
};
