Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: It doesn't accept any parameter.
   - Return: Returns the value of the string converted to uppercase.
   - Example:
     ```js
     console.log("alphabet".toUpperCase()); // 'ALPHABET'
     let sentance = 'A quick brown fox jumped over a lazy dog.';
     console.log(sentence.toUpperCase());
     // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
     let houseName = 'Starks';
     console.log(houseName.toUpperCase()); // "STARKS"
     ```
   -The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

3. `toLowerCase`

- Parameter: It doesn't accept any parameter.
   - Return: Returns the value of the string converted to lowercase.
   - Example:
     ```js
     console.log("ALPHABET".toLowerCase()); // 'alphabet'
     let sentance = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';
     console.log(sentence.toLowerCase());
     // Expected output: "a quick brown fox jumped over a lazy dog."
     let houseName = 'STARKS';
     console.log(houseName.toLowerCase()); // "starks"
     ```
   -The toLowerCase() method returns the value of the string converted to lowercase. This method does not affect the value of the string itself since JavaScript strings are immutable.


4. `trim`

   - Parameter: It doesn't accept any parameter.
   - Return: Returns a new string from which white spaces have been removed from start as well as end.
   - Example:
     ```js
     const greeting = '   Hello world!   ';
     console.log(greeting.trim());
     // Expected output: "Hello world!";
     const str = "   food  ";
     console.log(str.trim()); //'food'
     let houseName = '  STARKS   ';
     console.log(houseName.trim()); //`STARKS`
     ```
   -The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

5. `trimEnd`

   - Parameter: It doesn't accept any parameter.
   - Return: Returns a new string from which white spaces have been removed from end only.
   - Example:
     ```js
     const greeting = '   Hello world!   ';
     console.log(greeting.trimEnd());
     // Expected output: "   Hello world!";
     const str = "   food  ";
     console.log(str.trimEnd()); //'   food'
     let houseName = '  STARKS   ';
     console.log(houseName.trimEnd()); //`   STARKS`
     ```
   -The trimEnd() method removes whitespace from the end of string, but not from its start and returns a new string, without modifying the original string.

6. `trimStart`

   - Parameter: It doesn't accept any parameter.
   - Return: Returns a new string from which white spaces have been removed from start only.
   - Example:
     ```js
     const greeting = '   Hello world!   ';
     console.log(greeting.trimStart());
     // Expected output: "Hello world!   ";
     const str = "   food  ";
     console.log(str.trimStart()); //'food   '
     let houseName = '  STARKS   ';
     console.log(houseName.trimStart()); //`STARKS   `
     ```
   -The trimStart() method removes whitespace from the start of string, but not from its end and returns a new string, without modifying the original string.

7. `concat`

   - Parameter: It can accept multiple parameters(strings that are to be concatenated with called string).
   - Return: A new string containing the combined text of the strings provided.
   - Example:
     ```js
     const str1 = 'Hello';
     const str2 = 'World';
     console.log(str1.concat(" ", str2));
     // Expected output: "Hello world!";
     const hello = "Hello, ";
     console.log(hello.concat("Kevin", ". Have a nice day."));
     // Hello, Kevin. Have a nice day.
`
     ```
   -The concat() method concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`

   - Parameter: It accepts two parameters `searchString(The characters to be searched for)` and
    `endPosition((the index of searchString's last character plus 1). Defaults to str.length.)`(Optional).
   - Return: true if the given characters are found at the end of the string, including when searchString is  
      an empty string; otherwise, false.
   - Example:
     ```js
    const str1 = 'Cats are the best!';

    console.log(str1.endsWith('best!'));
    // Expected output: true

    console.log(str1.endsWith('best', 17));
    // Expected output: true

    const str2 = 'Is this a question?';

    console.log(str2.endsWith('question'));
    // Expected output: false
     ```
   -The endsWith() method determines whether a string ends with the characters of a specified string,       
    returning true or false as appropriate.

