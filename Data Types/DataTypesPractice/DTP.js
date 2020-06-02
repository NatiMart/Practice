// // // // These exercises are for you to practice
// // //     // The file is sperated into strings, arrays, objects, and booleans.
// // //     // HOWEVER there will sometimes be overlap (for example turning a string into an array and back)
// // //     // 💥🥳 Have fun! 🥳🔥

// // // // Strings
// // //     // log a string to the console
// // //     var love = "I love to eat lot's of pizza";
// // //     // console.log(love);  

// // //     // Turn the string "I love to eat lots of pizza." into an array of words aka: ['I', 'love', 'to', 'eat', 'pizza!'].
// // //     var arrlove = love.split(" ");
// // //     // console.log(arrlove);

// // //     // Extract the first 4 letters from a string
// // //     var love = "I love to eat lot's of pizza";
// // //     // var arr2 = love.slice(0,5)
// // //     // console.log(arr2);
    
// // //     // Extract the last 4 letters from a string
// // //     var love = "I love to eat lot's of pizza";
// // //     var numbers = love.length;
// // //     var arr2 = love.slice(24, 28);
// // //     console.log(arr2);

// // //     // Extract all letters before ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
// // //     var address = "Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
// // //     var Placearr = address.split(':'); //split turns a string into an array. once its an array you can access any i with brackets.
// // //     Placearr[0]; //you're targetting the specific i number.
// // //     console.log(Placearr[0]);

// // //     // Extract all letters after ':' in the string 'Address: 1600 Pennsylvania Ave NW, Washington, DC 20500"
// // //     var Placearr = address.split(':'); //split turns a string into an array. once its an array you can access any index with brackets.
// // //     Placearr[1]
// // //     console.log(Placearr[1]);

// // //     // Convert your name into an abbreviation
// // //         // Input: "Nic Leask"
// // //         // Output: "Nic L"
// // //             // Try and make it dynamic, swap out your name with other names and see what you get
// // // // first solution   
// // //     // var Name = 'Natalie Martinez'
// // //     // var Name2 = Name.slice(0,3);
// // //     // var Name3 = Name.slice(8,11);
// // //     // console.log(Name2 + " " + Name3);

// // //     var Name = 'Natalie Martinez'
// // //     var Namearr = Name.split(' ');
// // //     var Name3 = Namearr[0];
// // //     var Nat1 = Name3.slice(0,3);

// // //     var Name4 = Namearr[1];
// // //     var Nat2 = Name4.slice(0,3);

// // //     // var Name4 = Name3.slice(0,3);
// // //     // var Name3 = Name.slice(8,11);
// // //     console.log(Nat1 + " " + Nat2);
// // //     let name = "Ronald Vilorio";
// // //     let newName = name.split(" ")[0] +" "+ name.split(" ")[1][0]
// // //     console.log(newName)
    
// //     // Convert your full name into your initials
// //         // Input: "Nicholas Paul Norman Leask"
// //         // // Output: "NPNL"
// //         // var Fullname = 'Natalie Isabel Vazquez Martinez'
// //         // var Newnamearr = Fullname.split(' ');
// //         // var NIVM = Newnamearr [0][0] + Newnamearr [1][0] + Newnamearr [2][0] + Newnamearr[3][0];
// //         // console.log(NIVM);
        
// //             // Try and make it dynamic, swap out your full name with other names and see what you get

// //     // Protect an email address
// //         // input: nicholas@nebulaacademy.com
// //         // output: nic...@n...y.com

// //     // Protect a phone number
// //         // input: 555-444-1234
// //         // output: 5##-###-##34
    
// // //________________________________________________________________________________________________________________

// // // Arrays
// //     // log an array to the console

// //     // get the length of an array

// //     // get the first item in an array

// //     // get the last item in an array

// //     // get the first n elements (values) of an array 
// //         // var array = ['a','b','c','d','e','f','g']
// //         // n = 3
// //         // output = ['a', 'b', 'c']

