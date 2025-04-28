let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
const recipeBook = document.getElementById("recipeBook");
const recipeId = document.getElementById('recipeId');
const recipeList = document.querySelector('#recipeList');
const btn = document.querySelector("#btn");

function saveToLocalStorage()
{
    localStorage.setItem ("recipes",JSON.stringify(recipes)); 
}


function addRecipe(){
    const value = input.value;
    todos.push(value);
    console.log(todos);
    recipeList.innerHTML = value;
    readTask();
}


function deleteRecipe(index)
{
    recipes.splice(index, 1);
    createRecipes();
}
function editRecipes(index)
{
    const recipe = recipes[index];
    document.getElementById("title").value = recipe.title;
    document.getElementById("ingredients").value = recipe.ingredients;
    document.getElementById("instructions").value = recipe.instructions;

    recipes.splice(index, 1);
    createRecipes();

}
createRecipes();
btn.addEventListener("click" ,addRecipe);