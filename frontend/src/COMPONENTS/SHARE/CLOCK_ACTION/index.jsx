import { useState } from "react";
import ClockForm from "../CLOCK_FORM";
import EventFrom from "../EVENT_FORM";

const ClockAction = ({
  local = false,
  createClock,
  deleteClock,
  updateclock,
  CustomClockEditHundeler,
  clockId,
  CustomClockDelete,
  CreateEvent,
}) => {
  const [isCreate, setIscreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const createhundel = () => {
    setIscreate(!isCreate);
    setIsEdit(false);
  };
  const edithundel = () => {
    setIsEdit(!isEdit);
    setIscreate(false);
  };
  const eventhundel = () => {
    setIsEvent(!isEvent);
    setIsEdit(false);
    setIscreate(false);
  };
  const deletehundel = () => {
    CustomClockDelete(clockId);
  };
  return (
    <>
      <div>
        {local ? (
          <button onClick={createhundel}>Create</button>
        ) : (
          <>
            <button onClick={edithundel}>Edit</button>
            <button onClick={deletehundel}>Delete</button>
            <button onClick={eventhundel}>Create new Event</button>
          </>
        )}
      </div>
      {isCreate ? (
        <ClockForm
          createClock={createClock}
          updateclock={updateclock}
          isCreate={isCreate}
          createhundel={createhundel}
        />
      ) : (
        ""
      )}
      {isEdit ? (
        <ClockForm
          createhundel={edithundel}
          updateclock={CustomClockEditHundeler}
          clockId={clockId}
        />
      ) : (
        ""
      )}
      {isEvent ? (
        <EventFrom
          CreateEvent={CreateEvent}
          isCreate={true}
          clockId={clockId}
          createhundel={eventhundel}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default ClockAction;
