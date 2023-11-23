import reduce from '../src/reduce.js';

describe('reduce', () => {
    it('should reduce an array of numbers to their sum', () => {
        const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
        expect(result).toBe(10);
    });

    it('should reduce an object to an array of keys grouped by their values', () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {});
        expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
    });

    it('should use the first element of the collection as the initial value if no accumulator is provided', () => {
        const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
        expect(result).toBe(10);
    });
});