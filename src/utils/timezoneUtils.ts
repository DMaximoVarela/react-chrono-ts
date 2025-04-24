import moment from "moment-timezone";

export const getOffsetForLoc = (
  loc: string,
  date: Date = new Date()
): string => {
  const offset = moment.tz(date, loc).format("Z");
  return offset;
};

export const timeZoneFormattedUtils = (tz: string): string => {
  return `${tz} (GMT${getOffsetForLoc(tz)})`;
};

export const removeFormattedTimezone = (tz: string): string => {
  return tz.split("(GMT")[0].trim();
};

export const TIME_ZONES = moment.tz.names().map((tz) => {
  return { id: tz, name: timeZoneFormattedUtils(tz) };
});
