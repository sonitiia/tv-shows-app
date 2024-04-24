import axios from "axios";
import { BASE_URL, SEARCH_QUERY_URL } from "../api/apiUrl";

class TvShowsService {
  async getTvShowsBySearchInput(searchValue) {
    return (await axios.get(SEARCH_QUERY_URL + searchValue)).data;
  }

  async getTvShowById(id) {
    return (await axios.get(BASE_URL + id)).data;
  }
}

const tvShowsService = new TvShowsService();
export default tvShowsService;
