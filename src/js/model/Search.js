import axios from "axios";
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async doSearch() {
    try {
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );

      this.recipes = result.data.recipes;
      return this.recipes;
    } catch (error) {
      console.log("Асуудал гарлаа " + error);
    }
  }
}
