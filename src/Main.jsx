import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromSpoonacular } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);  
    const [recipe, setRecipe] = React.useState("");

    async function getRecipie() {
        if (ingredients.length > 0) {
            const RecipeMarkdown = await getRecipeFromSpoonacular(ingredients);
            setRecipe(RecipeMarkdown);  // Update the recipe state with the fetched recipe
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipie={getRecipie}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
