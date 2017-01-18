////typeof
typeof e.g. typeof userInput === 'string' || 'boolean'

//Convert String to Number
var myStr = '123';
Number(myStr)
//123

//Not a Number
NaN

//eval
eval()
eval('3 * 3 + 2') //-> 11
eval('2 + 2') //-> 4
eval(5 + '5'); //-> 55

var myVar = '12+3';
eval(myVar).toString() //-> "15"

var x = 10;  
eval("3 * x + 2"); //->32
//can perform math on a string but should be used sparingly
//can even check for variables contained within the string
//without breaking them out

var x = 10;
var y = 10;
eval(y * x); //-> 100

////isNaN()
var balls = NaN;
isNaN(balls); //true

var bat = 'fruit';
isNaN(bat); //true

var number = 123;
isNaN(number) // false

////break - Should ONLY be used with SWITCH statements
break


//here if you don't use break it will run through the loop
//5 times

var myStr = 'dog';
console.log(typeof myStr === 'string'); //true
console.log(typeof myStr); //string
console.log(typeof myStr === 'number'); //false

//arguments
arguments 
//reserved variable inside every function
//variable is an array that corresponds to the parameters passed
//to a function, even if function has no parameters

function myFunc(){
  console.log("Number of arguments: " + arguments.length); //prints: "Number of parameters: 3"
  for(var i=0 ;i < arguments.length; i++){
    //prints: "Parameter 0: 2", "Parameter 1: a", and "Parameter 2: b"
    console.log("Parameter " + i + ": "+ arguments[i]);
  }
}
myFunc(2, "a", "b"); //myFunc is called with 3 parameters

//logical / comparison operators

//1. CORRECT format
if((phoneNumber.length >= 10 && phoneNumber.length <= 13) !== true){
	validNumber = false;
}

return validNumber; 

//combined operators
var num = 3;
num += 3; 
//6

var num = 5;
num *= 10;
//50

//delete
delete //removes items from an array, but creates holes
var residentEvil = ["RE:Make", "Resident Evil Code Veronica", "Resident Evil Outbreak"]
delete residentEvil[0];
//[undefined × 1, "Resident Evil Code Veronica", "Resident Evil Outbreak"]


//Length Property can be used on arrays and strings
myArray.length;
myStr.length; 

//////////////////////////
//ValueOf
////////////////////////
var date = 'October 15, 1986 11:23:0';
var convertDate = new Date(date);
convertDate.valueOf(); //-> 529777380000

var date = 'spot';
var convertDate = new Date(date);
convertDate.valueOf(); //-> NaN

//////////////////////////
//Arrays
//////////////////////////

//.includes()
myArr.includes();

//Join
.join(); //jconverts an array into a string
var myArr = ['metal', 'gear', 'solid'];
myArr.join(',');  //-> "metal,gear,solid"
myArr.join('x'); //-> "metalxgearxsolid"
myArr.join('-'); //-> "metal-gear-solid"

//Sort
.sort()
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort()
//["apples", "bananas", "cherries"]

var numbers = [15, 3, 55, 76, 1, 3];
numbers.sort();
// [1, 15, 3, 3, 55, 76]

//concat
.concat()
var arr1 = ['snow', 'ice', 'frost'];
var arr2 = ['green', 'verdant', 'forest'];

arr1.concat(arr2);
// 'snow', 'ice', 'frost', 'green', 'verdant', 'forest'

var spookyArr = ['ghost', 'bat', 'vampire'];
spookyArr.concat('mummy');
//['ghost', 'bat', 'vampire', 'mummy']



/////////////////////////////////////////////
///SPLICE + / - Adding and Removing Items to an Array with 
/////////////////////////////////////////////

///adding
var myArr = ['dracula', 'vampire', 'cross', 'rosary'];
myArr.splice(1, 0, 'richter', 'alucard');
//will return [] in console, and any items from array
//that were removed, none in this case
console.log(myArr);
// ["dracula", "richter", "alucard", "vampire", "cross", "rosary"]


//subtracting
var myArr = ['dracula', 'vampire', 'cross', 'rosary'];
myArr.splice(1, 1, 'horror', 'dread');
// ["dracula", "horror", "dread", "cross", "rosary"]

////////////////////////
///Slice - Can Cut Along The Permiter 
////////////////////////
var fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
var citrus = fruits.slice(0,3);
//orange, lemon

