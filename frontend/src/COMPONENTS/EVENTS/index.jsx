import EventItem from "../EVENTS_ITEM";

const Events = ({ events, clockId, localdate, updateevent, deleteEvent }) => {
  return (
    <div>
      {events.lenght !== 0 &&
        events.map((event, i) => {
          if (event.clock_id === clockId) {
            return (
              <EventItem
                event={event}
                eventId={event._id}
                key={i}
                localdate={localdate}
                updateevent={updateevent}
                deleteEvent={deleteEvent}
              />
            );
          }
        })}
    </div>
  );
};
export default Events;
