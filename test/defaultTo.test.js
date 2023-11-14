import defaultTo from '../src/defaultTo';

describe('defaultTo', function() {
    test('should return defaultValue if value is NaN', () => {
        expect(defaultTo(NaN,1)).toEqual(1);
    });

    test('should return defaultValue if value is null', () => {
        expect(defaultTo(null,1)).toEqual(1);
    });

    test('should return defaultValue if value is undefined', () => {
        expect(defaultTo(undefined,1)).toEqual(1);
    });

    test('should return value as number', () => {
        expect(defaultTo(2,1)).toEqual(2);
    });

    test('should return value as string', () => {
        expect(defaultTo('123',1)).toEqual('123');
    });

    test('should return value as boolean', () => {
        expect(defaultTo(false,1)).toEqual(false);
    });

    test('should return boolean value as not a number', () => { // New test case (Redundant?)
        expect(defaultTo(true,0)).not.toEqual(Number(true));
    });
});