9. `includes`

   - Parameter: It accepts two parameters `searchString(The characters to be searched for)` and
    `position (Optional)`The position within the string at which to begin searching for searchString. (Defaults to 0.).
   - Return: true if the search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.
   - Example:
     ```js
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const word = 'fox';
    console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
    // Expected output: "The word "fox" is in the sentence"

    "Blue Whale".includes("blue"); // returns false

    const str = "To be, or not to be, that is the question.";

    console.log(str.includes("To be")); // true
     ```
   -The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`

   - Parameter: It accepts two parameters `searchString (Substring to search for.)` and
    `position (Optional)`The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.

   - Return: The index of the first occurrence of searchString found, or -1 if not found.

   - Example:
     ```js
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    // Expected output: "The index of the first "dog" from the beginning is 40"

    console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    // Expected output: "The index of the 2nd "dog" is 52"
     ```
   -The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

11. `lastIndexOf`

   - Parameter: It accepts two parameters `searchString (Substring to search for.)` and
    `position (Optional)`The method returns the index of the last occurrence of the specified substring at a position less than or equal to position, which defaults to +Infinity. If position is greater than the length of the calling string, the method searches the entire string. If position is less than 0, the behavior is the same as for 0 — that is, the method looks for the specified substring only at index 0.

   - Return: The index of the last occurrence of searchString found, or -1 if not found.
   
   - Example:
     ```js
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';

    console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
    // Expected output: "The index of the first "dog" from the end is 52"

     ```
   -The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

12. `padEnd`

   - Parameter: It accepts two parameters `targetLength` The length of the resulting string once the current   
      str has been padded. If the value is lower than str.length, the current string will be returned as-is. and
    `padString` (Optional)
    The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).

   - Return: A String of the specified targetLength with the padString applied at the end of the current str.

   
   - Example:
     ```js
    const str1 = 'Breaded Mushrooms';

    console.log(str1.padEnd(25, '.'));
    // Expected output: "Breaded Mushrooms........"

    const str2 = '200';

    console.log(str2.padEnd(5));
    // Expected output: "200  "

     ```
   -The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.



13. `padStart`

   - Parameter: It accepts two parameters `targetLength` The length of the resulting string once the current   
      str has been padded. If the value is lower than str.length, the current string will be returned as-is. and
    `padString` (Optional)
    The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).

   - Return: A String of the specified targetLength with the padString applied at the start of the current str.

   
   - Example:
     ```js
    const str1 = '5';

    console.log(str1.padStart(2, '0'));
    // Expected output: "05"

    const fullNumber = '2034399002125581';
    const last4Digits = fullNumber.slice(-4);
    const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

    console.log(maskedNumber);
    // Expected output: "************5581"

     ```
   -The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.


14. `repeat`

   - Parameter: `count` An integer between 0 and +Infinity, indicating the number of times to repeat the string.

   - Return: A new string containing the specified number of copies of the given string.

   
   - Example:
     ```js
    const mood = 'Happy! ';

    console.log(`I feel ${mood.repeat(3)}`);
    // Expected output: "I feel Happy! Happy! Happy! "

    "abc".repeat(2); // 'abcabc'
    "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)

     ```
   -The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

   - Parameter: `pattern`
      Can be a string. and
      `replacement`
      Can be a string.

   - Return: A new string, with one matches of the pattern replaced by the specified replacement.

   
   - Example:
     ```js
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    console.log(p.replace('dog', 'monkey'));
    // Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

     ```
   -The replace() method returns a new string with one matche of a pattern replaced by a replacement. The pattern can be a string and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

16. `slice`

   - Parameter: `indexStart`(default to 0 if omitted) and `indexEnd`.For example, str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).indexStart >= str.length, an empty string is returned.if indexEnd >= str.length, or is omitted slice() extracts to the end of the string.
   - If indexStart < 0, the index is counted from the end of the string. More formally, in this case, the substring starts at max(indexStart + str.length, 0).If indexEnd < 0, the index is counted from the end of the string.
   -If indexEnd <= indexStart after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), an empty string is returned.

   - Return: A new string containing the extracted section of the string.

   
   - Example:
     ```js
    const str = 'The quick brown fox jumps over the lazy dog.';

    console.log(str.slice(31));
    // Expected output: "the lazy dog."

    console.log(str.slice(4, 19));
    // Expected output: "quick brown fox"

    console.log(str.slice(-4));
    // Expected output: "dog."

    console.log(str.slice(-9, -5));
    // Expected output: "lazy"
     ```
   -The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`

   - Parameter: `separator`
     The pattern describing where each split should occur. Can be a string or an object. and
     `limit` (Optional)
     A non-negative integer specifying a limit on the number of substrings to be included in the array.

  -  If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
    If limit is 0, [] is returned.


   - Return: An Array of strings, split at each point where the separator occurs in the given string.

   
   - Example:
     ```js
    const str = 'The quick brown fox jumps over the lazy dog.';

    const words = str.split(' ');
    console.log(words[3]);
    // Expected output: "fox"

    const chars = str.split('');
    console.log(chars[8]);
    // Expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
     ```
   -The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

18. `substring`

   - Parameter: `indexStart`
    The index of the first character to include in the returned substring.

    `indexEnd` (Optional)
    The index of the first character to exclude from the returned substring.


   - Return: A new string containing the specified part of the given string.

   
   - Example:
     ```js
    const str = 'Mozilla';

    console.log(str.substring(1, 3));
    // Expected output: "oz"

    console.log(str.substring(2));
    // Expected output: "zilla"
     ```
   -The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
