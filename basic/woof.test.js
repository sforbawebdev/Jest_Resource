const woof = require('./woof');
test('our first test', function() {
    const result = woof("the first test");
    //ToBe is a more strict comparison
    expect(result).toBe('glorp');
    //ToEqual is meant for objects and arrays
    expect(result).toEqual("the first test WOOF");
    //Regex
    expect(result).toMatch(/\dwoof/i);
    //checks if array contains
    expect(['a', 'b', 'c']).toContain('x');
});
