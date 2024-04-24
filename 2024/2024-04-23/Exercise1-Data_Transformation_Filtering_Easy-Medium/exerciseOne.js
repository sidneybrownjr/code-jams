// example array

const users = [
  { name: "Alice", email: "alice@example.com", age: 25, isActive: true },
  { name: "Bob", email: "bob@example.com", age: 30, isActive: false },
  { name: "Charlie", email: "charlie@example.com", age: 35, isActive: true },
];

function formatUserData(userArray) {
  // "Name: [name], Email: [email]".
  // Modify your function to only include users who are marked as active (`isActive: true`).
  //   return userArray.map(
  //     (user) =>
  //       "Name: " + user.name + ", Email: " + user.email + ", Age: " + user.age
  //   );

  const formattedUserArray = userArray
    .filter((user) => user.isActive === true)
    .map(
      (user) =>
        "Name: " + user.name + ", Email: " + user.email + ", Age: " + user.age
    );

  return formattedUserArray;
}

console.log(formatUserData(users));

// Output
// ["Name: Alice, Email: alice@example.com", "Name: Charlie, Email: charlie@example.com"]