// //     // get the last n elements of an array
// //         // n = 3 
// //         // output  = ['e','f','g']

// // //     // Concatinate all elements in an array into one long string

// // //     // Swap uppercase for lowercase 
// // //         // Input: "Hi Neil!"
// // //         // Output: "hI nEIL!"

// // //     // Multiply all the numbers of an array together
// // //         // input: arr = [ 0, 1, 2, 3, 4, 5]  
// // //         // output: 0

// // //         // input: arr = [2, 4, 6, 8]
// // //         // output: 384
// // // //________________________________________________________________________________________________________________

// // // // Objects

// // //     // crate an object with 3 key-value pair and log the full object to the console

// // //     // log one key-value pair to the console

// // //     // create a car object which as a key-value pair of moving:true or moving:false
// // //         // write an if statement that checks the key value pair and if it is true then log "the car is in motion" and if false "sitting still"

// // //     // 

// // // // for (let index = 0; index < .length; index++) {
// // // //     const element = array[index];
    
// // // // }
// // // var arrayOfSheep = [true,  true,  true,  false,
// // //     true,  true,  true,  true ,
// // //     true,  false, true,  false,
// // //     true,  false, false, true ,
// // //     true,  true,  true,  true ,
// // //     false, false, true,  true ];


// // // function countSheeps(arrayOfSheep) {
// // //     for (let index = 0; index <arrayOfSheep.length; index++) {
// // //        }
    
// // //     }return arrayOfSheep.filter((x) => x === true).length;
// // //  console.log(countSheeps(arrayOfSheep));
// // // function repeat(string,times) { var output = ""
// // // for(var i = 0; i < times; i++) { output += string }
// // // return output }
// // // repeat("Hello world!",2) // "Hello world!Hello world!"

// // // function repeatStr (n, s) {
// // //     return s.repeat(n);
// // // }


// // // function repeatStr (n, s) {
// // //     var finalstr = '';

// // //     for (var i = 0; i < n; i++){
// // //         finalstr = finalstr+s;
// // //     }

// // //     return finalstr;
// // // }

// // // console.log(repeatStr(6, 'hi'))



// // // function noSpace(x){
// // //     return x.split(' ').join('')
// // // }

// // // console.log(noSpace('he llo wo rld'));

// // // if (condition) {
    
// // // // }
// // // function name(params) {
// // //     for (let i = 0; i < args.length; i++) {
// // //         const element = array[i];
// // //  var str = ('world')
// // // function solution(str){
// // //   str.split(' ').push('row')
// // //   }
// // // console.log(str);
// // // Ex: n=5 returns 5+4+3+2+1=15

// // //function summation(num) {
// // //     // loop up to num adding the index each time
// // //     var totalsum = 0
// // //     for (i=0; i<=num; i++){
// // //         totalsum = totalsum + i
// // // // totalsum = 0 + 0
// // // // totalsum = 0 + 1
// // // // totalsum = 1 + 2
// // // // totalsum = 3 + 3
// // // // totalsum = 6 + 4
// // // // totalsum = 10 + 5
// // //     }
// // //     return totalsum
// // // }
// // // //   console.log(summation(5));
// // // // //   console.log(summation(10));
// // // // //   console.log(summation(8));

// // // // var fruits = ['apple', 'banana', 'orange', 'pineapple', 'kiwi']

// // // // function fruta(foods){
    
// // // //     var totalfruits = 0;

// // // //     for (var i = 0; i < foods.length; i++){

// // // //         totalfruits = totalfruits + 1;
// // // //     }
// // // //     return totalfruits;
// // // // }

