const categoryList = document.getElementById('categories');
const categoriesItems = categoryList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');
  console.log(`Category:  ${categoryName.trim()}`);
  console.log(`Elements: ${categoryElements.length}`);
});


