import { JSONConveter } from "./JsonConverter";

export class CatAPI {
  constructor() {
    this.APIKey = `live_KapgTBkWirIh4LhDlNyu5am4Lgi1wLQ9qvu8zF6OoLHXsCS1N7SPGw5zTeja8kCw`;
  }

  async getCatData(numCats) {
    try {
      if (numCats > 100) {
        numCats = 100;
      }
      let response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${numCats}&has_breeds=true&api_key=${this.APIKey}`,
        { mode: "cors" }
      );
      let responseObject = await response.json();
      let catArray = JSONConveter(responseObject);
      return catArray;
    } catch (err) {
      console.log(err);
    }
  }
}


