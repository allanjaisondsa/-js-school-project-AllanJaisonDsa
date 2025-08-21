import { useState, useRef, useEffect } from "react";
import { events, type TimelineEvent } from "../data/eventlist";
import EventCard from "./EventCards"; // 👈 import your card

export default function Timeline() {
  const [selected, setSelected] = useState<TimelineEvent | null>(events[0]);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [open]);

  return (
    <div className="timeline-container">
      <div
        className="timeline-bar"
        role="tablist"
        aria-label="Timeline of events"
      >
        {events.map((event, i) => (
          <div
            key={event.year}
            ref={(el: HTMLDivElement | null) => {
              markerRefs.current[i] = el;
            }}
            role="tab"
            tabIndex={0}
            aria-selected={selected?.year === event.year}
            aria-current={selected?.year === event.year ? "date" : undefined}
            className={`marker ${selected?.year === event.year ? "active" : ""}`}
            onClick={() => setSelected(event)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelected(event);
              }
              if (e.key === "ArrowRight") {
                const nextIndex = (i + 1) % events.length;
                markerRefs.current[nextIndex]?.focus();
                setSelected(events[nextIndex]);
              }
              if (e.key === "ArrowLeft") {
                const prevIndex = (i - 1 + events.length) % events.length;
                markerRefs.current[prevIndex]?.focus();
                setSelected(events[prevIndex]);
              }
            }}
          >
            {event.year}
          </div>
        ))}
      </div>

      {selected && (
        <div className="event-preview">
          <EventCard event={selected} Setopen={setOpen} preview={"preview"}/>
        </div>
      )}

      <dialog ref={dialogRef} className="event-modal">
        {selected && (
          <>
            <EventCard event={selected} Setopen={setOpen} preview={"dialog"}/>
            <button
              onClick={() => {
                setOpen(false);
                dialogRef.current?.close();
              }}
            >
              Close
            </button>
          </>
        )}
      </dialog>
    </div>
  );
}
