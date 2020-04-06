// let and const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

// destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player; ///
const experience = obj.experience; ///
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj; /// does the same thing
let {wizardLevel } = obj;

// object properties
const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

const a = "simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

// template strings
const name = "Sally"
const age = 34;
const pet = "horse";

const greeting = `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have.`;

// default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have.`;
}

// symbol
let sym1 = Symbol();
let sym2 = Symbol('foo'); /// 
let sym3 = Symbol('foo'); /// completely unique type, '===' returns false

// arrow functions
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b; /// equivalent
