import { formatDistance } from "date-fns";
import { addSeconds, subSeconds } from "date-fns/esm";
import { useEffect } from "react";
import { useState } from "react";
import EventAction from "../SHARE/EVENT_ACTION";

const EventItem = ({ event, localdate, updateevent, eventId, deleteEvent }) => {
  const { event_tittle, event_description, date } = event;
  const eventDate = new Date(date);
  const [remaintime, setTimeremain] = useState(null);
  const [timer, setTimer] = useState();
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    if (localdate) {
      setTimer(localdate);
    }
  }, []);
  let timerId = null;
  useEffect(() => {
    if (!timer || timerId !== null) return;
    else {
      timerId = setInterval(() => {
        const timertime = addSeconds(localdate, 1);
        setTimer(timertime);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timer]);
  useEffect(() => {
    if (timer) {
      const distance = formatDistance(eventDate, timer);
      const Cdate = timer.getTime();
      const Edate = eventDate.getTime();

      const ddd = Edate - Cdate;
      if (ddd < 0) {
        setIsOver(true);
      } else {
        setIsOver(false);
      }

      setTimeremain(distance);
    }
  }, [timer]);
  return (
    <>
      <div>
        <h3>{event_tittle}</h3>
        <p>{event_description}</p>
        <h4>{eventDate.toLocaleTimeString()}</h4>
        <p>{eventDate.toLocaleDateString()}</p>
        {remaintime !== null ? (
          <h6>
            {isOver ? "Over " : "Remaining "}
            {remaintime}
          </h6>
        ) : (
          ""
        )}
      </div>
      <EventAction
        updateevent={updateevent}
        eventId={eventId}
        deleteEvent={deleteEvent}
      />
    </>
  );
};
export default EventItem;
