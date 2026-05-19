const products = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard'];


console.log(products[0]);

console.log(products[products.length - 1]);

console.log(products.length);

const longProducts = products.filter(product => product.length > 6);
console.log(longProducts);

const upperProducts = products.map(product => product.toUpperCase());
console.log(upperProducts);

const startsWithP = products.find(product => product.startsWith('p'));
console.log(startsWithP);