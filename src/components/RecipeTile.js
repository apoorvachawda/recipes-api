import './RecipeTile.css';

const RecipeTile = ({recipe}) => {


    
    
    return (
       
        <div className="recipeTile">
            <a href={recipe.recipe.url} target="_blank" className="recipeLink" rel="noreferrer" alt={`${recipe.recipe.label}`}>
                <div>
                    <p>{recipe.recipe.label}</p>
                    <img src={recipe.recipe.image} className="recipeImage" />
                </div>
            </a>
        </div>
               
     );

}
 
export default RecipeTile;