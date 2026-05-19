const products = [
  { name: 'Laptop', price: 999, category: 'electronics' },
  { name: 'T-Shirt', price: 25, category: 'clothing' },
  { name: 'Phone', price: 699, category: 'electronics' },
  { name: 'Jeans', price: 59, category: 'clothing' },
  { name: 'Headphones', price: 149, category: 'electronics' }
];

const electronics = products.filter(p => p.category === 'electronics');
console.log(electronics);

const affordable = products.filter(p => p.price < 200);
console.log(affordable);

const names = products.map(p => p.name);
console.log(names);

const phone = products.find(p => p.name === 'Phone');
console.log(phone);