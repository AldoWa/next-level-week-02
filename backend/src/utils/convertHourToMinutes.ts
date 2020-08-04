export default function convertHourToMinute(time:string) {
  const [hour, minute] = time.split(':');
  const minute_convert = (Number(hour) * 60) + Number(minute);
  return String(minute_convert);
}
