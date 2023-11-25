import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
    it('should return an empty string when passed an empty string', () => {
        const result = upperFirst('');
        expect(result).toBe('');
    });

    it('should return an empty string when passed null', () => {
        const result = upperFirst(null);
        expect(result).toBe('');
    });

    it('should return an empty string when passed undefined', () => {
        const result = upperFirst(undefined);
        expect(result).toBe('');
    });

    it('should convert the first character of a string to upper case', () => {
        const result = upperFirst('fred');
        expect(result).toBe('Fred');
    });

    it('should not change the case of the rest of the string', () => {
        const result = upperFirst('fRED');
        expect(result).toBe('FRED');
    });

    it('should handle single character strings', () => {
        const result = upperFirst('f');
        expect(result).toBe('F');
    });

    it('should not change if first character is a number', () => {
        const result = upperFirst('123aBC');
        expect(result).toBe('123aBC');
    });

    it('should not change if first character is a symbol', () => {
        const result = upperFirst('#aBC');
        expect(result).toBe('#aBC');
    });

    it('should work with unicode characters', () => {
        const result = upperFirst('éä');
        expect(result).toBe('Éä');
    });

});