import reduce from '../src/reduce.js';

describe('reduce', () => {
    it('should reduce an array of numbers to their sum', () => {
        const result = reduce([1.0, 2.0, 3.1], (sum, n) => sum + n, 0);
        expect(result).toBe(6.1);
    });

    it('should reduce an array with one number element to its sum that is its value', () => {
        const result = reduce([1.0], (sum, n) => sum + n, 0);
        expect(result).toBe(1.0);
    });

    it('should reduce an array of numbers to their sum plus initial accumulator', () => {
        const result = reduce([1.0, 2.0, 3.1], (sum, n) => sum + n, 4.0);
        expect(result).toBe(10.1);
    });

    it('should reduce an array with one number element to its sum that is its value plus initial accumulator', () => {
        const result = reduce([1.0], (sum, n) => sum + n, 1.1);
        expect(result).toBe(2.1);
    });

    it('should return the accumulator when the input collection is empty', () => {
        const result = reduce([], (sum, n) => sum + n, 1.1);
        expect(result).toBe(1.1);
    });

    it('should throw an exception if iteratee is null', () => {
        expect(() => reduce([1.0, 2.0, 3.1], null)).toThrow();
    });

    it('should throw an exception if accumulator is not a number', () => {
        expect(() => reduce([1.0, 2.0, 3.1], (sum, n) => sum + n, 'abc')).toThrow();
    });

    it('should throw an exception if an element in a collection of numbers is string', () => {
        expect(() => reduce([1.0, "abc", 3.1], (sum, n) => sum + n, 0)).toThrow();
    });

    it('should throw an exception if an element in a collection of numbers is NaN', () => {
        expect(() => reduce([1.0, NaN, 3.1], (sum, n) => sum + n, 0)).toThrow();
    });

    it('should throw an exception if an element in a collection of numbers is null', () => {
        expect(() => reduce([1.0, null, 3.1], (sum, n) => sum + n, 0)).toThrow();
    });

    it('should throw an exception if an element in a collection of numbers is undefined', () => {
        expect(() => reduce([1.0, undefined, 3.1], (sum, n) => sum + n, 0)).toThrow();
    });

    it('should reduce an object to an array of keys grouped by their values', () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {});
        //expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
        // The order of the keys is not guaranteed
        expect(result).toEqual(
            { '1': ['a', 'c'], '2': ['b'] } ||
            { '1': ['c', 'a'], '2': ['b'] } ||
            { '2': ['b'], '1': ['a', 'c'] } ||
            { '2': ['b'], '1': ['c', 'a'] }
        );
    });

    it('should use the first element of the collection as the initial value if no accumulator is provided', () => {
        const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
        expect(result).toBe(10);
    });
});