import { useState } from "react";

const EventFrom = ({
  isCreate = false,
  CreateEvent,
  clockId,
  createhundel,
  updateevent,
  eventId,
  edit = false,
}) => {
  const [state, setState] = useState(null);
  const onchangehundel = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (edit === true) {
      updateevent({ state, eventId });
      createhundel(false);
    } else {
      CreateEvent({ state, clockId });
      createhundel(false);
    }
  };
  return (
    <form onSubmit={onsubmit}>
      <h2>{isCreate ? "Create a new Event" : "Update Event"}</h2>
      <div>
        <label htmlFor="tittle">Enter Event's Tittle</label>
        <input type="text" name="tittle" onChange={onchangehundel} />
      </div>
      <div>
        <label htmlFor="description">Enter Event's Description</label>
        <input type="text" name="description" onChange={onchangehundel} />
      </div>
      <div>
        <label htmlFor="date">Select Date</label>
        <input type="datetime-local" name="date" onChange={onchangehundel} />
      </div>
      <button>{isCreate ? "Create" : "Update"}</button>
    </form>
  );
};
export default EventFrom;
