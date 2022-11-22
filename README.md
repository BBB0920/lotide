# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bbb0920/lotide`

**Require it:**

`const _ = require('bbb0920/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Returns a true assertion statement if both arrays are identical, otherwise return false assertion statement
* `assertEqual(actual, expected)`: Returns an assertion statement based on two elements being compared
* `assertObjectsEqual(object1, object2)`: Returns a true assertion statement if both objects have identical keys with identical values, otherwise return false assertion statement
* `countLetters(string)`: Returns an object with keys containing the letter and its occurrence in the string
* `countOnly(array, object)`: Returns an object containing number of times an element has appeared in an array, based on boolean condition of the element in the object
* `eqArrays(array1, array2)`: Returns a boolean based on whether the two arrays are the same or not
* `eqObjects(object1, object2)`: Returns boolean based on whether the two objects are the same or not
* `findkey(object, function)`: Returns a key based on an object and function with the key
* `findKeyByValue(object, string)`: Returns a key inside an object based on the string that is the name of the key
* `head(array)`: Returns the first value of the array
* `letterPositions(string)`: Returns an array containing the position of every letter in the string
* `map(array, function)`: Returns a modified array based on an initial array, and function that changed it
* `middle(array)`: Returns an array containing the middle of an array; if the length of the array is odd, it will return an array with one element in it. If the length of the array is even, it will return an array with two middle elements in it. 
* `tail(array)`: Returns an array without the first element in it
* `takeUntil(array, function)`: Returns a modified array has been filtered based on the function
* `without(array, array)`: Returns a subtracted array - the second array is subtracted from first. If second array contains value that does not exist in the first array, those values are ignored.  
