export type Denomination = {
    name: string;
    value: number;
};

export const EURO_DENOMINATIONS: Denomination[] = [
    { name: '€500', value: 500 },
    { name: '€200', value: 200 },
    { name: '€100', value: 100 },
    { name: '€50', value: 50 },
    { name: '€20', value: 20 },
    { name: '€10', value: 10 },
    { name: '€5', value: 5 },
    { name: '€2', value: 2 },
    { name: '€1', value: 1 },
    { name: '€0.50', value: 0.50 },
    { name: '€0.20', value: 0.20 },
    { name: '€0.10', value: 0.10 },
    { name: '€0.05', value: 0.05 },
    { name: '€0.02', value: 0.02 },
    { name: '€0.01', value: 0.01 }
];