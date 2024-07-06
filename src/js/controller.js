const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const resData = await res.json();
    console.log(res, resData);

    if (!res.ok) {
      throw new Error(`${resData.message} Status Code: ${res.status}`);
    }

    let { recipe } = resData.data;
    console.log(recipe);
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      ingridients: recipe.ingridients,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
    };

    console.log(recipe);
  } catch (err) {
    console.log(err);
  }
};

showRecipe();
