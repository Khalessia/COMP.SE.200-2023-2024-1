import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    // Null
    it('should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    // Primitives
    it('should return true for boolean primitives', () => {
        expect(isEmpty(false)).toBe(true);
    });

    it('should return true for number primitives', () => {
        expect(isEmpty(0)).toBe(true);
    });

    it('should return true for bigint primitives', () => {
        expect(isEmpty(BigInt(0))).toBe(true);
    });

    it('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });
    // End of primitives that are not in other tests

    // Array with length 0
    it('should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    // Array with length 1
    it('should return false for an array with one element', () => {
        expect(isEmpty(['element'])).toBe(false);
    });

    // String with length 0
    it('should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    // String with length 1
    it('should return false for a string with one character', () => {
        expect(isEmpty('a')).toBe(false);
    });

    // Buffer with length 0
    it('should return true for an empty Buffer', () => {
        expect(isEmpty(Buffer.alloc(0))).toBe(true);
    });

    // Buffer with length 1
    it('should return false for a Buffer with one byte', () => {
        expect(isEmpty(Buffer.from('a'))).toBe(false);
    });

    // Uint8Array with length 0
    it('should return true for an empty Uint8Array', () => {
        expect(isEmpty(new Uint8Array())).toBe(true);
    });

    // Uint8Array with length 1
    it('should return false for a Uint8Array with one element', () => {
        expect(isEmpty(new Uint8Array([1]))).toBe(false);
    });

    // Custom ArrayLike Object with length 0
    it('should return true for an empty ArrayLike object', () => {
        const arrayLike = { length: 0 };
        expect(isEmpty(arrayLike)).toBe(true);
    });

    // Custom ArrayLike Object with length 1
    it('should return false for an ArrayLike object with one element', () => {
        const arrayLike = { length: 1, 0: 'element' };
        expect(isEmpty(arrayLike)).toBe(false);
    });

    // Arguments of a function called with 0 arguments
    it('should return true for arguments of a function called with 0 arguments', () => {
        const func = function () { return arguments; };
        expect(isEmpty(func())).toBe(true);
    });

    // Arguments of a function called with 1 argument
    it('should return false for arguments of a function called with 1 argument', () => {
        const func = function () { return arguments; };
        expect(isEmpty(func('arg'))).toBe(false);
    });

    // Map with size 0
    it('should return true for an empty Map', () => {
        expect(isEmpty(new Map())).toBe(true);
    });

    // Map with size 1
    it('should return false for a Map with one entry', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);
    });

    // Set with size 0
    it('should return true for an empty Set', () => {
        expect(isEmpty(new Set())).toBe(true);
    });

    // Set with size 1
    it('should return false for a Set with one element', () => {
        const set = new Set();
        set.add('element');
        expect(isEmpty(set)).toBe(false);
    });

    // Prototype with 0 keys
    it('should return true for a prototype with 0 keys', () => {
        function MyObject() { }
        let prototypeObj = MyObject.prototype;
        expect(isEmpty(prototypeObj)).toBe(true);
    });

    // Prototype with 1 key
    it('should return false for a prototype with 1 key', () => {
        function MyObject() { }
        let prototypeObj = MyObject.prototype;
        prototypeObj.key = 'value';
        expect(isEmpty(prototypeObj)).toBe(false);
    });

    // Object with 0 enumerable string keyed properties
    it('should return true for an object with 0 enumerable string keyed properties', () => {
        const obj = Object.create(null);
        Object.defineProperty(obj, 'key', { value: 'value', enumerable: false });
        expect(isEmpty(obj)).toBe(true);
    });

    // Object with 1 enumerable string keyed property
    it('should return false for an object with 1 enumerable string keyed property', () => {
        const obj = Object.create(null);
        Object.defineProperty(obj, 'key', { value: 'value', enumerable: true });
        expect(isEmpty(obj)).toBe(false);
    });
});