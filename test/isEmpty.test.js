import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    it('should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    it('should return true for boolean true', () => {
        expect(isEmpty(true)).toBe(true);
    });

    it('should return true for number 1', () => {
        expect(isEmpty(1)).toBe(true);
    });

    it('should return false for array [1, 2, 3]', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it('should return false for string "abc"', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    it('should return false for object { a: 1 }', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });
});