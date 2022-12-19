import { addMinutes } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import TIME_ZONE from "../../CONSTANTS/Timezone&Offset";
const useClock = (timezone, offset) => {
  const [machinDate, setMachinDate] = useState(null);
  const [machinTimezoneOffset, setMachinTimezoneOffset] = useState(null);
  const [machinTimezone, setMachinTimezone] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(() => {
    const machin_date = new Date();
    const machin_timezone_offset = machin_date.getTimezoneOffset();
    const local_time_in_utc = addMinutes(machin_date, machin_timezone_offset);
    const machin_timezone = local_time_in_utc.toUTCString().split(" ").pop();
    setMachinDate(local_time_in_utc);
    setMachinTimezoneOffset(machin_timezone_offset);
    setMachinTimezone(machin_timezone);
  }, []);

  useEffect(() => {
    if (machinDate) {
      if (timezone) {
        offset = TIME_ZONE[timezone] ?? offset;
        const newDate = addMinutes(machinDate, offset);
        setDate(newDate);
        return;
      } else {
        setDate(machinDate);
        return;
      }
    }
  }, [machinDate, timezone, offset]);
  return {
    Date: date,
    Offset: offset ? offset : -machinTimezoneOffset,
    Timezone: timezone ? timezone : machinTimezone,
  };
};
export default useClock;
