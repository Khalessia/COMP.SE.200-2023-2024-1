import countBy from '../src/countBy';

describe('CountBy', () => {
    test('should throw a TypeError for an undefined collection', () => { // New test case
        const result = countBy(undefined, item => item.category);
        expect(result).toThrow(TypeError);
    });

    test('should return an empty object for an empty collection with undefined iteratee', () => {
        const result = countBy([], undefined);
        expect(result).toEqual({});
    });

    test('should return an empty object for an empty collection', () => {
        const result = countBy([], item => item.category);
        expect(result).toEqual({});
    });

    test('should count a product by category', () => {
        const products = [
            { name: 'Product 1', category: 'Category A', price: 10 },
        ];
        const result = countBy(products, item => item.producer);
        expect(result).toEqual({'Category A': 1});
    });

    test('should count products by category', () => {
        const products = [
            { name: 'Product 1', category: 'Category A', price: 10 },
            { name: 'Product 2', category: 'Category B', price: 20 },
            { name: 'Product 3', category: 'Category A', price: 30 },
            { name: 'Product 4', category: 'Category C', price: 40 },
            { name: 'Product 5', category: 'Category B', price: 50 },
        ];
        const result = countBy(products, item => item.category);
        expect(result).toEqual({
            'Category A': 2,
            'Category B': 2,
            'Category C': 1,
        });
    });

    test('should return an empty object because of a non-existent iteratee', () => {
        const products = [
            { name: 'Product 1', category: 'Category A', price: 10 },
            { name: 'Product 2', category: 'Category B', price: 20 },
            { name: 'Product 3', category: 'Category A', price: 30 },
            { name: 'Product 4', category: 'Category C', price: 40 },
            { name: 'Product 5', category: 'Category B', price: 50 },
        ];
        const result = countBy(products, item => item.producer);
        expect(result).toEqual({});
    });

    test('should return an empty object because of blank categories', () => {
        const products = [
            { name: 'Product 1', category: '', price: 10 },
            { name: 'Product 2', category: '', price: 20 },
            { name: 'Product 3', category: '', price: 30 },
            { name: 'Product 4', category: '', price: 40 },
            { name: 'Product 5', category: '', price: 50 },
        ];
        const result = countBy(products, item => item.producer);
        expect(result).toEqual({});
    });

    test('should count products correctly by category with some blanks', () => {
        const products = [
            { name: 'Product 1', category: 'Category A', price: 10 },
            { name: 'Product 2', category: 'Category B', price: 20 },
            { name: 'Product 3', category: 'Category A', price: 30 },
            { name: 'Product 4', category: 'Category C', price: 40 },
            { name: 'Product 5', category: '', price: 50 },
        ];
        const result = countBy(products, item => item.producer);
        expect(result).toEqual({});
    });

});
