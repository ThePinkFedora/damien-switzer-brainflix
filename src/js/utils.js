/** This is assumed to be the current user's avatar for this prototype */
import mohanMurgeAvatar from '../assets/images/mohan-muruge.jpg';

const relativeTimeFormat = new Intl.RelativeTimeFormat("en");

export function createDateString(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

export function createRelativeTimeString(date) {
    let now = new Date();
    let difference = now - date; //In milliseconds

    console.log("Date difference: ",difference);

    let seconds = difference/1000;
    if(seconds < 60)return relativeTimeFormat.format(Math.ceil(-seconds),'second');

    let minutes = seconds / 60;
    if(minutes < 60)return relativeTimeFormat.format(Math.ceil(-minutes),"minute");
    
    let hours = minutes / 60;
    if(hours < 24)return relativeTimeFormat.format(Math.ceil(-hours),"hour");
    
    let days = hours / 24;
    if(days < 7)return relativeTimeFormat.format(Math.ceil(-days),"day");

    let weeks = days / 7;
    if(days < 30)return relativeTimeFormat.format(Math.ceil(-weeks),"week");

    let months = days / 30;
    if(months < 12)return relativeTimeFormat.format(Math.ceil(-months),"month");

    let years = months / 12;
    return relativeTimeFormat.format(Math.ceil(-years),"year");
}

export const getUserAvatar = () => mohanMurgeAvatar;
