const user = {
  name: "Robert",
  age: 20,
  email: "robert@example.com",
  isAdmin: false
};

// 2. Dot notation
console.log(user.name);

// 3. Bracket notation
console.log(user['email']);

// 4. Change isAdmin to true
user.isAdmin = true;

// 5. Add city property
user.city = "Oradea";

// 6. Print full object
console.log(user);