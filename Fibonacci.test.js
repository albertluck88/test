const fibonacci = require('./Fibonacci');


test('if input 4 Output : 0, 1, 1, 2 ', () => {
  expect(fibonacci(4).toString()).toBe("0,1,1,2");
});