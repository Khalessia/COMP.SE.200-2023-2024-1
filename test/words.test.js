import words from '../src/words.js';

describe('words', () => {
    it('should split a comma separated string into an array of words', () => {
        const result = words('wheat, salt, vinegar');
        expect(result).toEqual(['wheat', 'salt', 'vinegar']);
    });

    it('should split a custom separated string into an array of words', () => {
        const result = words('wheat, salt, & vinegar');
        expect(result).toEqual(['wheat', 'salt', 'vinegar']);
    });

    it('should split a string into an array of words based on a pattern', () => {
        const result = words('wheat, salt, & vinegar', /[^, ]+/g);
        expect(result).toEqual(['wheat', 'salt', '&', 'vinegar']);
    });

    it('should match a word based on a custom keyword in the pattern', () => {
        const result = words('wheat, salt, & vinegar', /wheat/g);
        expect(result).toEqual(['wheat']);
    });

    it('should not match a word based on a different keyword in the pattern', () => {
        const result = words('wheat', /salt/g);
        expect(result).toEqual(['']);
    });

    it('should throw an exception when passed a null', () => {
        expect(() => words(null)).toThrow();
    });

    it('should throw an exception when passed a null with pattern provided', () => {
        expect(() => words(null, /[^, ]+/g)).toThrow();
    });

    it('should return an empty array when passed an empty string', () => {
        const result = words('');
        expect(result).toEqual([]);
    });

    it('should return an empty array when passed an empty string with pattern provided', () => {
        const result = words('', /[^, ]+/g);
        expect(result).toEqual([]);
    });

    it('should handle unicode characters', () => {
        const result = words('whéat, sält, & vïnëgär');
        expect(result).toEqual(['whéat', 'sält', 'vïnëgär']);
    });
});