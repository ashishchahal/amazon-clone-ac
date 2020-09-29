import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-ac-271d9/us-central1/api", // The API(cloud function) url
});

export default instance;
