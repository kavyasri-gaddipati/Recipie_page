let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientsList = recipeObj.ingredients;

let titleEl = document.getElementById("recipeTitle");
let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("img");
let ingredientsListContainerEl = document.getElementById("ingredientsListContainer");

titleEl.textContent = recipeObj.title;

imgEl.setAttribute("src", recipeObj.imgSrc);
imgContainerEl.appendChild(imgEl);
imgEl.classList.add("img-element", "w-200");

for (let ingredient of ingredientsList) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientsListContainerEl.appendChild(ingredientEl);
}