import { elements } from "./base";

const renderRecipe = (recipe) => {
  console.log(recipe);
  /*
image_url: "http://forkify-api.herokuapp.com/images/5566512470_9e98939ab3_z2766.jpg"
publisher: "The Pioneer Woman"
publisher_url: "http://thepioneerwoman.com"
recipe_id: "47041"
social_rank: 99.99999855322939
source_url: "http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/"
title: "Pasta Salad with Tomatoes, Zuc*/
  const markup = ` <li>
  <a class="results__link " href="#${recipe.recipe_id}">
      <figure class="results__fig">
          <img src=${recipe.image_url} alt="Test">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${recipe.title}</h4>
          <p class="results__author">${recipe.publisher}</p>
      </div>
  </a>
</li>`;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

export const clearSearchQuery = () => (elements.searchInput.value = "");
export const clearSearchResult = () =>
  (elements.searchResultList.innerHTML = "");
export const getInput = () => elements.searchInput.value;
export const renderRecipies = (recipies) => {
  recipies.forEach(renderRecipe);
};
