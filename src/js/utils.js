import videoDetails from '../data/video-details.json';

const relativeTimeFormat = new Intl.RelativeTimeFormat("en");

export function createDateString(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

export function createRelativeTimeString(date) {
  return relativeTimeFormat.format(date);
}

/**
 * Simulates a change applied when posting a comment to the server
 */
export function simulatePostComment(comment, videoId) {
  return new Promise(async (resolve, reject) => {
    const video = videoDetails.find((video) => video.id === videoId);

    let comments = video.comments;
    const databaseComment = {
      id: crypto.randomUUID(),
      name: comment.name,
      comment: comment.comment,
      likes: 0,
      timestamp: new Date().getTime(),
    };
    comments = [databaseComment, ...comments];

    const updatedVideo = { ...video, comments: comments };
    resolve({ data: updatedVideo });
  });
}
