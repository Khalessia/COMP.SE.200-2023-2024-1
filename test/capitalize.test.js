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
        expect(capitalize('ABC')).toBe('Abc');
    });

    it('should capitalize lowercase word', () => {
        expect(capitalize('abc')).toBe('Abc');
    });

    it('should make no changes to numbers', () => {
        expect(capitalize('123')).toBe('123');
    });

    it('should convert to lowercase after numbers', () => {
        expect(capitalize('123ABC')).toBe('123abc');
    });

    it('should make no changes to special characters', () => {
        expect(capitalize('-')).toBe('-');
    });

    it('should convert to lowercase after special characters', () => {
        expect(capitalize('-ABC')).toBe('-abc');
    });

    it('should capitalize unicode character', () => {
        expect(capitalize('é')).toBe('É');
    });

    it('should convert to lowercase after unicode characters', () => {
        expect(capitalize('éABC')).toBe('Éabc');
    });

    it('should capitalize unicode word', () => {
        expect(capitalize('éÀbc')).toBe('Éàbc');
    });

    it('should make no changes to whitespaces', () => {
        expect(capitalize(' ')).toBe(' ');
    });

    it('should convert to lowercase after whitespaces', () => {
        expect(capitalize(' ABC')).toBe(' abc');
    });

});
