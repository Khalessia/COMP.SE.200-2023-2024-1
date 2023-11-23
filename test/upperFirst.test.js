import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
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

    it('should return an empty string when passed an empty string', () => {
        const result = upperFirst('');
        expect(result).toBe('');
    });
});