import { useState } from "react";
import EventFrom from "../EVENT_FORM";

const EventAction = ({ updateevent, eventId, deleteEvent }) => {
  const [isEdit, setIsEdit] = useState(false);
  const isedithundel = () => {
    setIsEdit(!isEdit);
  };
  const deletehundel = () => {
    deleteEvent(eventId);
  };
  return (
    <>
      <div>
        <button onClick={isedithundel}>Edit</button>
        <button onClick={deletehundel}>Delete</button>
      </div>
      {isEdit && (
        <EventFrom
          edit={true}
          createhundel={isedithundel}
          updateevent={updateevent}
          eventId={eventId}
        />
      )}
    </>
  );
};
export default EventAction;
