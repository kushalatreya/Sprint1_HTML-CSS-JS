/* function userIdGenerator(number) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#€%&/()=?+ÅÖÄˆ:';
    let userId = '';
    for (let i = 0; i < number; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        userId += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(userId);
}
userIdGenerator(7);



function randomHexaNumberGenerator(){
    let chars = '0123456789ABCD'
    let hexaNumber = '';
    for (let i = 0; i<56; i++){
        let random = Math.floor(Math.random()* chars.length);
        hexaNumber += chars.substring(random, random +1);
    }
    console.log(hexaNumber);
}
randomHexaNumberGenerator();

function userIdGeneratedByUser(){
    let characterNumber = Number(prompt("enter the length "));
    let numberOfIds = Number(prompt("enter the number "));
    let chars = '0123456789qwertyuiopasdgfhjklözxcvbnm1234567890';
    let generatedId = '#';
    let count=0;
    
   
    userIdGeneratedByUser();

    //loop this bitch

    //rgb color generator

    function rgbColorGenerator(){
        const first = Math.floor(Math.random() * 255);
        const second = Math.floor(Math.random() * 255);
        const third = Math.floor(Math.random() * 255);
    
    console.log(`rgb (${first}, ${second}, ${third})`)
    }
    rgbColorGenerator(); */


function displayDateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    console.log(`the date is ${day}/${month}/${year} ${hours}:${minutes}`);
}
displayDateTime();



/* function looping (){
    
    console.log("abcde")
}
   // for
    let numberOfTimes = Number(prompt('enter the number of time to loop'))
   for(let i = 0; i < numberOfTimes; i++){
      
       looping();
   } */
/* 

function printOneToUserInput(){
    let userInput = prompt('userInput');
    for (let i = 0; i<=userInput; i++){ //i++
        console.log(i);
    }
   
}
function printOneToUserInput() 
 */

/* function printOneToUserInput(){
    let userInput = prompt('userInput');
    let i = 0;
    while(i <= userInput){
        console.log(i);
        i++;   //counter   
    }
}
printOneToUserInput() */

/* function printOneToUserInput(){
    let userInput = prompt('userInput please')
    let i = 0;
    do{
        console.log(i);
        i++ ;
    }
    while(i <= userInput);
}

printOneToUserInput()
 

function userIdGeneratedByUser(characterNumber) {
    let chars = '0123456789qwertyuiopasdgfhjklözxcvbnm1234567890';
    let generatedId = '';

        while (generatedId.length < characterNumber) {
            let firstIdIndex = Math.floor(Math.random() * chars.length);
            generatedId += chars.substring(firstIdIndex, firstIdIndex + 1);
        }
    console.log(generatedId);
}
let characters = Number(prompt("enter the length "));
let numberOfIds = Number(prompt("enter the number "));

function multiTimes(numberOfIds, characters) {
for (let i = 0; i < numberOfIds; i++) {
    userIdGeneratedByUser(characters)
}
}
multiTimes(numberOfIds, characters);*/

function lotteryNumerGenerator(){
    let randomLotteryNumber = '#';
    for(let i = 0; i<7; i++ ){
         randomLotteryNumber += Math.floor(Math.random() * 9) + 1 + ' '

    }
    console.log(randomLotteryNumber);

}
lotteryNumerGenerator();

function loopingLottery(){
    
}