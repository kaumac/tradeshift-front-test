module.exports = {
  getType : function(triangleSides) {
    if(this.isValid(triangleSides)) {
      const differentSidesMap = {
        1: 'equilateral',
        2: 'isoceles',
        3: 'scalene'
      }

      const differentSidesSize = (new Set(triangleSides)).size

      return differentSidesMap[differentSidesSize];
    }
  },
  isValid: function(triangleSides) {
    // triangleSides parameter must be an array
    if(!triangleSides instanceof Array) {
      return false
    }
    // triangleSides must have 3 sides
    if(triangleSides.length !== 3) {
      return false
    }
    // All sides must be numbers
    if(triangleSides.filter(side => typeof parseFloat(side) !== 'number').length > 0) {
      return false
    }
    // All sides must be bigger than 0
    if(triangleSides.filter(side => parseFloat(side) <= 0).length > 0) {
      return false
    }

    return true;
  }
}