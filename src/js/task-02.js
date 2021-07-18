const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector('#ingredients')
// console.log(ingredientsRef);

const markup = ingredients.map(ingredient => {
  // console.log(ingredient);
  const li = document.createElement('li')
  // console.log(li);
  li.innerHTML = `<p>${ingredient}</p>`
  return li
})

ingredientsRef.append(...markup)