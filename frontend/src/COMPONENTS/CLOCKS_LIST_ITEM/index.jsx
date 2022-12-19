import useClock from "../../HOOKS/CLOCK_HOOK/useClock";
import Events from "../EVENTS";
import ClockAction from "../SHARE/CLOCK_ACTION";
import ClockDisplay from "../SHARE/CLOCK_DISPLAY";

const ClockListItem = ({
  clock,
  CustomClockEditHundeler,
  CustomClockDelete,
  CreateEvent,
  events,
  localdate,
  updateevent,
  deleteEvent,
}) => {
  const { clock_tittle, clock_timezone, clock_offset, _id } = clock;
  const { Date, Timezone, Offset } = useClock(clock_timezone, clock_offset);

  return (
    <div>
      {Date !== null ? (
        <ClockDisplay
          date={Date}
          tittle={clock_tittle}
          timezone={Timezone}
          offset={Offset}
          localdate={localdate}
        />
      ) : (
        ""
      )}
      <ClockAction
        clockId={_id}
        CustomClockEditHundeler={CustomClockEditHundeler}
        CustomClockDelete={CustomClockDelete}
        CreateEvent={CreateEvent}
      />
      <Events
        events={events}
        updateevent={updateevent}
        clockId={_id}
        localdate={localdate}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};
export default ClockListItem;
