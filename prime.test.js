const  firstNPrime = require('./prime');


test('input 4 output 2,3,5,7', () => {
  expect(firstNPrime(4).toString()).toBe("2,3,5,7");
});