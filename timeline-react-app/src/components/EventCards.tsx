import { type TimelineEvent } from "../data/eventlist";

interface Props {
  event: TimelineEvent;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="event-card">
      <h3 className="year">{event.year}</h3>
      <h2 className="title">{event.title}</h2>
      <img src={event.image} alt={event.title} className="event-image" />
      <p className="description">{event.description}</p>
      <button className="learn-more">Learn More</button>
    </div>
  );
}
