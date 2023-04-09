import "./TimestampLabel.scss";
import {
  createDateTimeString,
  createRelativeTimeString,
  createDateString,
} from "../../js/utils";

/**
 * A inline element for displaying a timestamp. The timestamp is displayed in relative format and includes a tooltip to reveal the specific date.
 * @param {object} props
 * @param {number} props.timestamp - The timestamp to be depicted (in millis).
 */
function TimestampLabel({ timestamp }) {
  return (
    <span className="timestamp-label">
      <time datetime={createDateTimeString(timestamp)}>
        {createRelativeTimeString(timestamp)}
      </time>
      <span className="timestamp-label__tooltip">
        {createDateString(timestamp)}
      </span>
    </span>
  );
}

export default TimestampLabel;
