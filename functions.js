/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(num) {
 	return num.toString()
 }

 numberToString(5)


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase (num) {
	return num+=1
}
increase (5)

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease (num) {
 	return num-=1
 }

 decrease(5)


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add (x, y) {
 return (x + y)
}

add (2,3)

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract (x, y) {
	return (x-y)
}

subtract (3,2)

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply (x,y) {
	return (x*y)
}

multiply (1,5)

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide (x, y) {
	return (x/y)
}

divide(5,1)

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square (x) {
 	return (x*x)
 }

 square (2)


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate (str, x, y) {
	var a = x.toString()
	var b = y.toString()
	var sum;
	if (str === 'add') {
	  sum = x + y
	  console.log(a + ' + ' + b + ' = ' + sum)
	  return x + y;
	} else if (str === 'subtract') {
		sum = x - y;
		console.log(a + ' - ' + b + ' = ' + sum)
		return x - y;
	} else if (str === 'multiply') {
		sum = x * y;
		console.log((a + ' * ' + b + ' = ' + sum))
		return x * y;
	} else  if(str === 'divide') {
		sum = x/y
		console.log(a + ' / ' + b + ' = ' + sum)
		return x/y;
	}

	//return sum
}

calculate ('add', 4, 7)

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (a, b) {
	if (a > b) {
		return true
	} else {
		return false
	}
}
 
isGreaterThan(10,8)


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan(a,b) {
 	if (a < b) {
 		return true
 	} else {
 		return false
 	}
 }

 isLessThan(2,4)


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function areEqual (a,b) {
 	if (a === b) {
 		return true
 	} else {
 		return false
 	}
 }

 areEqual(2,2)


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 function minimum(x,y) {
 	if (x < y) {
 		return x
 	} else {
 		return y
 	}
 }

 minimum (2,4)

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y) {
	if (x > y) {
		return x
	} else {
		return y
	}
}

maximum (4,2)

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven (n) {
 	if(n%2===0){
 		return true
 	} else {
 		return false
 	}
 }

 isEven(6)


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd (n) {
 	if(n%2!==0){
 		return true
 	} else {
 		return false
 	}
 }
 
 isOdd(3)


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(a,b){
  var x = ((a/b)*100)
  if (x >= 90 && x <= 100) {
 	return "A";
} else if (x >= 80 && x <= 89) {
	return "B";
} else if (x >= 70 && x <= 79) {
	return "C";
} else if (x >= 60 && x <= 69) {
	return "D";
} else if (x <= 59 && x >= 0) {
	return "F"
}

}

letterGrade (67, 100)
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


function incrementReviews(obj) {

  for (var key in obj) {
	  if(key === 'reviews') {
   return obj[key] += 1
	} else if (key !== 'reviews') {
	  return obj.reviews = 1;
	}
}
}


incrementReviews(restaurant)

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(word1, word2) {
	return word1 + " " + word2
}

combine("joe", "cat")

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

 function createCircle(r) {
 	var c = 2*r*Math.PI;
 	var a = Math.PI*(r*r)
 	var n = {
 	  circumference: c,
 	  area: a
 	};
 	return n
 	
 }
 
 createCircle(2)
 

