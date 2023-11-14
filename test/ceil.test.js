import ceil from '../src/ceil';

describe('Ceil', () => {
    test('should ceil 1.001 to 2', () => {
        expect(ceil(1.001)).toBe(2);
    });

    test('should ceil 1 to 1.0', () => {
        expect(ceil(1,1)).toBe(1.0);
    });

    test('should ceil to 34 precision', () => {
        expect(ceil(1,34)).toBe(1.0000000000000000000000000000000000);
    });

    test('should throw RangeError when precision is more than 34', () => {
        expect(ceil(1,35)).toThrow(RangeError);
    });

    test('should ceil to -15 precision', () => { // New test case
        expect(ceil(1,-15)).toBe(1000000000000000);
    });

    test('should throw RangeError when precision is less than -15', () => { // New test case
        expect(ceil(1,-16)).toThrow(RangeError);
    });

    test('should ceil 1.001 to 1.1', () => {
        expect(ceil(1.001,1)).toBe(1.1);
    });

    test('should ceil 1.001 to 10', () => {
        expect(ceil(1.001,-1)).toBe(10);
    });

    // Redundant test case (or is it?)
    /*
    test('should ceil integers with multiple place values according to negative precision', () => {
        expect(ceil(10.001,-1)).toBe(20);
    });*/

    test('should ceil 100.001 to 110', () => { // New test case
        expect(ceil(100.001,-1)).toBe(110);
    });

    test('should ceil -0.999 to 0', () => {
        expect(ceil(-0.999)).toBe(0);
    });
    
    // Redundant test case (or is it?)
    /*
    test('should ceil a negative number with multiple place values according to negative precision', () => {
        expect(ceil(-19.999,-1)).toBe(-10);
    });
    */

    test('should ceil -19.999 to -19.9', () => { // New test case
        expect(ceil(-19.999,1)).toBe(-19.9);
    });

    test('should ceil -109.999 to -100', () => { // New test case
        expect(ceil(-109.999,-1)).toBe(-100);
    });

    // Redundant test case
    /*
    test('should return Max safe integer - 1', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER - 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });*/

    test('should return max safe integer', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('should throw RangeError from unsafe integer', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER + 1)).toThrow(RangeError);
    });

    // Redundant test case
    /*test('Max safe integer to precision -1', () => {
        expect(ceil(Number.MAX_SAFE_INTEGER,-1)).toThrow(RangeError);
    });*/

    test('should return infinity', () => { // New test case
        expect(ceil(Infinity)).toBe(Infinity);
    });

});
