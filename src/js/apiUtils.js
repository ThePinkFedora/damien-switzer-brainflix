import axios from "axios";
const config = {
  apiKey: "9b47051e-91a5-4fd5-9f55-754841e529d7",
  endpoint: "http://localhost:80/",
};

/**
 * Appends the apiKey to the given string.
 * @param {string} [url = ""]
 * @returns {string}
 */
export const appendApiKey = (url = "") => url + "?api_key=" + config.apiKey;

/**
 * GETs the list of videos from the API.
 * @returns {Promise}
 */
export function getVideos() {
  return new Promise(async (resolve, reject) => {
    axios
      .get(`${config.endpoint}videos${appendApiKey()}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

/**
 * GETs the detail of a video from the API.
 * @param {string} videoId - The id of the video.
 * @returns {Promise}
 */
export function getVideoDetails(videoId) {
  return new Promise(async (resolve, reject) => {
    axios
      .get(`${config.endpoint}videos/${videoId}${appendApiKey()}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

/**
 * POSTs a comment on a video to the API.
 * @param {string} videoId - The id of the video.
 * @param {{name: string, comment: string}} comment - The comment object.
 * @returns {Promise}
 */
export function postComment(videoId, comment) {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        `${config.endpoint}videos/${videoId}/comments${appendApiKey()}`,
        comment
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

export const { apiKey } = config;
