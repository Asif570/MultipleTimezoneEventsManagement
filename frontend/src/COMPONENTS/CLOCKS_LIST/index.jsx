import ClockListItem from "../CLOCKS_LIST_ITEM";

const ClockList = ({
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
      {clocks.map((item, i) => {
        return (
          <ClockListItem
            clock={item}
            key={i}
            CustomClockEditHundeler={CustomClockEditHundeler}
            CustomClockDelete={CustomClockDelete}
            events={events}
            CreateEvent={CreateEvent}
            localdate={localdate}
            updateevent={updateevent}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};
export default ClockList;
