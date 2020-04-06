const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// for of - iterating
for (item of basket) {
    console.log(item);
}

for (item of 'basket') {
    console.log(item);
}

// for in - enumerating
for (item in detailedBasket) {
    console.log(item);
}