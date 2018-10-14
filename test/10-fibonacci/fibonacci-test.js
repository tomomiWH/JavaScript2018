var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const { fib } = require('../../exercises/10-fibonacci/fibonacci');
describe('testing the 10-th Fibonacci number', () => {
  it('should return the 10-th Fibonacci number', () => {
      const fibonacci = fib(10);
      console.log(fibonacci);
    expect(fibonacci).to.be.equal(55);
  });
});
