/* //4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function areaOfTraingle(){
    let side1 = 5;
    let side2 = 6;
    let side3 = 7
    var perimeter = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
    console.log(`the area of triangle is ${area}`)
}
areaOfTraingle()

//1. Write a JavaScript function to check whether an `input` is an array or not. le
function is_array(input) {
    if (toString.call(input) === "[object Array]")
        return true;
        return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//new  code
function array_Clone() { 
let myArray = [1,2,3,4];
let clone = myArray.slice(0); //to clone the array.

console.log(clone) 
}
array_Clone()

//
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//
function dashBetweenEven(){
    const getNumber = prompt('enter the number for dash dash');
    const string = getNumber.toString();  //to change number into string

    for ( let i = 1; i < string.length; i++){
        if(string[i-1] % 2 === 0 && string[i] % 2 === 0){

        }
    } 
}
dashBetweenEven()
 */
debugger
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 0; x < str.length; x++) {
    if (str[x ] % 2 === 0 && str[x + 1] % 2 === 0) {
        result.push(str[x], '-');
    } else {
        result.push(str[x]);
    }
}
console.log(result.join(''));