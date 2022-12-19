import { addSeconds, formatDistance } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";

const ClockDisplay = ({ tittle, date, timezone, offset, localdate }) => {
  let Offset = offset < 0 ? `-${offset / 60}` : `+${offset / 60}`;
  const [timer, setTimer] = useState(null);
  const [localutcdate, setlocalutcdate] = useState(null);
  useEffect(() => {
    setTimer(date);
  }, [date]);
  let timerid = null;
  useEffect(() => {
    if (!timer || timerid !== null) return;
    timerid = setInterval(() => {
      setTimer(addSeconds(timer, 1));
    }, 1000);
    return () => clearInterval(timerid);
  }, [timer]);
  useEffect(() => {
    if (localdate) {
      setlocalutcdate(localdate);
    }
  }, []);
  return (
    <div>
      <h3>{tittle}</h3>
      {timer && (
        <>
          <h1>{timer.toLocaleTimeString()}</h1>
          <p>{timer.toLocaleDateString()}</p>
        </>
      )}
      <p>
        {timezone} : {Offset}
      </p>
      {localutcdate !== null && <h4>{formatDistance(date, localutcdate)}</h4>}
    </div>
  );
};
export default ClockDisplay;
