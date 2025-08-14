import { TimelineEventObject } from './types.js';

export async function fetchEvents(): Promise<TimelineEventObject[]> {
  const res = await fetch('data/events.json');
  if (!res.ok) throw new Error('Failed to load events');
  return await res.json() as TimelineEventObject[];
}
