// This is my first GitHub practice
// console.log() is used to print (aka log) information into the Command Line Interface (CLI)
//     console.log("Hello World!!")

//     a varible is a symble that stands for another value
//         var x = 2;
//         console.log(1+x);

//      Java script data types
//         String
//         a set of charaters surrouned by quotes"",'',~~,``,
// var name = "Natalie";
//   console.log('Hello, I am ' + name)
// console.logname + `said, "Kaya said, 'Help!"

// var singleQuote = 'Single-quoted';
// var doubleQuote = "double-quoted";
// var backticks = `backticks`;

// back ticks can be used for more complicated stuff
// var multiplepeople = `desmond
// Geo
// nat
// `
// console.log(`My name is ${name}`)

//we can reference a single letter by it's index
//var str = "Freshness"
//Freshness
//012345678

//console.log(str[0]); //F
//console.log('Index 2: ' + str[2] + '.'); //g
//str[0] ="f" // won't work

//Strings are immutable, which means that they cannot be change. The variable can

//var str2 = "Sleepy";
//console.log(str2[1] + str2[2] + str2[3])
//Sleepy
//012345 <-Indices

//var ohsnap = 'abcdefghijklmnopqrstuvwxyz';
//console.log(ohsnap[13] + ohsnap[0] + ohsnap[19])
//Declare str1 and give it a value
//var str = 'Hello'

//Goal is to chamge one letter of str1
//we forget string are immutable and try to swap a letter, this doesn't work
//str[0] = 'J' // hello -> Jello// doesn't work

//we create a new string (str2) and assign it a value by ref. indices of str1
//var str2 = `J${str[1] + str[2] + str[3] + str[4]}`

//We set it equal to str2
//str1 = str2;

//We check to see the value of str1
//console.log(str1);

// var str = "Hello"; // Length is 5 (1-5) where as, index would be 4 (0-4)
// var lengthofstr = str.length
// var laststrchar = str[lengthofstr - 1];
// console.log(laststrchar);

// //get a specific substring
//     //a substring is any small portion of a string
    // var fullname = 'Queen Nat;Marty'
    // var substr = fullname.indexOf(';');
    // var first = fullname.slice(0, substr)
    // console.log(first)
   
    // var fullname = 'Queen Nat;Marty'
    // var split = fullname.indexOf(';');
    // var first = fullname.slice(0, split)
    // var last = fullname.slice(split +1, fullname.length)// the reason we add
    // //the reason we add the plus one is so that the lengtht starts at "L" and not ";"
    // console.log(first) 
    // console.log(last) 



    
    // console.log(substr)
// console.log('Helloworld'.length); //comes out to 10
// console.log('Helloworld'.indexOf('d')); // comes out to 9
// console.log('Helloworld;'.indexOf(';')); // comes out to 10
// console.log('Helloworld'.indexOf(';')); // comes out to 10

// console.log ('Helloworld;'.slice(0,5)) //comes out to hello

// var fullname = 'Queen Natalie Martinez';
// var divider = fullname.indexOf(';')
// console.log(divider); //gives you -1 because the value doesn't exist


// var meme = "ThIS is A MEmE"
// var smallMeme = meme.toLowerCase();
// var bigMeme = meme.toUpperCase();

// console.log(meme)
// console.log(smallMeme)
// console.log(bigMeme)

// // example with no caps
// var fullname = 'natalie martinez'
// var divider = fullname.indexOf(' ')
// var fixedfirst = "N" + fullname.slice(1, divider);
// var fixedlast = "M" + fullname.slice(divider + 2, fullname.length)
// var fixedname = fixedfirst + (' ') + fixedlast;
// console.log(fixedname);

// Write code to convert the following into something for the computer and something for the human;

// var computerText = 'MAN67584758'
// var humanText = 'Manchester Piccadilly' // -> Expected Solution: Computer: MAN67584758, Human: Manchester Piccadilly

// var computerText1 ='GNF5767465'
// var humanText1 = 'Greenfield' // -> Expected Solution: Computer: GNF5767465, Human: Greenfield


// var computerText2 ='LIV5hg65hd7374'
// var humanText2 = 'Liverpool Lime Street' // -> Expected Solution: Computer: LIV5hg65hd7374, Human: Liverpool Lime Street

// var computerText3 ='SYB4f'
// var humanText3 = 'Stalybridge' // -> Expected Solution: Computer: SYB4f, Human: Stalybridge

// var computerText4 ='HUD5767ghtyfyr45'
// var humanText4 = 'Huddersfield' // -> Expected Solution: Computer: HUD5767ghtyfyr45, Human: Huddersfield

// console.log('Computer: ' + computerText + ', Human: ' + humanText)
// console.log('Computer: ' + computerText1 + ', Human: ' + humanText1)
// console.log('Computer: ' + computerText2 + ', Human: ' + humanText2)
// console.log('Computer: ' + computerText3 + ', Human: ' + humanText3)
// console.log('Computer: ' + computerText4 + ', Human: ' + humanText4)

//console.log(stopeating.length);

// var stopeating = "Summer body will not be summer ready"
// var pleasestopeating = stopeating.toUpperCase(); //ask nick about ()
// console.log(pleasestopeating)
//homework 5-5-20
// var mipueblo = 'my home town'
// var casa = mipueblo.indexOf('t')
// var solocasa = mipueblo.slice(2, casa)

// console.log(solocasa)

// var acomerpapa = "Let's eat, Grandpa!"
// var comer = acomerpapa.indexOf (',')
// var a = acomerpapa.slice(5, comer);

// console.log(a)

// // example with no caps
// var fullname = 'natalie martinez'
// var divider = fullname.indexOf(' ')
// var fixedfirst = "N" + fullname.slice(1, divider);
// var fixedlast = "M" + fullname.slice(divider + 2, fullname.length)
// var fixedname = fixedfirst + (' ') + fixedlast;
// console.log(fixedname);

// var alegre = "I'm very happy"
// var yo = alegre.replace('very', 'VERY')
// console.log(yo)