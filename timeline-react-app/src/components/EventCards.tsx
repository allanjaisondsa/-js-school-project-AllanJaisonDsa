import { type TimelineEvent } from "../data/eventlist";

interface Props {
  event: TimelineEvent;
  Setopen: (setopen: any) => void;
  preview: string;
}

export default function EventCard({ event, Setopen, preview }: Props) {
  return (
    <div className="event-card">
      <h3 className="year">{event.year}</h3>
      <h2 className="title">{event.title}</h2>
      <img src={event.image} alt={event.title} className="event-image" />

      {preview === "preview" &&
        <>
          <p className="description">{event.shortDescription}</p>
          <button className="learn-more" onClick={() => Setopen(true)}>Learn More</button>
        </>
      }

      {preview === "dialog" &&
        <p className="description">{event.description}</p>
      }
    </div>
  );
}
