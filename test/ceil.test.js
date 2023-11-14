import ceil from '../src/ceil';

describe('Ceil', () => {
    test('1.001 to 2', () => {
        expect(ceil(1.001)).toBe(2);
    });

    test('1 to 1.0', () => {
        expect(ceil(1,1)).toBe(1.0);
    });

    test('1 to 34 decimal places', () => {
        expect(ceil(1,34)).toBe(1.0000000000000000000000000000000000);
    });

    test('1 to 35 decimal places', () => {
        expect(ceil(1,35)).toThrow(RangeError);
    });

    test('1 to precision -15', () => { // New test case
        expect(ceil(1,-15)).toBe(1000000000000000);
    });

    test('1 to precision -16', () => { // New test case
        expect(ceil(1,-16)).toThrow(RangeError);
    });

    test('1.001 to 1.1', () => {
        expect(ceil(1.001,1)).toBe(1.1);
    });

    test('1.001 to 10', () => {
        expect(ceil(1.001,-1)).toBe(10);
    });

    test('10.001 to 20', () => {
        expect(ceil(10.001,-1)).toBe(20);
    });

    test('-0.999 to 0', () => {
        expect(ceil(-0.999)).toBe(0);
    });

    test('-19.999 to -10', () => {
        expect(ceil(-19.999,-1)).toBe(-10);
    });

    test('Max safe integer - 1', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER - 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });

    test('Max safe integer', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('Max safe integer + 1', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER + 1)).toThrow(RangeError);
    });

    test('Max safe integer to precision -1', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER,-1)).toThrow(RangeError);
    });

    test('Infinity', () => { // New test case
        expect(ceil(Infinity)).toBe(Infinity);
    });

});
