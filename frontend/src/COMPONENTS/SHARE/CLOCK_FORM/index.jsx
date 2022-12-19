import Offset from "../../../UTILS/Offset";
import TIME_ZONE from "../../../CONSTANTS/Timezone&Offset";
import { useState } from "react";
const ClockForm = ({
  createClock,
  updateclock,
  isCreate = false,
  createhundel,
  clockId,
}) => {
  const [state, setState] = useState(null);
  const onchangeHundeler = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = value * 60;
    }

    setState({ ...state, [name]: value });
  };
  const onsubmethundel = (e) => {
    e.preventDefault();
    if (isCreate) {
      createClock(state);
      createhundel(false);
    } else {
      updateclock({ state, clockId: clockId });
      createhundel(false);
    }
  };
  return (
    <form onSubmit={onsubmethundel}>
      <h3>{isCreate ? "Create a New Clock" : "Update Clock"}</h3>
      <div>
        <label htmlFor="tittle">Enter Tittle</label>
        <input type="text" name="tittle" onChange={onchangeHundeler} />
      </div>
      <div>
        <label htmlFor="timezone">Select Timezone</label>
        <select name="timezone" id="timezone" onChange={onchangeHundeler}>
          {["GMT", "UTC", ...Object.keys(TIME_ZONE)].map((item, i) => {
            return <option key={i}>{item}</option>;
          })}
        </select>
      </div>
      {state !== null &&
        (state.timezone === "GMT" || state.timezone === "UTC") && (
          <div>
            <label htmlFor="offset">Select Offset</label>
            <select name="offset" id="offset" onChange={onchangeHundeler}>
              {Offset().map((item, i) => {
                return <option key={i}>{item}</option>;
              })}
            </select>
          </div>
        )}
      {isCreate ? (
        <button type="submit">Create</button>
      ) : (
        <button type="submit">Update</button>
      )}
    </form>
  );
};
export default ClockForm;
