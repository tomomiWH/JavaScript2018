var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const { isPalindrome } = require('../../exercises/01_palindrome/palindrome');

describe('testing a word if it is a palidrome', () => {
  it('should return true or false if the word is an deed a palidrome', () => {
    const result = isPalindrome('eye');
    expect(result).be.equal(true);
  });
});
