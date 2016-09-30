module.exports = {
  getType : function(triangleSides) {
    if(this.hasValidFormat(triangleSides) && this.hasValidSides(triangleSides)) {
      const differentSidesMap = {
        1: 'equilateral',
        2: 'isoceles',
        3: 'scalene'
      }
      /* ES6 Provides us with Set's, which has a size method.
         Using this allows us to check the count os different values in a collection without resorting to "for loops" */
      const differentSidesSize = (new Set(triangleSides)).size
      // return the type of the triangle based on the count of different sides
      return differentSidesMap[differentSidesSize]
    } else {
      return 'invalid triangle';
    }
  },
  hasValidFormat: function(triangleSides) {
    // triangleSides parameter must be an array
    if(triangleSides instanceof Array == false) {
      console.error('triangle sides must be an array with 3 items')
      return false
    }
    // triangleSides must have 3 sides
    if(triangleSides.length !== 3) {
      console.error('a triangle must have 3 sides')
      return false
    }
    // All sides must be numbers, Using filter instead of a "for loop" to check if any of the values are not a number
    if(triangleSides.filter(side => typeof parseFloat(side) !== 'number').length > 0) {
      console.error('all triangle sides must be numbers');
      return false
    }

    // If all conditions are met, then the parameter format is valid
    return true
  },
  hasValidSides: function(triangleSides) {
    // Store array items in variables for readability purposes
    const sideA = parseFloat(triangleSides[0]),
          sideB = parseFloat(triangleSides[1]),
          sideC = parseFloat(triangleSides[2])

    // All sides of a triangle must be bigger than 0
    if(triangleSides.filter(side => parseFloat(side) <= 0).length > 0) {
      console.error('a triangle side must be bigger than 0');
      return false
    }
    // The sum of 2 triangle sides must always be bigger than one side
    if((sideA + sideB) <= sideC || (sideB + sideC) <= sideA || (sideC + sideA) <= sideB) {
      console.error('invalid triangle sides');
      return false
    }

    return true
  }
}