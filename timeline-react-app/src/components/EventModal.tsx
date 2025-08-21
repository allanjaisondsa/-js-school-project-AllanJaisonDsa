import { useEffect, useRef } from "react";
import {type TimelineEvent } from "../data/eventlist";

interface Props {
  event: TimelineEvent | null;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
}

export default function EventModal({ event, onClose, triggerRef }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (event && modalRef.current) {
      modalRef.current.showModal();
      modalRef.current.focus();
    }
  }, [event]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, triggerRef]);

  if (!event) return null;

  return (
    <dialog
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="event-card"
    >
      <h2 id="modal-title">{event.title}</h2>
      <p>{event.description}</p>
      <button
        onClick={() => {
          onClose();
          triggerRef.current?.focus();
        }}
      >
        Close
      </button>
    </dialog>
  );
}