/*can also just enter in one parameter for slice to mark
the beginning of the slice*/

var spooky = ['dracula', 'ghost', 'bats', 'ghouls', 'goblins'];
spooky.slice(3);
// ["ghouls", "goblins"]

spooky.slice(2)
//["bats", "ghouls", "goblins"]

////////////////////////////////////////
//Slice - Cloning Arrays with Slice (!not Splice!)
////////////////////////////////////////
var tmnt = [
	'leonardo',
	'donatello',
	'raphael',
	'michaelangelo'
];

var cloneArr = tmnt.slice();
//["leonardo", "donatello", "raphael", "michaelangelo"]

.push();
.pop();

.shift();
.unshift();

//indexOf
.indexOf();
var myPets = ['bird', 'cat', 'dog', 'bird'];
myPets.indexOf('dog'); //-> 2
myPets[2]; //-> dog

myPets.indexOf('cat'); //-> 1
myPets[1]; //-> cat

myPets.indexof('goat'); //-> -1, returns -1 if not present
//with indexOf it has to be an EXACT match 

myPets.indexOf('bird') //-> 0
//notice 'bird' is present twice in the array
//indexOf will return the FIRST instance 

// *remember* if you just want to check what value a certain
// index holds, just do


//add examples here filter, map, reduce


//filter - evaluate items in array as true or false,
//return items that are true to filter out
.filter();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var isEven = numbers.filter(function(value){
	if(value % 2 === 0);
	return value;
});

//map transforms values in an array
.map();

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
	return number * 2;
}).map(function(number){
	return number + 1;
});


.reduce();

delete  //will create holes in array of undefined

//////////////////
//Strings
//////////////////

//Split convert string to array
var bird = 'green parrot';
bird.split();
//['green parrot']

var pets = 'spot, frank, jim';
pets.split(',');
//[spot, frank, jim]

////Convert Number to String
var num = 123; 
num.toString();
//'123'

////substr
var string = 'hello world banana';
console.log(string.substr(0, 4));
//hell

////trim()
//removes spaces at the beginning and end
//of a string
var myStr = 'Sega Genesis';
myStr.trim() //->

///////////////
////replace(str1, str2)
///////////////

var myStr = 'Its a dark night, on halloween!'
myStr.replace('!','')
//'Its a dark night, on halloween'

var string = 'hello world banana';
console.log(string.reaplce('world', 'dong'));



////toUpperCase();
var string = 'why are you yelling?!!!';
console.log(string.toUpperCase(string));

////toLowerCase();
var string = 'MUTE THIS LINE';
console.log(string.toLowerCase(string));

/////////////////
////charAt();
/////////////////
var string = 'Fruit bat';
console.log(string.charAt(0)); //F


var myStr = "Its a dark night, on halloween..."
myStr.charAt(0) //I
myStr.charAt(1) //t
myStr.charAt(2) //s
myStr.charAt(6) //d

myStr.charAt(0) === 'I';
//true

var string = 'Fruit bat';
console.log(string.charAt(string.length - 1));
//t
string.charAt(0 + 1); //-> r

var myStr = 'dog';
myStr.charAt(0) //-> 'd'
myStr.charAt(0) === 'd'; //-> true

//removing '.' from strings
var myStr = '...da...rk...'; //length 7

	for(var i = myStr.length - 1; i > 0; i--){
		if(myStr.charAt(i) === '.'){
			myStr = myStr.replace(myStr[i], '');
		}
	}
//this code initially didn't work until I changed the loop
//to go backwards

//////////////////////
////split(seperator)
//////////////////////

//splits the STRING based on the seperator and RETURNS an ARRAY
.split();

var string = 'metal gear solid';
string = string.split(); 
console.log(string);
//["metal gear solid"]

var string = 'metal gear solid';
string = string.split();
string.split(', ');
//["metal", "gear", "solid"]


//////////////////
//Numbers
//////////////////

///////
//// Can Convert a String to Number 4 Different ways
///////


//// 1. toString 
var num = 9; 
num.toString();
//'9'

//// 2. parseInt
//~~~~~~Can use parseInt to convert a STRING to a NUMBER!!!~~~~~~
var a = '10';
parseInt(a); //-> 10 

var b = '123';
parseInt(b); //-> 123

