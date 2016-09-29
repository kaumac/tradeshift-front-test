module.exports = {
  getType : function(triangleSides) {
    if(this.isValid(triangleSides)) {
      const differentSidesMap = {
        1: 'equilateral',
        2: 'isoceles',
        3: 'scalene'
      }

      /*
        ES6 Provides us with Set's, which has a size method.
        Using this allows us to check the count os different values in a collection without resorting to "for loops"
      */
      const differentSidesSize = (new Set(triangleSides)).size

      // return the type of the triangle based on the count of different sides
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
    // Using filter instead of a "for loop" to check if any of the values are not a number
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