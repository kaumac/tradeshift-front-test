const expect = require('chai').expect;
const triangle = require('../src/triangle');

describe('triangle', function() {
  it('should check for a valid parameter', function() {
    expect(triangle.isValid(['10', '10', '10'])).to.be.ok;
    expect(triangle.isValid([20, 30, 40])).to.be.ok;
    expect(triangle.isValid([20])).to.not.be.ok;
    expect(triangle.isValid([0, 10, 20])).to.not.be.ok;
    expect(triangle.isValid('10,10,10')).to.not.be.ok;
  });
  it('should return the triangle type', function() {
    expect(triangle.getType([20,20,20])).to.eql('equilateral');
    expect(triangle.getType([10,20,10])).to.eql('isoceles');
    expect(triangle.getType([10,20,30])).to.eql('scalene');
  });
});