import capitalize from '../src/capitalize';

test('Capitalize uppercase word', () => {
    expect(capitalize('FRED')).toBe('Fred');
});
