


//The assignment starts from here:

/* Exercise: 1
Part I
Declare a variable name company and assign it to an initial value “Integrify Academy”.
Print the string  on the browser console using console.log()
Print the length of the string  on the browser console using console.log()
Change all the string to capital letters using toUpperCase() method
Change all the string to small letters using toLowerCase() method
Cut(slice) out the first word of the string using slice, substr() or substring() method
Check if the string contains a word Academy using includes() method
Split the string into array using split() method
Change Integrify Academy  to Microsoft Academy using replace() method.
What is the index of A in ‘Integrify Academy’ string use charAt()
What is the character code of A in ‘Integrify Academy’ string using charCodeAt()
Use indexOf to determine the position of  the first occurrence of e in Integrify Academy
Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy
Use trim() to remove if there is trailing whitespace at the beginning and the end of the a string.E.g “  Integrify Academy   ”
Use startsWith() method with the string Integrify Academy make the result true
Use endsWith() method with the string Integrify Academy make the result true
 */

/* var company = "Integrify Academy";
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.slice(10));
console.log(company.substr(10, 17));
console.log(company.substring(10, 17));
console.log(company.includes("Integrify"));
console.log(company.split());
console.log(company.replace("Integrify Academy", "Microsoft Academy"));
console.log(company.charAt(10)); //Its 10.
console.log(company.charCodeAt(10)); //Its 65.
console.log(company.indexOf("e"));
console.log(company.lastIndexOf("e"));
console.log(company.trim());
console.log(company.startsWith("Integrify Academy"));
console.log(company.endsWith("Integrify Academy"));
//completed. */
/* 
2.  Declare two variables myAge and yourAge and assign them initial values and log to browser console.
    Output:
I am 25 years old.
You are 30 years old. */

/* {
    var myAge = 25;
    var yourAge = 30;

    console.log(`I am ${myAge} years old. \nYou are ${yourAge} years old.`)
}; */

//completed

/* 3. Get user input using prompt(“Enter your age: ”).If user is 18 or older, give feedback: You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

    Output:
    Enter your age: 30
You are old enough to drive.

    Output:
Enter your age: 15
You are left with 3 years to drive. */
/* 
var drivingAge = 18;
{
    var age = Number(prompt("Enter your age:"));

    if (age >= drivingAge) {
        document.write("you are old enough to drive")
    }
    if (age < drivingAge) {
        var remainingAge = 18 - age;
        document.write(`You are left with ${remainingAge} years to drive`);
    }
}; */

//completed


/* 4. Compare the values of myAge and yourAge using if … else.Based on the comparison log to console who is older(me or you).Use prompt(“Enter your age: ”) to get the age as input.
    Output:
Enter your age: 30
You are 5 years older than me.
 */

/* {
    var myAge = Number(prompt("Enter Your Age To Compare"));
    var yourAge = Number(prompt("Enter Their's Age To Compare"));

    if (myAge > yourAge) {
        document.write(` </br> I am ${myAge - yourAge} years older than you`);
    }
    
    else{
        document.write(` </br> You are ${yourAge - myAge} years older than me.`);
        }
} */
/* 5. Declare an array  variable name itCompanies and assign initial values Facebook, Google, Microsoft, IBM, Apple, Oracle and Amazon.
Print the array using console.log()
Print the number of companies in the array
Print out each company
Capitalize each company and print them out ***
Print the array like this: Facebook, Google, Microsoft, Apple, Oracle and Amazon are big IT companies.
Sort the array using sort() method
Reverse the array using reverse() method */

var itCompanies = ["Facebook", "Google", "Microsoft", "IBM", "Apple", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length + " companies");
console.log(itCompanies.toString().toUpperCase());

console.log(itCompanies.slice(0, 6).join(" , ") + " are big companies ")



console.log(itCompanies.sort());
console.log(itCompanies.reverse()); //reverse

/* 
Iterate the array in question number 5 using a
for loop and print out the items. */

/* 7. Declare a function name printArray.It takes array as a parameter and it prints out. 
 */



function printArray(array) {
    console.log(array);

};

/* 8. Declare a function name reverseArray.It takes array as a parameter and it returns the reverse of the array
(dont’ use method). */

function reverseArray(array) {
    console.log(array.reverse());
}

/* 11. Declare a function name sumOfNumbers.
It takes a number parameter and it adds all the numbers in that range. */

var ourArray = [];

for (var i = 0; i <= 5; i++) {
    if (i === 3000) {
        break;
    }
    ourArray.push(i);
    console.log(ourArray);
}

debugger;
function sumOfNumbers(number) {
    var sum = 0;
    for (var i = 0; i <= number; i++){
    sum = sum + i; 
    }
    return sum; 
    console.log(sum);
}