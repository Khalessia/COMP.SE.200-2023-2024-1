import words from '../src/words.js';

describe('words', () => {
    it('should split a string into an array of words', () => {
        const result = words('wheat, salt, & vinegar');
        expect(result).toEqual(['wheat', 'salt', 'vinegar']);
    });

    it('should split a string into an array of words based on a pattern', () => {
        const result = words('wheat, salt, & vinegar', /[^, ]+/g);
        expect(result).toEqual(['wheat', 'salt', '&', 'vinegar']);
    });

    it('should return an empty array when passed an empty string', () => {
        const result = words('');
        expect(result).toEqual([]);
    });

    it('should handle unicode characters', () => {
        const result = words('whéat, sält, & vïnëgär');
        expect(result).toEqual(['whéat', 'sält', 'vïnëgär']);
    });
});