var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const { isPalindrome } = require('../../exercises/01-palindrome/palindrome');

describe('testing a word if it is a palidrome', () => {
  it('should return true or false if the word is an deed a palidrome', () => {
    const eyeResult = isPalindrome('eye');
    const notAPalindrome = isPalindrome('not a palindrome');
    const nope = isPalindrome('nope');

    expect(eyeResult).to.be.equal(true);
    expect(notAPalindrome).to.be.equal(false);
    expect(nope).be.equal(false);
  });
});
