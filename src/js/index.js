import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";

const state = {};
const controlSearch = async () => {
  // 1. Вэбээс түлхүүр үгийг гаргаж авна.
  const query = searchView.getInput();

  if (query) {
    // 2. Шинээр хайлтын обьектийн үүсгэж өгнө.
    state.search = new Search(query);

    // 3. Хайлт хийхэд зориулж дэлгэцийг UIбэлтгэнэ.
    searchView.clearSearchQuery();
    searchView.clearSearchResult();

    renderLoader(elements.searchResultDiv);

    // 4. Хайлтын гүйцэтгэнэ.
    state.search.result = await state.search.doSearch();

    // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    clearLoader();
    if (state.search.result === undefined) alert("Хайлт илэрцгүй");
    else searchView.renderRecipies(state.search.result);
  }
};
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
elements.buttonResult.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goto = parseInt(btn.dataset.goto, 10);
    searchView.clearSearchResult();
    searchView.renderRecipies(state.search.result, goto);
  }
});
