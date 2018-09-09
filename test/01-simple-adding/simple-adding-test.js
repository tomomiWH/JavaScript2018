var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const {
  simpleAdding
} = require('../../exercises/01-simple-adding/simple-adding');
describe('simple adding', () => {
  it('should simply add all the values of the number being passed in', () => {
    const sum = simpleAdding(4);
    expect(sum).to.be.equal(10);
  });
});
