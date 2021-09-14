import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org3",
});

export default instance;
