import { type TimelineEvent } from "../data/eventlist";

interface Props {
  event: TimelineEvent | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: Props) {
  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{event.year} — {event.title}</h2>
        <img src={event.image} alt={event.title} />
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
