// // Conditionals

// // level 0
//     // Q0.1
//         // Create a function which takes in a string. 
//         // If the string length is greater than 0 return 'The string exists'. 
//         // Else return, 'The string doesn't have characters'.

// let str = "Hey you!!"
// let str2 = ""

// function ohlord(string) {
//     if (string.length > 0){
//         return 'The string exist'
//     }
//     else {
//         return "The string doesn't have characters"
//     }
// }
// console.log(ohlord(str));
// console.log(ohlord(str2));

//     // level 1
//     // Q 1.1  
//         // Create a function which takes in two numbers 
//         // If number one is larger than number two return 'Number one is greater than number two.'
//         // If number two is larger than number one return 'Number two is greater than number one.'

// function numbers(Uno,Dos) {
//     if (Uno>Dos){
//         return 'Number one is greater than number two.';
//     }
//     else{
//         return 'Number two is greater than number one.';
//     }
// }
// console.log(numbers(6,0));
// console.log(numbers(6,200));

// // level 2
//     // Q 2.1
//         // Create a function which takes the following array: [99, 'Long Island', 'Hello World']; 
//         // If the array contains the string 'Hello World' the function returns 'Hello World!'.
//         // If 'Hello World doesn't exist return 'Goodnight World'.  
//             // Once you think you have the solution also try and invoke the function with a different array: ['red', 'green', 'periwinkle']; 
    
// let arr = [99, 'Long Island', 'Hello World']
// let arr2 = ['red', 'green', 'periwinkle']
// function name(GM) {
   
//     if (GM.indexOf('Hello World')>-1){
//         return 'Hello World!'
//     }
//     else{
//         return "Goodnight World"
//     }
// }
// console.log(name(arr));
// console.log(name(arr2));

//     // Q 2.2
//         // Create a function which takes in a car object.
//         // If the object contains a key of carName with a value of 'Ferrari'
//         // and the object contains a key of color with a value of 'Red'.
//         // return 'Whoa, a classic Ferrari!'.
//         // else return 'Meh, it's just a car'.

// // level 3
//     // Q 3.1
//         // Create a function which takes in a car object.
//         // If the object contains a key of carName with a value of 'Lamborghini'
//         // and the object contains a key of color with a value of 'yellow'.
//         // return 'Whoa, a classic Lamborghini!'.
//         // If the carName is 'Lamborghini' and the color isn't 'yellow' then return, 'That's an interesting Lamborghini.'
//         // else return 'Meh, it's just a car'.

//         // Write a function that takes in two parameters and checks how often an the second parameter appears in an array (the first parameter


 
// write a function that checks how often an element appears in an array
 // example
 // check for 'red'
// let arr1 = ['black']; 
// let arr2 = ['red', 'blue', 'red', 'yellow', 'red']; 
// let arr3 = ['red', 'blue', 'red', 'yellow', 'black']; 


// function color(colors) {
//     let count = 0;
    
// //     for(i=0; i < colors.length; i++){
// //         let element = colors[i]; 

// //         if (element === 'red') {
// //             count++
// //         } 
// //     }
// //     return count    
// //  }
// //  console.log(color(arr1));
// //  console.log(color(arr2));
// //  console.log(color(arr3));
// // 5/28/20
//     // level 0:
// // let thesky = ['blue', 'red', 'orange', 'grey']
// // let thisyear = ['house', 'certificate','cafe']

// // function facts(params) {
// //     if (params.length > 3){
// //         return "length greater than 3";
// //     } else {
// //         return "length is 3 or shorter"
// //     }
     
// // }
// // console.log(facts(thesky));
// // console.log(facts(thisyear));

//     // level 1
// // let thesky = ['blue', 'red', 'orange', 'grey']
// // let thisyear = ['house', 'certificate','cafe']


// // function Larger(params1,params2) {
// //     if (params1.length > params2.length){
// //         return params1;
// //     } else {
// //         return params2;
// //     }
// // }
// // console.log(Larger(thesky,thisyear));

//     //level 2
// // let Jays = ['Just', 'Jump', 'for', 'Joy', 'while', 'Juggling', 'jewels'];
// // let thisyear = ['house', 'certificate','cafe'];
//     // I was getting all uppercase 'J's" and not the lower case one.
// // function letterj(params) {
// //     let collect = []
// //     for (i=0; i < params.length; i++){
// //         if(params[i].indexOf('J') > -1){
// //             collect.push(params[i])
// //         } else if (params[i].indexOf('j') > -1){
// //             collect.push(params[i])
// //         }
            
