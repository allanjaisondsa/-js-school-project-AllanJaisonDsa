import { useState } from "react";
import { events, type TimelineEvent } from "../data/eventlist";
import EventCard from "./EventCards";

export default function Timeline() {
  const [selected, setSelected] = useState<TimelineEvent | null>(events[0]);

  return (
    <div className="timeline-container">
      {/* Timeline bar */}
      <div className="timeline-bar">
        {events.map((event) => (
          <div
            key={event.year}
            className={`marker ${selected?.year === event.year ? "active" : ""}`}
            onClick={() => setSelected(event)}
          >
            {event.year}
          </div>
        ))}
      </div>

      {/* Selected Event */}
      {selected && <EventCard event={selected} />}
    </div>
  );
}