//// 3. parseFloat

//// 4. + unary opertor

////Precision (controls decimal points and rounds up)
var num = 29.55
num.toPrecision(3);
//29.6

////Fixed 
var num = 2.374;
num.toFixed(1);
//2.4

var num2 = 2.374;
num.toFixed(4)
//2.3740

////Absolute Value
var myNum = -200;
Math.abs(myNum);
//200

////Math.random
var number = Math.floor(Math.random() * 6);
//this variant can produce 0 which is fine forsomething like a RGB
//guessing game where you want 0 to be a possibility

var number = Math.floor(Math.random() * 6) +1;
//generates a random # between 1 and 6
//good hwen you don't want to be able to produce 0 like a dice roll


//////////////////
//Operators
//////////////////

////Ternary Operator
var a = 5;
var oddOrEven = a % 2 === 1 ? 'odd' : 'even';
console.log(oddOrEven);

//Objects
//Two ways To create objects
//#1 Object literal (prefered method)
var person = {
	name: 'Chris Feltus',
	age: 29
}

//#2 using new Object keyword
var person = new Object();
person.name = 'Chris Feltus';
person.age = 29;

//dot notation is easier BUT
//bracket notation is used when the property name is a VARIABLE or 
//contains a special character


////////////////////////////
//Accessing Information
////////////////////////////


//Chaining 
var parrot = 'luna, is, a, bird'

parrot.split(',').length;
//parrot.split ['luna', 'is', 'a', 'bird']
//parrot.split.length = 4;

parrot.split(',').slice(2);
//['a', 'bird']

//Multidimensional Arrays
var multiDArr = [
	['Leonardo', 'Donatello', 'Michaelangelo', 'Raphael'],
	['Zitz', 'Pimple', 'Rash']
];

multiDArr[0][0]
// "Leonardo"

multiDArr[1][0]
// "Zitz"


//Objects

//2 ways to create Objects

//Object Literal 
var person = {
	name: 'Chris F',
	age: 29
}

//using new keyword
var person = new Object();
person.name = 'Chris F';
person.age = 29;

//can also do this with arrays, which are also objects

var spookyArr = new Array ('ghost', 'vampire', 'lantern')


//Accessing informtaion in Objects
var bird = {
	name: 'luna',
	color: 'green',
	age: 1
}

//bracket notation
bird['name']; //'luna'
bird['age']; //1
bird['color']// 'green'

//dot notation
bird.name
bird.age
bird.color

//Object.keys - listing properties in an object


var game = {
	name : 'Super Metroid',
	system: 'SNES',
	players: 1
}

Object.keys(game); //-> ['name', 'system', 'players']

Object.keys(game)[0]; //->'name'
Object.keys(game)[1]; //->'system'
Object.keys(game)[2]; //-> 'players'

Object.keys(game).length //-> 3

//["name", "system", "players"]
//Object.keys(game).indexOf('players'); -> 2

//remember 'keys' is just a synonym for 'properties'

//if we just want a list of properties in an object
//we can do that with this it returns an array of the properties



//Accessing information in [nested] Objects
var people = {
	george: {
		firstName: 'George',
		age: 28
	}
},

	bob: {
		firstName: 'Bob',
		age: 32
	},
	stan: {
		firstName: 'Stan',
		age: 55
	}
};

people.george //shows george object
people['george']['firstName']
people.george['firstName']

people.bob.age
people.bob['age']
people['bob']['age']

//for in loop
var bird = {
	name: 'luna',
	age: 1,
	color: 'green'
}

for(var p in bird){
	console.log(p + ' ' + bird[p]);
}
//here p is the property name (name, age, color)
//bird[p] is the property value ('luna', 1, 'green')
//keys are also called properties

//Array of Objects
var post = [
	{
		title: 'cats are mediocre',
		author: 'colt',
		comments: ['awesome post', 'terrible post']
	},
	{
		title: 'cats are actually awesome',
		author: 'cat luvr',
		comments: ['<3', 'Go to hell I hate you']
	}
]

post[0].comments //gives you whole array ['awesome post', 'terrible post']
post[1].comments[0] //'<3'
post[0].comments[1] //'terrible post'


//Array of Objects example 2