// //     }
// //     return collect
// // }
//     // way 2. got all J's
// // function letterj(params) {
// //     let collect = []
// //     for (i=0; i < params.length; i++){
// //         if(params[i].indexOf('J') > -1 || params[i].indexOf('j') > -1){
// //             collect.push(params[i])
        
// //         }
            
// //     }
// //     return collect
// // }
//     // way 3. simpler way
// // function letterj(params) {
// //     let collect = []

// //     for (i=0; i < params.length; i++){
// //         if(params[i].toUpperCase().indexOf('J') > -1 ){
// //             collect.push(params[i])
        
// //         }
            
// //     }
// //     return collect
// // }
// // console.log(letterj(Jays,thisyear));
// // loops or conditionals (focus on picking ONE or the other)

// // 6.3.20

// // level 0
// // loop warmup
//     // create a function which iterates over an array of strings 
//     // the function returns a new array of captalized strings

//     let vitamins = ["Vitamin B12", "Vitamin C", "Vitamin D"]
//     function Capitalvites(params) {
//     let allcaps = []
//         for (let i = 0; i < params.length; i++) {
//             let element = params[i];
//             let Upperel = (element.toUpperCase());            
//             allcaps.push(Upperel)
//         }

//         return allcaps
//     }
// console.log(Capitalvites(vitamins));


// // conditional warmup
//     // create a function which takes in a number 
//     // the function returns 'even' if the number is even and 'odd' if its odd
//     function todo(nums) {
//         if (nums % 2 == 0) {
//             return "even"
//         }
//         else{
//             return "odd"
//         }
//     }
//     console.log(todo(26));
//     console.log(todo(33));
//     console.log(todo(44));
    

// // level 1
//     // Q1:
//         // create a function which takes in a string 
//         // the function returns even if the string has an even amount of elements
//         // otherwise it returns odd
//         function BS(params) {
//             if (params.length % 2 == 0) {
//                 return "even"
//             }
//             else {
//                 return "odd"
//             }
//         }
//         console.log(BS("why"));
//         console.log(BS("go"));
//         console.log(BS("let's rock!"));
//         console.log(BS("maybe"));
        

//     // Q2: 
//         // create a function which takes in an array
//         // the function returns a new array with every other element in the array
//         let arr = ["Nat","Mad","Jay","Joe"]
//         function really(params) {
//             if (condition) {
                
//             }
//         }


    // Q3:
        // create a function which takes in an array 
        // the function returns the first element with the character 'i'

// level 2:
    // Q1:
        // create a function which takes in two numbers
        // it returns 'That was divisible!' if the first number is divisble by the second

    // Q2:
        // create a function which takes in an array and a string
        // it returns the index if the string exists within the array
        // it returns 'not here' if the array doesn't contain the string

// level 3:
    // Q1:
        // create a function which searches a string for any elements within an array
        // the function returns an array of elements that do exist
        // for example:
            // input ['abc', 'def', 'llo', ' ', 'o'] & "Hello World" returns ['llo', ' ', 'o']

    // Q2: 
        // create a function which takes in two arrays
        // the function will return a new array of any common elements
    //     var dec = newBigNumber("1.9");
    //     var dec2 = newBigNumber("2.0");
    // function multiply(param1,param2) {
    //     return param1 * param2
    //     }
    // console.log(multiply(3,2));

    // function setDecimalPlaces() { 
    //     pi = 3.14159265359; 
    //     twoPlaces = pi.toFixed(2); 
    //     fivePlaces = pi.toFixed(5);
    //     eightPlaces = pi.toFixed(8); 
    //     zeroPlaces = pi.toFixed(0); 
        
    //     return eightPlaces
    // }

    // console.log(setDecimalPlaces());

    'abba' , 'baab' 

    'abba' , 'bbaa' 
    
    'abba' , 'abbba' 
    
    'abba' , 'abca' 

let anything = "word"
let idk = anything.split("")
console.log(idk.sort());

    
function anagrams(word1, word2) {
   let word1sort = word1.split("").sort().join("")
   let word2sort = word2.split("").sort().join("")   

     if (word1sort === word2sort){
        return "true"
     } else {
         return "false"
     }
} 
              
    
    console.log(anagrams('abba' , 'baab'));
    console.log(anagrams('abba' , 'bbaa'));
    console.log(anagrams('abba' , 'abbba'));
    console.log(anagrams('abba' , 'abca'));
    
    