// let a = [1,'asd',2,5]

// let c = a.sort((a,b) => b-a)

// console.log(c);

// const myArray = [1, 2, 3, 4, 5];

// myArray.splice(2,0,6);

// console.log(myArray);

// const numbers = [0, 1, 2, 3, 4, 5];


// let evenNumbers = numbers.filter((i) => i % 2 == 0)

// console.log(evenNumbers);

// const numbers1 = [1, 2, 3, 4, 5];

// const total = numbers1.reduce(function(sum,i){return sum+=i})

// console.log(total);

// ANAGRAM CHECK

// let a = 'triangle'

// let b = 'integral'

function areAnagrams(str1, str2) {
    const cleanString = (str) => str.replace(/\s/g, '').toLowerCase();
    
    const sortedStr1 = cleanString(str1).split('').sort().join('');
    const sortedStr2 = cleanString(str2).split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Test cases
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world"));   // false
  console.log(areAnagrams("anagram", "nagaram")); // true
  

