import axios from "axios";
const config = {
  apiKey: "9b47051e-91a5-4fd5-9f55-754841e529d7",
  endpoint: "https://project-2-api.herokuapp.com/",
  delay: 500,
};

export const appendApiKey = (url = "") => url + "?api_key=" + config.apiKey;

export function getVideos() {
  return new Promise(async (resolve, reject) => {
    await new Promise((resolve) => setTimeout(resolve, config.delay));

    axios
      .get(`${config.endpoint}videos${appendApiKey()}`)
      .then((response) => resolve(response.data));
  });
}

export function getVideoDetails(videoId) {
  return new Promise(async (resolve, reject) => {
    await new Promise((resolve) => setTimeout(resolve, config.delay));

    axios
      .get(`${config.endpoint}videos/${videoId}${appendApiKey()}`)
      .then((response) => resolve(response.data));
  });
}

export const { apiKey } = config;