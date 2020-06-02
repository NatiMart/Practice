//OBJECTS
    //Declaring an oject
         //Generic Example:
            // obj = {
        //      name:'Nat'
            
// var personobj = {
//     name: 'Nat',
//     interests: ['dancing', 'reading', 'kids', 'Jesus'],
//     age: 33,
// }


// console.log(personobj.name);
// console.log(personobj.interests);
// console.log(personobj.age);

// personobj.email = 'naty72912@gmail.com';

// console.log(personobj.email)

// personobj.email = 'naty72812@hotmail.com'
 
// console.log (personobj.email)


// Practice 1:
// Task 1: Creating an object
// Create an object called car
// Give it 5 key value pairs including; color, numberOfWheels, and brand. 
// Task 2: Changing Stuff
// Using dot notation 
// 2a: Change the color
 
// Task 3: Adding Stuff
// Add numberOfSeats
// Add licensePlate
// End of practice one
//______________________________________________________________________________________________________________
 
// var Cars = {
//     Color: ['Matte Forest Green', 'Candy Apple Red', 'Matte BLack'],
//     Numberofwheels: 4,
//     Brands: ['Jeep Wrangler Rubicon', 'Dodge Charger Hellcat'],
//     RIMstyle: 'Wheel Vector Matte Black',
//     Interior: ['Leather Black', 'Leather Red']
// }

// Cars.Color = ['Matte Forest Green', 'Candy Apple Red', 'Matte BLack', 'Neon Green'],
// console.log(Cars)


// Cars.Numberofseats=5
// Cars.licenseplate='SHNACK7';

// console.log(Cars)


//Practice 2
 
// Task 1:
// Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
// Task 2:
// Iterate through the cars and do the following tasks
// Change the color
// Add numberOfSeats
// Add licensePlate
// (Difficult) Make each one unique

// var Cars = {
//     Color: ['Matte Forest Green', 'Candy Apple Red', 'Matte BLack'],
//     Numberofwheels: 4,
//     Brands: ['Jeep Wrangler Rubicon', 'Dodge Charger Hellcat'],
// }

// console.log(Cars);

// Q1: 
    // Task 1: Creating an object
        // Create an object called sport
            // Give it 3 key-value pairs including the number of players, required items and one other thing.

var volleyball = {

    Players: 6,
    RequiredItems: ['volleyball', 'sneakers', 'knee pads', 'water bottle'],
    Blockers: ['Jean Marie', 'Locust Valley'],
}

    // Task 2: Changing Values
        // Using dot notation 
            // 2a: Add a required item to the current list of required items
                // Note:
                    // Your required items likely should be an array
                    // Don't just re-write your items, add the new one to the existing list

console.log(volleyball)

volleyball.RequiredItems.push('Talent');
console.log(volleyball)
            // 2b: Write code that increases the number of players by one
volleyball.Players = 7
console.log(volleyball)

    // Task 3: Adding Stuff
        // Add country of origin
        // Add a boolean for if shoes are required or not
volleyball.country = ['Dominican Republic', 'Puerto Rico', 'Spain','Greece', 'Cuba'],
volleyball.reqshoes = true // This is the boolean
console.log(volleyball)
// Q2:
    // Task 1: Creating an object
        // Create an object called house
            // Give it 3 key-value pairs including; size, county, and floors. 

    // Task 2: Changing Values
        // Using dot notation 
            // 2a: Change the size of the house
            // 2b: Write code that dynamically increases the number of floors by one no matter the current number of floors
                // AKA 1 floor would give 2. 
                // 2 would give 3. 
                // 4 would give 5 etc...

    // Task 3: Adding Stuff
        // Add numberOfAdults
        // Add numberOfKids

    // Task 4: Calculate (fake) cost!
        // if each person costs 10 
        // and your totalCost is size multiplied by the cost of all people
        // calculate the totalCost
        // add cost to your original house object
