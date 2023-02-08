Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - separator (Optional)
    Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
   - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
   - Example:
     ```js
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // Expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // Expected output: "FireAirWater"

    console.log(elements.join('-'));
    // Expected output: "Fire-Air-Water"
     ```
   - The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
   - No it does not mutate the original array

3. `flat`
   - depth Optional
    The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
    const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat());
    // Expected output: Array [0, 1, 2, 3, 4]

    const arr2 = [0, 1, 2, [[[3, 4]]]];

    console.log(arr2.flat(2));
    // Expected output: Array [0, 1, 2, Array [3, 4]]
     ```
   - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

4. `push`
   - elementN
      The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
      const animals = ['pigs', 'goats', 'sheep'];

      const count = animals.push('cows');
      console.log(count);
      // Expected output: 4
      console.log(animals);
      // Expected output: Array ["pigs", "goats", "sheep", "cows"]

      animals.push('chickens', 'cats', 'dogs');
      console.log(animals);
      // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

     ```
   - The push() method adds one or more elements to the end of an array and returns the new length of the array.

5. `indexOf`
   -searchElement
      Element to locate in the array. and
    fromIndex Optional
      Zero-based index at which to start searching, converted to an integer.
      Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
      If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
      If fromIndex >= array.length, the array is not searched and -1 is returned.

   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // Expected output: 1

    // Start from index 2
    console.log(beasts.indexOf('bison', 2));
    // Expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // Expected output: -1


     ```
   - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

6. `lastIndexOf`
    -searchElement
      Element to locate in the array. and
    fromIndex Optional
      Zero-based index at which to start searching backwards, converted to an integer.

      Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used.
      If fromIndex < -array.length, the array is not searched and -1 is returned. You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so searchElement is never found.
      If fromIndex >= array.length or fromIndex is omitted, array.length - 1 is used, causing the entire array to be searched. You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.

   - Return: The last index of the element in the array; -1 if not found.
   - Example:
     ```js
      const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

      console.log(animals.lastIndexOf('Dodo'));
      // Expected output: 3

      console.log(animals.lastIndexOf('Tiger'));
      // Expected output: 1
     ```
   - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

7. `includes`
    -searchElement
    The value to search for.

    fromIndex Optional
    Zero-based index at which to start searching, converted to an integer.
    Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. However, the array is still searched from front to back in this case.
    If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
    If fromIndex >= array.length, the array is not searched and false is returned.

   - Return: A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
   - Example:
     ```js
      const array1 = [1, 2, 3];

      console.log(array1.includes(2));
      // Expected output: true

      const pets = ['cat', 'dog', 'bat'];

      console.log(pets.includes('cat'));
      // Expected output: true

      console.log(pets.includes('at'));
      // Expected output: false
     ```
   - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

8. `reverse`
   - Parameters: None.

   - Return: The reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made.
   - Example:
     ```js
      const array1 = ['one', 'two', 'three'];
      console.log('array1:', array1);
      // Expected output: "array1:" Array ["one", "two", "three"]

      const reversed = array1.reverse();
      console.log('reversed:', reversed);
      // Expected output: "reversed:" Array ["three", "two", "one"]

      // Careful: reverse is destructive -- it changes the original array.
      console.log('array1:', array1);
      // Expected output: "array1:" Array ["three", "two", "one"]
     ```
   - The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
   - yes it mutates original array.

9. `every`
   - Parameters:
      callbackFn
      A function to execute for each element in the array. It should return a truthy to indicate the element passes the test, and a falsy value otherwise.
        The function is called with the following arguments:
        1.element
        The current element being processed in the array.
        2.index
        The index of the current element being processed in the array.
        3.array
        The array every() was called upon.
        4.thisArg Optional
        A value to use as this when executing callbackFn. 

   - Return: true if callbackFn returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
      const isBelowThreshold = (currentValue) => currentValue < 40;

      const array1 = [1, 30, 39, 29, 10, 13];

      console.log(array1.every(isBelowThreshold));
      // Expected output: true
     ```
   - The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
   - No it does not mutate the original array

10. `shift`
   - Parameters:None.

   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
      const array1 = [1, 2, 3];

      const firstElement = array1.shift();

      console.log(array1);
      // Expected output: Array [2, 3]

      console.log(firstElement);
      // Expected output: 1
     ```
   - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
   - yes it mutates original array.

11. `splice`
   - Parameters:splice(start, deleteCount, item1, item2, itemN)

   - Return: An array containing the deleted elements.

      If only one element is removed, an array of one element is returned.

      If no elements are removed, an empty array is returned.
   - Example:
     ```js
      const months = ['Jan', 'March', 'April', 'June'];
      months.splice(1, 0, 'Feb');
      // Inserts at index 1
      console.log(months);
      // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

      months.splice(4, 1, 'May');
      // Replaces 1 element at index 4
      console.log(months);
      // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
     ```
   - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
   - yes it mutates original array.

12. `find`
   - Parameters:
    callbackFn
    A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.
    The function is called with the following arguments: element
    The current element being processed in the array.
    index
    The index of the current element being processed in the array.
    array
    The array find() was called upon.
    thisArg Optional
    A value to use as this when executing callbackFn. 

    -If you need the index of the found element in the array, use findIndex().
    If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
    If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
    If you need to find if any element satisfies the provided testing function, use some().


   - Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
   - Example:
     ```js
      const array1 = [5, 12, 8, 130, 44];

      const found = array1.find(element => element > 10);

      console.log(found);
      // Expected output: 12
     ```
   - The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
   - No, it doesnot mutates original array.

13. `unshift`
   - Parameters:
    elementN
    The elements to add to the front of the arr.



   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
      const array1 = [1, 2, 3];

      console.log(array1.unshift(4, 5));
      // Expected output: 5

      console.log(array1);
      // Expected output: Array [4, 5, 1, 2, 3]
     ```
   - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - yes it mutates original array.

