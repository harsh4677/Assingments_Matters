/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through transactions to calculate total spent for each category
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (categoryMap[category]) {
      // If category already exists, add the price to the total
      categoryMap[category].totalSpent += price;
    } else {
      // If category doesn't exist, create a new entry
      categoryMap[category] = { category, totalSpent: price };
    }
  });

  // Convert the map values to an array of objects
  const result = Object.values(categoryMap);

  return result;
}

module.exports = calculateTotalSpentByCategory;
