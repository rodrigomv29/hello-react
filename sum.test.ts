let Sum = require('./sum');

test(
    "function adds two numbers", () => {
        expect(Sum(1,2)).toBe(3);
    }
)
