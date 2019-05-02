/*var firstName='Julie';
console.log(firstName);

var lastName='Gumerman';
var age=36;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

*/

/*var firstName='Julie';
var age=36;
job='teacher';
console.log(job);

console.log(firstName + ' ' + age);

var job, isMarried;
isMarried=false;

alert(firstName + ' is a ' + age + '-year-old ' + job + '. Is she married?' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);
*/

/************
*Basic operators
/*
var year, yearJulie, yearLisa;
year = 2018;
yearJulie=36;
yearLisa=31;
//Math Operators
console.log(yearLisa);

//Logical Operators

var julieOlder=yearJulie > yearLisa;
console.log(julieOlder);


//typeof operator
console.log(typeof julieOlder);
console.log(typeof yearLisa);

/***************
*Operator precedence

var now, julieBirthYear, legalAge, isLegalAge;
now=2018;
julieBirthYear=1982;
legalAge=18;

//multiple operators

var isLegalAge = now - julieBirthYear >= legalAge;
console.log(isLegalAge);

//grouping
var ageJulie, ageLisa, average;
ageJulie=now-julieBirthYear;
ageLisa=31;
average = (ageJulie + ageLisa) / 2;
console.log(average);

//multiple assignments;
var x, y;
x = y =(3 + 5) * 4-6; //8 * 4 -6//32-6//26
console.log(x, y);

//more operators

/*
var massJohn, heightJohn, massMark, heightMark, bmiMark, bmiJohn, compareBMI;

massJohn=30;
heightJohn=1.5;
bmiJohn=massJohn/(heightJohn*heightJohn);
massMark=28;
heightMark=1.4;
bmiMark=massMark/(heightMark*heightMark);
compareBMI=bmiMark>bmiJohn;
console.log("Is Mark\'s BMI higher than John\'s?" + " " + compareBMI);
*/

/* if-else statements */

/*
 var nameFirst = 'Julie';
 var relationshipStatus = 'single';

 if (relationshipStatus === 'married') {
 	console.log(nameFirst + 'is married!');
 } else {
 	console.log(nameFirst + ' will be single for life!')
 }

var isMarried = false;

 if (isMarried === true) {
 	console.log(nameFirst + 'is married!');
 } else {
 	console.log(nameFirst + ' will be single for life!');
 }


var massJohn, heightJohn, massMark, heightMark, bmiMark, bmiJohn, compareBMI;

massJohn=30;
heightJohn=1.5;
bmiJohn=massJohn/(heightJohn*heightJohn);
massMark=28;
heightMark=1.4;
bmiMark=massMark/(heightMark*heightMark);

//compareBMI=bmiMark>bmiJohn;
//console.log("Is Mark\'s BMI higher than John\'s?" + " " + compareBMI);

if (bmiMark > bmiJohn) {
	console.log('Mark\'s BMI is higher than John\'s.');
} else {
	console.log('John\'s BMI is higher than Mark\'s.')
}


/*var firstName, age;
firstName='John';
age=12;

if (age<13) {
	document.getElementById("heading").style.backgroundColor = "blue";
} else if (13<=age && age<20){
	document.getElementById("heading").style.backgroundColor = "red";
}
else {
	document.getElementById("heading").style.backgroundColor = "pink";
}

*/


/************************
*Ternary Operator and Switch Statement
*/
//var kidName = 'Cameron';
//var age = 36;

//age >= 21? console.log (kidName+ 'drinks beer')
//: console.log(kidName + ' needs soda');


//Function expression
/*
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids English.';
		case 'dirtbag':
			return firstName + ' snowboards every damn day.'
		case 'programmer':
			return firstName + ' makes a ton of money';
		default:
			return firstName + ' has no idea what she is doing with her life.'
	}
}

console.log(whatDoYouDo('dirtbag', 'Julie'));
console.log(whatDoYouDo('programmer', 'Lisa'));




var dog = function(dogName) {
	switch(dogName) {
		case 'Reverie':
			return dogName + ' is a nature-loving whoodle.';
		case 'Fran':
			return dogName + ' is a fun-loving aussiedoodle';
		default:
		return dogName + ' is not one of ours, but we are sure he is a good boy';
	}
}

console.log(dog('Reverie'));
console.log(dog('Fran'));






//arrays/////////////////

//initialize new array
/*
var names = ['Julie', 'Mom', 'Papa Bear'];
var years = new Array(1982, 1950, 1948);

console.log(years[2]);

//mutate array data
names[1] = 'Mamasita';
console.log(names);
names[3] = 'Lisa';
console.log(names);

names[names.length] = 'Josiah';
console.log(names);

//different data types

//push, unshift, pop, shift

var julz = ['climb', 'snowboard', 'run'];
console.log(julz);

julz.push('quilt');
julz.unshift('knit');
console.log(julz);
julz.indexOf('snowboard');
console.log(julz.indexOf('snowboard'));

var likesClimb = julz.indexOf('climb') === -1 ?
	'Julie does not climb': 'Julie loves to climb';
	console.log(likesClimb);

//*** coding challenge 3!! ***/
var bill = [124, 48, 268];
var tips = [];
var billTotal = [];

function tipCalc(bill) {
	if (50>=bill) {
		tips.push(bill*.2);
		billTotal.push(bill*.2+bill);
	} else if (bill>50 && bill<200) {
		tips.push(bill*.15);
		billTotal.push(bill*.15+bill);
	} else {
		tips.push(bill*.1);
		billTotal.push(bill*.1+bill);
	}
}

