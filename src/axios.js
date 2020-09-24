import axios from "axios";

const instance = axios.create({
  baseUrl: "...", // The API(cloud function) url
});

export default instance;
