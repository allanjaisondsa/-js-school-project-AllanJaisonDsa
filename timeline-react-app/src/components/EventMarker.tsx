import { type TimelineEvent } from "../data/eventlist";

interface Props {
  event: TimelineEvent;
  onClick: () => void;
}

export default function EventMarker({ event, onClick }: Props) {
  return (
    <div className="event-marker" onClick={onClick}>
      <span>{event.year}</span>
    </div>
  );
}
