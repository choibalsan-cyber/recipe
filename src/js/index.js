import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";

const state = {};
const controlSearch = async () => {
  // 1. Вэбээс түлхүүр үгийг гаргаж авна.
  const query = searchView.getInput();

  if (query) {
    try {
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
    } catch (er) {
      console.log(er);
    }
  }
};
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