// // // // console.log(fruta(fruits))// Question 3:
// // // // Given an arry of of first & last names (see below), write a function that returns an array of first names
// // //         // Example array: ['Patrick Francois', 'Mitsie Paisley', 'George Francais', 'Deboraht Neal']
// // //             // Resulting output: ['Patrick', 'Mitsie', 'George', 'Deboraht']
// // //             //Hints: 
// // //                 // 1: use an array instead of a number for our accumilator
// // //                 // 2: within the loop use the .push() method to add items into the array 
// // // // creating an array with first and last names
// // // var fullnames = ['Patrick Francois','Mitsie Paisley','George Francais','Deboraht Neal']
// // // //create a function with to start my loop.
// // // function fullname(fullNA){
// // //     var firstname = [];
// // //     for (var i = 0; i <fullNA.length; i++){
    
    
// // //     var Newname = fullNA[i]
// // //     var first = Newname.split(' ')[0]

// // //     firstname.push(first);
    
// // //     }

// // //     return firstname;
// // // }
// // // console.log(fullname(fullnames));
// // // Level 0:
// //     // Write out 3 functions which don’t require an argument or parameter. 
// //     //     They return:
// //     //         Hello World!
// //     //         Good Morning World!
// //     //         Goodnight World!
// // function greeting(you) {    
    
// //     return you// }
// //     console.log(greeting('Hello World!'));  

// //     var GM = Hey.replace('Hello', 'Good Morning')
// //     console.log(GM);

// //     var GN = GM.replace('Good Morning', 'Goodnight')
// //     console.log(GN); 
    

// // // // // Level 1:

// // // //     // Write out 3 functions which take in a number and perform a mathematical operation and return the result
// // // //         // Add
// // //         // Multiply
// // //         // Divide

// // function addition(A1,A2){
    
// //     return A1 + A2
    
// // }
// // console.log(addition(70,90));

// // function Multiplication(A1,A2){
    
// //     return A1 * A2
        
// // }
// // console.log(Multiplication(70,90));
// // var num1 = 200
// // var num2 = 40
// // function Divide(A1,A2){
    
// //     return A1 / A2
            
// // }
// // console.log(Divide(num1,num2));
          
// // //     // Write out 3 functions which take in a string and return 
// // //         // The first character 
// // //         // The last character
// // //         // The middle character

// // var whylord = 'This is Crazy'

// // // function firstchar(param){
// // //     var firstletter = param.slice(param.length/2, (param.length/2) +1) 

// // //     return firstletter

// // // }
// // // console.log(firstchar(whylord));

// // // var whylord = 'This is Crazy'

// // // function middlechar(param){
// // //     var middleletter = param.slice(5, 6) 

// // //     return middleletter

// // // }
// // // console.log(middlechar(whylord));
// // //     // Create 3 functions which take in an array and return 
// // //         // The first element 
// // //         // The last element 
// // //         // The middle element

// // // console.log(fruta(fruits))

// // // level 0
// //     // create and invoke a "hello world" function that will always say hello world
// //     function greeting(params) {
// //         return "Hello World!"
// //     }

// //     console.log(greeting());
    
// // // level 1 
// //     // Q1:
// //         // create and invoke a function that takes in a name and produces hello + givenName + !
// //             // input: 'Nic'
// //             // output: Hello Nic!
           
// //             function output(name) {
// //                 return 'Hello ' + name + '!'
// //             }
// //             var user1 = "Nat"
// //             var user2 = "Bibi"
// //             console.log(output(user1));
// //             console.log(output(user2));
// //            // or 
// //             function output(name) {
// //                 return 'Hello' + ' ' + name + '!'
// //             }
// //             console.log(output("Nat"));

// //     // Q2: 
// //         // create a function that takes in one number and doubles it
// //         function doublenum(num) {
// //             return num * 2
// //         }
// //         console.log(doublenum(6));
// //         console.log(doublenum(20));
// //         console.log(doublenum(200));
// //         console.log(doublenum(1200));
        
// //     // Q3:
// //         // create a function that takes in a number and triples it
// //         function triplenum(num2) {
// //             return num2 * 3
// //         }
// //         console.log(triplenum(6));
// //         console.log(triplenum(20));
// //         console.log(triplenum(200));
// //         console.log(triplenum(1200));
// // // level 2
// //     // Q1: 
// //         // create a function that takes in a number and tells us if it is divisible by 2
// //             // requires an if statement
// //             function statement(num) {
// //                 if (num %2 === 0) {
// //                    return true
// //                 }
// //                 else {
// //                     return false    
// //                 }
                
