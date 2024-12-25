import axios from 'axios';

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;  // Use your Spoonacular API key from environment variables
console.log("API Key:", apiKey); 

export async function getRecipeFromSpoonacular(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        console.log("Ingredients String:", ingredientsString);

        // Make the API request to Spoonacular
        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                ingredients: ingredientsString,  // Ingredients provided by the user
                number: 5,  // Number of recipes to return
                apiKey: apiKey,
            }
        });

        console.log("API Response:", response.data);  // Logs the full response object

        if (response.data && response.data.length > 0) {
            // Create a string summarizing the recipe titles
            const recipeTitles = response.data.map(recipe => recipe.title).join("\n\n");
            console.log("Recipe Titles:", recipeTitles);
            return recipeTitles;  // Return a string containing recipe titles
        } else {
            console.error("No recipes found.");
        }
    } catch (err) {
        console.error("Error fetching recipes:", err.message);
    }
}
