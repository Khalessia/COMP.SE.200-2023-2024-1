import filter from '../src/filter';

describe('Filter', () => {
    test('should throw a TypeError for an undefined array', () => { // New test case
        const result = filter(undefined, item => item > 0);
        expect(result).toThrow(TypeError);
    });

    test('should return an empty array when predicate undefined (length 0)', () => {
        const emptyArray = [];
        const result = filter([], undefined);
        expect(result).toEqual([]);
    });

    test('should return an empty array when predicate defined (length 0)', () => {
        const result = filter([], item => item > 0);
        expect(result).toEqual([]);
    });

    test('should return an empty array when predicate undefined (length 1)', () => {
        const result = filter([1], undefined);
        expect(result).toEqual([]);
    });

    test('should return an empty array (length 1)', () => {
        const result = filter([0], item => item > 0);
        expect(result).toEqual([]);
    });

    test('should return an array with one element (length 1)', () => {
        const result = filter([1], item => item > 0);
        expect(result).toEqual([1]);
    });

    test('should return an empty array (length 2)', () => {
        const result = filter([1, 2], item => item < 1);
        expect(result).toEqual([]);
    });

    test('should return an array with one element (length 2)', () => {
        const result = filter([0, 1], item => item > 0);
        expect(result).toEqual([1]);
    });

    test('should return an array with two elements (length 2)', () => {
        const result = filter([1, 2], item => item > 0);
        expect(result).toEqual([1,2]);
    });
});