var movies = [
	{
		name: 'Alien',
		hasWatched: true,
		rating: 5
	},
	{
		name: 'The Iron Giant',
		hasWatched: true,
		rating: 5
	},
	{
		name: 'Zootopia 2',
		hasWatched: false,
		rating: 5
	}
]

for(var i = 0; i < movies.length; i++){
	var string = 'You';

	if(movies[i].hasWatched !== false){
		string += ' have seen ' + movies[i].name + ' - ' + movies[i].rating + 'stars';
		console.log(string);
	} else {
		string += ' have not seen ' + movies[i].name + ' - ' + movies[i].rating + ' stars';
		console.log(string);
	}
}

//Adding Methods to Objects
var bird = {
	name: 'Arya',
	age: 1,
	friends: ['Sammy', 'Mars'],
	song: function(){
		console.log('Tweet tweet tweet')
	}
}

bird.song(); //Tweet tweet tweet

var mathCube = {
	add: function(x,y){
		return x + y;
	}
}

mathCube.add(5,4) //9

///////////////////
//Date object
///////////////////

//Creating Dates

//Method 1
var date1 = new Date('October 15, 1986 11:23:07');

//Method 2
var date2 = new Date(2016, 08, 05, 0);
//order for arguments is year, month, date, time

//Nested Loops (for x2 inner and outer loops)
for(var i = 2; i < 500; i++){
    isPrime = true;

    for(var j = 2; j < i; j++){
        if(i % j === 0){
        isPrime = false;
        }
    }

    if(isPrime){
        console.log('you got a prime', i);
    }
}

//Switch Block
var gemStone = Number(prompt('What was your test paper score?'));
switch(gemStone){
  	case 1:
  	console.log('Sapphire');
  	break;
  	
  	case 2:
  	console.log('Ruby');
  	break;
  	
  	case 3:
	console.log('Opal');
	break;

  	case 4:
  	console.log('Emerald');
  	break;
  	
default:
    console.log('Diamond');
    break;
}


Array.prototype.findIndex()


// (0RGSDOFCJftli;:.:. .  )
//  T""""""""""""""""""""T
//  |.;....,..........;..|
//  |;;:: .  .    .      |
//  l;;;:. :   .     ..  ;
//  `;;:::.: .    .     .'
//   l;;:. ..  .     .: ;
//   `;;::.. .    .  ; .'
//    l;;:: .  .    /  ;
//     \;;:. .   .,'  /
//      `\;:.. ..'  .'
//        `\;:.. ..'
//          \;:. /
//           l; f
//           `;f'
//            ||
//            ;l.
//           ;: l
//          / ;  \
//        ,/  :   `.
//      ./' . :     `.
//     /' ,'  :       \
//    f  /  . :        i
//   ,' ;  .  :        `.
//   f ;  .   :      .  i
//  .'    :   :       . `.
//  f ,  .    ;       :  i
//  |    :  ,/`.       : |
//  |    ;,/;:. `.     . |
//  |___,/;;:. . .`._____|
// (QB0ZDOLC7itz!;:.:. .  )
 // """"""""""""""""""""""
////////////Time////////////

new Date(); //creates a new date for TODAY at CURRENT TIME

var date1 = new Date('October 15, 1986 11:23:07');

Date.now() //-> 1476409492007
//gets current date as a number

date1.getTime() //-> 529777387000
getTime() 
//converts a date to number

// ~~~~~~~
// ~~~~~~~~~~~~~~~~

getDay()
//gets day of the week (0 - 6)

getFullYear()
setFullYear()
//gets full year e.g. 1987

getMonth()
setMonth()
//gets month of the year (0 to 11)

getDate()
setDate()
//gets the day of the month (1 to 31)

getHours()
setHours()
//gets the hour of the day (0 to 23)

getMinutes()
setMinutes()
//gets the minutes (0 to 59)

getSeconds()
setSeconds()
//gets seconds (0 to 59)

getMilliseconds()
setMilliseconds()
//gets milliseconds (0 to 999)

Date.parse()

//Can use a single number and it works correctly apparently

var a = new Date('10');
a.getTime();
//1001912400000

var b = new Date ('October');
b.getTime();
//NaN



/////////////////
///DOM
/////////////////

element.classList

vs.

element.className


element.id 
//gets element id

var li = document.createElement('li');
//<li></li>


//CSS

h1 {
	letter-spacing: 2px
}