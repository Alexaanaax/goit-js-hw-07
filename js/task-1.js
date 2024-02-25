const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
