import capitalize from '../src/capitalize';

describe('Capitalize', () => {
    it('should return empty string from empty string', () => {
        expect(capitalize('')).toBe('');
    });

    it('should return empty string from null', () => {
        expect(capitalize(null)).toBe('');
    });

    it('should return empty string from undefined', () => {
        expect(capitalize(undefined)).toBe('');
    });

    it('should make no changes to capitalized word', () => {
        expect(capitalize('Abc')).toBe('Abc');
    });

    it('should capitalize uppercase word', () => {
        expect(capitalize('A012ABC')).toBe('A012abc');
    });

    it('should capitalize uncapitalized word', () => {
        expect(capitalize('a012ABC')).toBe('A012abc');
    });

    it('should capitalize word starting with numbers', () => {
        expect(capitalize('012aBC')).toBe('012abc');
    });

    it('should capitalize word starting starting with a hyphen', () => {
        expect(capitalize('-012aBC')).toBe('-012abc');
    });

});
