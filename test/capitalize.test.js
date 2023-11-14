import capitalize from '../src/capitalize';

describe('Capitalize', () => {
    test('Capitalize empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('Capitalize null', () => {
        expect(capitalize(null)).toBe('');
    });

    test('Capitalize undefined', () => {
        expect(capitalize(undefined)).toBe('');
    });

    test('Capitalize capitalized word', () => {
        expect(capitalize('Abc')).toBe('Abc');
    });

    test('Capitalize uppercase word with numbers', () => {
        expect(capitalize('A012ABC')).toBe('A012abc');
    });

    test('Capitalize uncapitalized word with numbers', () => {
        expect(capitalize('a012ABC')).toBe('A012abc');
    });

    test('Capitalize word starting with numbers', () => {
        expect(capitalize('012aBC')).toBe('012abc');
    });

    test('Capitalize word starting with a negative number', () => {
        expect(capitalize('-012aBC')).toBe('-012abc');
    });

});
