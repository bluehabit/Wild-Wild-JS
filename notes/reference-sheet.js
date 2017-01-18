//questions
//read more about how he changes CSS properties. 
//It seems to ONLY be style.backgroundColor etc. but I think there
//might be one more
//anyways for the .style type where can I get a full list of these?

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children


//Built-in's
console.log();

//Console.log Multiple Items
console.log(p1Score, winningScore); 

//properties
.length
.replace
.indexOf //for (strings)
//can see if a string contains part of a word
//for example if I make a string 
//var str = 'hello world';
//str.indexOf('hello');
//or str.indexof('w');
//if it doesn't exist you get -1

//methods
.Number(); //I like .Number more because it can return whole #'s and floats'
.parseInt();

//Array Properties and Methods
.indexOf();
.push()
.pop()
.unshift()
.shift()
.slice()
str.charAt(0).toUpperCase() + str.slice(1);

typeof variableName // lets you know what data type a variable contains

//////////////
//loops
/////////////


//For 
for(var i = 10; i < string.length; i++){
	if(i % 2 === 0){
		console.log(i);
	}
}

//For Each
var colors = ['red', 'orange', 'yellow'];

colors.forEach(function(color){
	console.log(color)
})



//////////////
//functions
//////////////

//function declarations
function square(x) {
	total = x * x;
	return x;
}

//function expressions
var square = function(x){
	total = x * x;
	return x;
}

//Function proTip
// --->Can store function call in variable

var squareFour = square(4);

//properties

// 	
// =================     ===============     ===============   ========  ========
// \\ . . . . . . .\\   //. . . . . . .\\   //. . . . . . .\\  \\. . .\\// . . //
// ||. . ._____. . .|| ||. . ._____. . .|| ||. . ._____. . .|| || . . .\/ . . .||
// || . .||   ||. . || || . .||   ||. . || || . .||   ||. . || ||. . . . . . . ||
// ||. . ||   || . .|| ||. . ||   || . .|| ||. . ||   || . .|| || . | . . . . .||
// || . .||   ||. _-|| ||-_ .||   ||. . || || . .||   ||. _-|| ||-_.|\ . . . . ||
// ||. . ||   ||-'  || ||  `-||   || . .|| ||. . ||   ||-'  || ||  `|\_ . .|. .||
// || . _||   ||    || ||    ||   ||_ . || || . _||   ||    || ||   |\ `-_/| . ||
// ||_-' ||  .|/    || ||    \|.  || `-_|| ||_-' ||  .|/    || ||   | \  / |-_.||
// ||    ||_-'      || ||      `-_||    || ||    ||_-'      || ||   | \  / |  `||
// ||    `'         || ||         `'    || ||    `'         || ||   | \  / |   ||
// ||            .===' `===.         .==='.`===.         .===' /==. |  \/  |   ||
// ||         .=='   \_|-_ `===. .==='   _|_   `===. .===' _-|/   `==  \/  |   ||
// ||      .=='    _-'    `-_  `='    _-'   `-_    `='  _-'   `-_  /|  \/  |   ||
// ||   .=='    _-'          `-__\._-'         `-_./__-'         `' |. /|  |   ||
// ||.=='    _-'                                                     `' |  /==.||
// =='    _-'                                                            \/   `==
// \   _-'                                                                `-_   /
//DOM Document Object Model


//"we did it, we climbed the mountain"

///////////////////
//Finding CSS Properties for JS
//////////////////

console.dir(document.body.style);

//short list
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

//long list
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

//reddit thread
https://www.reddit.com/r/learnjavascript/comments/4k2rd0/elementstylebackground_not_appearing_on_mdn_page/

element.style.cssText = 'color: blue';
element.setAttribute('style', 'color:blue') 
//from this page https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
//under setting style paragraph


//////////////////
//Selecting Elements
/////////////////
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

pumpkin.style.color = 'orange';
pumpkin.style.background = 'yellow';

pumpkin.classList.toggle('jack-o-lantern');
pumpkin.classList.add('jack-o-lantern');
pumpkin.classList.remove('jack-o-lantern');
pumpkin.className = 'jack-o-lantern';

pumpkin.contains('seeds');
.onclick
.onchange
.value

pumpkin.textContent = 'pumpkins are orange'//
pumpkin.innerHTML //
pumpkin.innerText

links.getAttribute('href');
links.setAttribute('href', 'http://www.dogs.com/img-06')

document.createItem('element');
element.appendChild(variable);
checkBox.type = 'checkbox';
editInput.type = 'text';


//////////////////
//Event Listeners
//--------------
//
//common events to use: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//
/////////////////

//Method 1: addEventListener
 
element.addEventListener(type, functionToCall);

var button = document.querySelector('button');
 
 button.addEventListener('click', function(){
 	console.log('button clicked');
})


 //Method 2: 
var button = document.getElementsByTagName('button')[0];

button.onclick = addTask;

var addTask = function(){
	console.log('add task...');
};



//Chrome Dev Tools proTip
hit shift + enter to add another line to console

//parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
parentNode.children
parentNode.removeChild
parent.ChildElementcount
parent.firstElementChild
parent.lastelementChild
this.parentNode
parentNode = element.parentNode; 
ChildNode.remove()


//click thing that adds element with function
//experiment this.parentmode



/////////////////
//Function Declaration
/////////////////
function addArray(array){
	//
}

/////////////////
//Function Expression
/////////////////
var addArray = function(){
	//
}

///////////////////
/// HTML Collection
///////////////////