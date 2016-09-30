const expect = require('chai').expect;
const triangle = require('../src/triangle');

describe('triangle', function() {
  it('should check for a valid parameter format', function() {
    expect(triangle.hasValidFormat(['10', '10', '10'])).to.be.ok; // Numbers provided as strings will be converted
    expect(triangle.hasValidFormat([20, 30, 40])).to.be.ok;
    expect(triangle.hasValidFormat([20])).to.not.be.ok;
    expect(triangle.hasValidFormat('10,10,10')).to.not.be.ok;
  });
  it('should check for valid parameter values', function() {
    expect(triangle.hasValidSides(['11', '11', '11'])).to.be.ok;
    expect(triangle.hasValidSides([18, 8, 18])).to.be.ok;
    expect(triangle.hasValidSides([10, 18, 12])).to.be.ok;
    expect(triangle.hasValidSides([0, 13, 13])).to.not.be.ok;
    expect(triangle.hasValidSides([5, 8, 3])).to.not.be.ok;
  });
  it('should return the triangle type', function() {
    expect(triangle.getType([20,20,20])).to.eql('equilateral');
    expect(triangle.getType([20,10,20])).to.eql('isoceles');
    expect(triangle.getType([13,16,11])).to.eql('scalene');
  });
});