tipCalc(bill[0]);
tipCalc(bill[1]);
tipCalc(bill[2]);

console.log(bill, tips, billTotal);

//***********DIY*******************/
/*
var climbingGear = [15, 60, 125, 500];
var salesTax = [ ];
var gearTotal = [ ];

function gearCost(climbingGear) {
	salesTax.push(climbingGear * .029);
	gearTotal.push(climbingGear * .029 + climbingGear);
}

gearCost(climbingGear[0]);
gearCost(climbingGear[1]);
gearCost(climbingGear[2]);
gearCost(climbingGear[3]);
//The End//



console.log(climbingGear, salesTax, gearTotal);

*/
/*

prompt("Are you a muffin?");
var answer = ['yes', 'no'];

if (answer = 'yes') {
	alert('You are tasty.');
} else if (answer = 'no') {alert('I bet you still taste good.');}

/*more practice

var fruits = ['banana', 'kiwi', 'apple', 'pear'];
fruits[9] = 'apricot';
console.log(fruits);


/*more practice

var instruments = ['mandolin', 'electric bass', 'guitar'];
var words = document.getElementById("heading");
instruments[3]='uke';
words.innerHTML = instruments;

*/

/*****
Objects and properties
***/

//object literal
var julie = {
	firstName: 'Julie',
	lastName: 'Gumerman',
	birthYear: '1982',
	family: ['Mamasita', 'Papa Bear', 'Lisa', 'Josiah', 'Reverie', 'Fran'],
	job: 'teacher',
	isMarried: false
};
console.log(julie.family);
console.log(julie['birthYear']);

var x = 'job';
console.log(julie[x]);
julie.job = 'being awesome';
console.log(julie.job);
//new object syntax
var dawg = new Object();
dawg.nameFirst = 'Reverie';
dawg.birthYear = 2012;
dawg['lastName'] = 'Gumerman';

console.log(dawg);

/*
if (dawg.nameFirst === 'Reverie' && julie.birthYear === '1982') {
	document.getElementById("heading").innerHTML = 'We belong together!'
} 

*/
var julie = {
	firstName: 'Julie',
	lastName: 'Gumerman',
	birthYear: '1982',
	family: ['Mamasita', 'Papa Bear', 'Lisa', 'Josiah', 'Reverie', 'Fran'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

julie.calcAge();
console.log(julie);

var jefferson = {
	birthYear: '1743',
	decIndependence: '1776',
	presidencyYear: '1790',
	calcPresidencyAge: function() {
	this.presidencyAge = this.presidencyYear - this.birthYear;
},
	calcYears: function() {
	this.timeLapse = this.presidencyYear - this.decIndependence;
	}
};
jefferson.calcPresidencyAge();
jefferson.calcYears();
console.log(jefferson);

//Methods and Objects!!!!


var Mark = {
	name: 'Mark',
	mass: '90',
	height: '50',
	calcMass: function() {
		this.BMI = (this.mass)/(this.height*this.height);
	}
};

Mark.calcMass();
console.log(Mark);

var John = {
	name: 'John',
	mass: '98',
	height: '54',
	calcMass: function() {
		this.BMI = (this.mass)/(this.height*this.height);
	}
};

John.calcMass();
console.log(John);


	if(Mark.BMI>John.BMI) {
		console.log(Mark.BMI + Mark.name);
	} else if (Mark.BMI < John.BMI) {
		console.log(John.BMI + John.name);
	} else {
		console.log(John.name + ' is equal to ' + Mark.name);
	}


//***Loops and iterations!!!
//At last!!!

/*
for (var i = 2; i <= 10; i*=2) {
	console.log(i);
}

var julieBean = ['Julie', 'Gumerman', '1982', 'seeker', false];
for (var i = 0; i < julieBean.length; i++) {
	console.log(julieBean[i]);
}
var i = 0;
while(i < julieBean.length) {
	console.log(julieBean[i]);
	i++;
}


//continue and break statements

*/
/*
var julieBean = ['Julie', 'Gumerman', 1982, 'seeker', false];
for (var i = 0; i < julieBean.length; i++) {
	if (typeof julieBean[i] !== 'string') continue;
	console.log(julieBean[i]);
}
*/



jax = {
	nickname: 'brofessor',
	bills: [124, 48, 268, 180, 42],
	tipCalc: function() {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++) {
		var percentage;
		var bill = this.bills[i];

		if (bill < 50) {
			percentage = .2;
		} else if (bill > 50 && bill < 200) {
			percentage = .15;
		} else {
			percentage =.1;
		}

		this.tips[i] = bill * percentage;
		this.finalValues[i] = bill * percentage + bill;
		}
		

	}
}

jax.tipCalc();
console.log(jax);

marty = {
	bills: [77, 375, 110, 45],
	tipCalc: function() {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++) {
		var percentage;
		var bill = this.bills[i];

		if (bill>100) {
			percentage = .2;
		} else if (bill > 100 && 300 < bill) {
			percentage = .1;
		} else { percentage = .25}
		}

		this.tips[i] = bill * percentage;
		this.finalValues[i] = bill * percentage + bill;

	}
}

marty.tipCalc();
console.log(marty);

function calcAverage(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

jax.average = calcAverage(jax.tips);
marty.average = calcAverage(marty.tips);
console.log(marty, jax);
 