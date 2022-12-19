import ClockList from "../CLOCKS_LIST";

const CustomClock = ({
  clocks,
  CustomClockEditHundeler,
  CustomClockDelete,
  events,
  CreateEvent,
  localdate,
  updateevent,
  deleteEvent,
}) => {
  return (
    <div>
      {clocks.length !== 0 && (
        <ClockList
          clocks={clocks}
          CustomClockEditHundeler={CustomClockEditHundeler}
          CustomClockDelete={CustomClockDelete}
          events={events}
          CreateEvent={CreateEvent}
          localdate={localdate}
          updateevent={updateevent}
          deleteEvent={deleteEvent}
        />
      )}
    </div>
  );
};
export default CustomClock;
