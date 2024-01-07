let str = "";
const recipeList = document.querySelector('.recipe-list')

const nav = document.querySelector('nav');


const showRecipes = async(category) =>{
   let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${category}`);
   let data = await response.json();
    const {recipes} = data;
     
    
    
    str = "";
    recipes.forEach(recipe => {
      const {title,image_url,recipe_id,publisher} = recipe;
        
      str += ` <li class="recipe-item">
      <div class="recipe-image">
        <img src=${image_url} alt="Spaghetti Bolognese">
      </div>
      <div class="recipe-details">
        <h2 class="recipe-title">${title}</h2>
        <p class="recipe-description">${publisher}</p>
      </div>
       
    </li>`
    recipeList.innerHTML = str;
    });
    
    
   
}
window.addEventListener('DOMContentLoaded',showRecipes("ice cream"));


const search = document.getElementById('search');
const input = document.getElementById('input');


search.addEventListener('click',()=>{
  showRecipes(input.value)
})


const categories = {
  1:"carrot",
2:"broccoli",
3:"asparagus",
4:"cauliflower",
5:"corn",
6:"cucumber",
7:"green pepper",
8:"lettuce",
9:"mushrooms",
10:"onion",

}


const categoriesDrop = document.getElementById('categories')


let newoption = "";
for(option in categories){
  
  
   newoption += `<option value=${categories[option]}>${categories[option].toUpperCase()}</option>`
  categoriesDrop.innerHTML = newoption;

 
}

categoriesDrop.addEventListener('change',(e)=>{
   showRecipes(e.target.value);
   
})

const displayAddRecipeForm = document.getElementById('addRecipe');

const addrecipeform = document.querySelector('.add-recipe-form');

displayAddRecipeForm.addEventListener('click',()=>{
 addrecipeform.classList.toggle('active');
})




function addRecipe(){
  str += `<li class="recipe-item">
  <div class="recipe-image">
    <img src=${recipeImage.value} alt="Spaghetti Bolognese">
  </div>
  <div class="recipe-details">
    <h2 class="recipe-title">${recipeTitle.value}</h2>
    <p class="recipe-description">${recipeId.value}</p>
  </div>
</li>`
recipeList.innerHTML = str;
recipeImage.value = "";
recipeTitle.value = "";
recipeId.value = "";
addrecipeform.classList.remove('active');
 
}

















  
 



