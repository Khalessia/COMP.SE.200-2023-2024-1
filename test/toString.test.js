import toString from '../src/toString.js';

describe('toString', () => {
    it('should convert null to an empty string', () => {
        const result = toString(null);
        expect(result).toBe('');
    });

    it('should convert undefined to an empty string', () => {
        const result = toString(undefined);
        expect(result).toBe('');
    });

    it('should convert a number to a string', () => {
        const result = toString(1);
        expect(result).toBe('1');
    });

    it('should convert a float number to a string', () => {
        const result = toString(1.0);
        expect(result).toBe('1.0');
    });

    it('should preserve the sign of -0', () => {
        const result = toString(-0);
        expect(result).toBe('-0');
    });

    it('should return the same string', () => {
        const result = toString("string");
        expect(result).toBe("string");
    });

    it('should convert an array to a string', () => {
        const result = toString([1, 2, 3]);
        expect(result).toBe('1,2,3');
    });

    it('should convert an array with null to a string', () => {
        const result = toString([1, null, 3]);
        expect(result).toBe('1,,3');
    });

    it('should convert an array with numbers and a string to a string', () => {
        const result = toString([1, "abc", 3]);
        expect(result).toBe('1,abc,3');
    });

    it('should convert a symbol to a string', () => {
        const symbol = Symbol('abc');
        const result = toString(symbol);
        expect(result).toBe(symbol.toString());
    });


});