14. `findIndex`
   - Parameters:
    callbackFn
    A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.
    The function is called with the following arguments: element
    The current element being processed in the array.
    index
    The index of the current element being processed in the array.
    array
    The array find() was called upon.
    thisArg Optional
    A value to use as this when executing callbackFn. 


   - Return: The index of the first element in the array that passes the test. Otherwise, -1.

   - Example:
     ```js
      const array1 = [5, 12, 8, 130, 44];

      const isLargeNumber = (element) => element > 13;

      console.log(array1.findIndex(isLargeNumber));
      // Expected output: 3
     ```
   - The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
   - No, it doesnot mutates original array.

15. `filter`
   - Parameters:
      callbackFn
      A function to execute for each element in the array. It should return a truthy to indicate the element passes the test, and a falsy value otherwise.
        The function is called with the following arguments:
        1.element
        The current element being processed in the array.
        2.index
        The index of the current element being processed in the array.
        3.array
        The array every() was called upon.
        4.thisArg Optional
        A value to use as this when executing callbackFn. 



   - Return: A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
      const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

      const result = words.filter(word => word.length > 6);

      console.log(result);
      // Expected output: Array ["exuberant", "destruction", "present"]
     ```
   - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
   - it doesnot mutates original array.

16. `flat`
already written above on number 3.

17. `forEach`
   - Parameters:
      callbackFn
      A function to execute for each element in the array. Its return value is discarded.
        The function is called with the following arguments:
        1.element
        The current element being processed in the array.
        2.index
        The index of the current element being processed in the array.
        3.array
        The array every() was called upon.
        4.thisArg Optional
        A value to use as this when executing callbackFn. 



   - Return: undefined.
   - Example:
     ```js
      const array1 = ['a', 'b', 'c'];

      array1.forEach(element => console.log(element));

      // Expected output: "a"
      // Expected output: "b"
      // Expected output: "c"
     ```
   - The forEach() method executes a provided function once for each array element.
   - it doesnot mutates original array.

18. `map`
   - Parameters:
      callbackFn
      A function to execute for each element in the array. Its return value is added as a single element in the new array.
        The function is called with the following arguments:
        1.element
        The current element being processed in the array.
        2.index
        The index of the current element being processed in the array.
        3.array
        The array every() was called upon.
        4.thisArg Optional
        A value to use as this when executing callbackFn. 



   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
      const array1 = [1, 4, 9, 16];

      // Pass a function to map
      const map1 = array1.map(x => x * 2);

      console.log(map1);
      // Expected output: Array [2, 8, 18, 32]
     ```
   - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - it doesnot mutates original array.


19. `pop`
   - Parameters:None.

   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        console.log(plants.pop());
        // Expected output: "tomato"

        console.log(plants);
        // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

        plants.pop();

        console.log(plants);
        // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

     ```
   - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
   - yes, it does mutate original array.

20. `reduce`
   - Parameters:
      callbackFn
      A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

            The function is called with the following arguments:

            accumulator
            The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

            currentValue
            The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

            currentIndex
            The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

            array
            The array reduce() was called upon.

      initialValue Optional
      A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.


   - Return: The value that results from running the "reducer" callback function to completion over the entire array.
   - Example:
     ```js
      const array1 = [1, 2, 3, 4];

      // 0 + 1 + 2 + 3 + 4
      const initialValue = 0;
      const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );

      console.log(sumWithInitial);
      // Expected output: 10

     ```
   - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   - it doesnot mutates original array.

21. `slice`
   - Parameters:slice(start, end)
      Negative index counts back from the end of the array — if start < 0, start + array.length is used.
      If start < -array.length or start is omitted, 0 is used.
      If start >= array.length, nothing is extracted.

   - Return: A new array containing the extracted elements.
   - Example:
     ```js
      const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

      console.log(animals.slice(2));
      // Expected output: Array ["camel", "duck", "elephant"]

      console.log(animals.slice(2, 4));
      // Expected output: Array ["camel", "duck"]

      console.log(animals.slice(1, 5));
      // Expected output: Array ["bison", "camel", "duck", "elephant"]

      console.log(animals.slice(-2));
      // Expected output: Array ["duck", "elephant"]

      console.log(animals.slice(2, -1));
      // Expected output: Array ["camel", "duck"]

      console.log(animals.slice());
      // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

     ```
   - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - it doesnot mutates original array.

22. `some`
- Parameters: 
     callbackFn
      A function to execute for each element in the array. It should return a truthy to indicate the element passes the test, and a falsy value otherwise.
        The function is called with the following arguments:
        1.element
        The current element being processed in the array.
        2.index
        The index of the current element being processed in the array.
        3.array
        The array every() was called upon.
        4.thisArg Optional
        A value to use as this when executing callbackFn. 

   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
      const array = [1, 2, 3, 4, 5];

      // Checks whether an element is even
      const even = (element) => element % 2 === 0;

      console.log(array.some(even));
      // Expected output: true

     ```
   - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - it doesnot mutates original array.   
