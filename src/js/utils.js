/** This is assumed to be the current user's avatar for this prototype */
import mohanMurgeAvatar from "../assets/images/mohan-muruge.jpg";

const relativeTimeFormat = new Intl.RelativeTimeFormat("en");

/**
 * Returns a date string with en-US format MM/dd/yyyy .
 * @param {number} date - The date to be formatted (in millis).
 * @returns {string} - The formatted date.
 */
export function createDateString(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

/**
 * Returns a date string in for format yyyy-MM-ddThh:mm:ss .
 * @param {number} date - The date to be formatted (in millis).
 * @returns {string} - The formatted datetime.
 */
export function createDateTimeString(date) {
  return new Date(date).toISOString().split(".")[0];
}

/**
 * Converts a date to a human-readable relative formated string.
 * @param {(number)} date - The date to be compared to now (in millis).
 * @returns {string} The relative date string. E.g. 2 seconds ago, 3 minutes ago, or 1 year ago.
 */
export function createRelativeTimeString(date) {
  let now = new Date();
  let difference = now - date; //In milliseconds

  console.log("Date difference: ", difference);

  let seconds = difference / 1000;
  if (seconds < 60) return relativeTimeFormat.format(Math.ceil(-seconds), "second");

  let minutes = seconds / 60;
  if (minutes < 60) return relativeTimeFormat.format(Math.ceil(-minutes), "minute");

  let hours = minutes / 60;
  if (hours < 24) return relativeTimeFormat.format(Math.ceil(-hours), "hour");

  let days = hours / 24;
  if (days < 7) return relativeTimeFormat.format(Math.ceil(-days), "day");

  let weeks = days / 7;
  if (days < 30) return relativeTimeFormat.format(Math.ceil(-weeks), "week");

  let months = days / 30;
  if (months < 12) return relativeTimeFormat.format(Math.ceil(-months), "month");

  let years = months / 12;
  return relativeTimeFormat.format(Math.ceil(-years), "year");
}

/**
 * Retrieves the active user avatar.
 * @returns {string} - The source url of the avatar.
 */
export const getUserAvatar = () => mohanMurgeAvatar;