// //             }
// //             console.log(statement(650));
// //             console.log(statement(390));
// //             console.log(statement(252));
// //             console.log(statement(355));
            
// //     // Q2: 
// //         // create and invoke a function that takes in a first and last name and produces hello + firstName
// //         function fullname(newname) {
// //             var name = fullname.split('')
// //         }
// //         console.log(fullname('Natalie'));
// // level 3:
//     // Q1: 
//         // create a function that takes in a number and tells us if it is divisible by both 2 & 3
//             // requires an if statement
// // level 4:
//     // Q1: 
//         // create a function that returns an array of all the smaller positive numbers that are divisible by either 2 or 3 
//             // requires an if statement

//             //5/20/20

// // level 0
//     // Q0.1 create a function that always greets us ( Hello World Function )
//         // example:
//             // no input
//             // output: "Hello!"
// function Greeting(){
//     return "Hello!"

// }
// console.log(Greeting());

// // level 1:
//     // Q1.1 
//         // Create a function that takes in a string and returns the second character
// function string(secondcha) {
    
//     return secondcha.slice(1,2);
//     }
// console.log(string('second character'));

//     // Q1.2
//         // Create a function that takes in an array and returns the second element
//     var arr = ['this', 'is', 'frustrating'];
//         function element(secondel) {
       
//         return arr.splice(1,1);
//     }
//     console.log(element(arr))

//     // Q1.3
//         // Create a function that takes in an array of birds and adds three birds
//             // the birds get added one to the front, one to the back, and one at the second index

//             // let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
//             // let bird1 = 'Quaker';
//             // let bird2 = 'Cockatoo';
//             // let bird3 = 'Kingfisher';

//     var firstbirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
    
//     function birds(allbirds){
        
//         allbirds.push('Cockatoo');
//         allbirds.unshift('Quaker');
//         allbirds.splice(2,0, "Kingfisher");
//             return allbirds
//     }
//     console.log(birds(firstbirds))

//     // Q1.4
//         // Create a function that takes in a string and gives us the first three letters

//     var gettingthere = "We're about this life!!"

//     function str(first3){
//         var letsgo = gettingthere.slice(0,4)
//         return letsgo
//     }
//     console.log(str(gettingthere));
    

//     // Q1.5
//         // Create a function that takes in an array and combines the elements into a string

//     var thisistricky = ["Let's", "Do", "This", "Nat!"]
//     function Switch(str) {

//         var newstr = thisistricky.join(',', " ") 
//             return newstr.replace(',', ' ')
//     }
//     console.log(Switch(thisistricky));

// // level 2:
//     // Q2.1
//         // Create a function that takes in a string and returns the last character

//     // Q2.2
//         // Create a function that takes in an array and returns the last element

// // level 3:
//     // Q3.1
//         // Create a function that takes in a string and returns the central character
//     // Q3.1
//         // Create a function that takes in an array and returns the central element

// // level 4:
//     // Create a function that searches for all numbers inside strings in a given array and removes them 
//         // input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
//         // output = ['B', 'RTX', 'Hello World', 'HWD']


// Pair programming loop practice

// Create a function which takes in an array which only contains strings. 
// let seasons = ['Winter', 'Autumn', 'Spring', 'Summer']

// function lastletters(arr){
//     let seasons2 = []
//     for(let i = 0; i < arr.length; i++){
       
//        let sea = arr[i]
//        seasons2.push(sea.slice(-1))

//     }      
//      console.log(seasons2);

// }
// lastletters(seasons);

// // The function will iterate over a given array and return the last character of every element. 
    // input: let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];
    // output: ['r', 'n', 'g', 'r'];

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.
    let a = ten
    let b = 3
    let c = five
function num(Multiplication) {
    
    return a/c
}

console.log(num());
