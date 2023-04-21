import axios from "axios";
const config = {
  apiKey: "9b47051e-91a5-4fd5-9f55-754841e529d7",
  endpoint: process.env.REACT_APP_BASE_URL,
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

/**
 * POSTs a video to the API.
 * @param {{title: string, channel: string, description: string, image: string}} videoData - The new video object to be posted.
 * @returns {Promise} - Promise which returns the data upon resolution, or the error upon rejection.
 */
export function postVideo(videoData) {
  const formData = new FormData();

  formData.append("title", videoData.title);
  formData.append("channel", videoData.channel);
  formData.append("description", videoData.description);
  if (videoData.thumbnailFile)
    formData.append("thumbnail", videoData.thumbnailFile);
  else formData.append("thumbnailUrl", videoData.thumbnailUrl);

  return new Promise(async (resolve, reject) => {
    axios
      .post(`${config.endpoint}videos/${appendApiKey()}`, formData)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

/**
 * PUTs a like on a video.
 * @param {{title: string, channel: string, description: string, image: string}} videoData - The new video object to be posted.
 * @returns {Promise} - Promise which returns the data upon resolution, or the error upon rejection.
 */
export function putVideoLike(videoId) {
  return new Promise(async (resolve, reject) => {
    axios
      .put(`${config.endpoint}videos/${videoId}/likes${appendApiKey()}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

export const { apiKey, endpoint } = config;
