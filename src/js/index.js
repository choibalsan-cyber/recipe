import Search from "./model/Search";
import { elements } from "./view/base";
import * as searchView from ".view/searchView";

const state = {};
const controlSearch = async () => {
  // 1. Вэбээс түлхүүр үгийг гаргаж авна.
  const query = searchView.getInput();

  if (query) {
    // 2. Шинээр хайлтын обьектийн үүсгэж өгнө.
    state.search = new Search(query);

    // 3. Хайлт хийхэд зориулж дэлгэцийг UIбэлтгэнэ.

    // 4. Хайлтын гүйцэтгэнэ.
    await state.search.doSearch();
    // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
    console.log(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
