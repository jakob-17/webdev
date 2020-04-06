// closures
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; /// functception -> ex: curriedMultiply(4)(7);
const multiplyBy5 = curriedMultiply(5);

// compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); /// returns 7