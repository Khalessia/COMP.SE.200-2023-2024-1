import defaultTo from '../src/defaultTo';

describe('defaultTo', function() {
    it('should return defaultValue if value is NaN', () => {
        expect(defaultTo(NaN,1)).toEqual(1);
    });

    it('should return defaultValue if value is null', () => {
        expect(defaultTo(null,1)).toEqual(1);
    });

    it('should return defaultValue if value is undefined', () => {
        expect(defaultTo(undefined,1)).toEqual(1);
    });

    it('should return value as number', () => {
        expect(defaultTo(2,1)).toEqual(2);
    });

    it('should return value as string', () => {
        expect(defaultTo('123',1)).toEqual('123');
    });

    it('should return value as boolean', () => {
        expect(defaultTo(false,1)).toEqual(false);
    });

    it('should not do a type conversion for booleans', () => {
        expect(defaultTo(false,1)).not.toEqual(1);
    });
});
