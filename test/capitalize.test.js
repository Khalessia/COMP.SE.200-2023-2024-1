import capitalize from '../src/capitalize';

describe('Capitalize', () => {
    test('should return empty string from empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('should return empty string from null', () => {
        expect(capitalize(null)).toBe('');
    });

    test('should return empty string from undefined', () => {
        expect(capitalize(undefined)).toBe('');
    });

    test('should make no changes to capitalized word', () => {
        expect(capitalize('Abc')).toBe('Abc');
    });

    test('should capitalize uppercase word', () => {
        expect(capitalize('A012ABC')).toBe('A012abc');
    });

    test('should capitalize uncapitalized word', () => {
        expect(capitalize('a012ABC')).toBe('A012abc');
    });

    test('should capitalize word starting with numbers', () => {
        expect(capitalize('012aBC')).toBe('012abc');
    });

    test('should capitalize word starting starting with a hyphen', () => {
        expect(capitalize('-012aBC')).toBe('-012abc');
    });

});
