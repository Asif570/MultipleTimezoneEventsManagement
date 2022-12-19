import { addMinutes } from "date-fns/esm";
import ClockAction from "../SHARE/CLOCK_ACTION";
import ClockDisplay from "../SHARE/CLOCK_DISPLAY";

const LocalClock = ({
  clock,
  createClock,
  updateclock,
  tittle = "Local Clock",
}) => {
  const { Date, Timezone, Offset } = clock;
  const date = addMinutes(Date, Offset);
  return (
    <div>
      {Date && Timezone !== null && (
        <ClockDisplay
          date={date}
          timezone={Timezone}
          offset={Offset}
          tittle={tittle}
        />
      )}
      <ClockAction
        local={true}
        createClock={createClock}
        updateclock={updateclock}
      />
    </div>
  );
};
export default LocalClock;
