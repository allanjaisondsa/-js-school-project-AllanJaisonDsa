import { fetchEvents } from './fetcher.js';
import { renderSlider, renderEventCard } from './render.js';
import { initThemeToggle } from './theme.js';
import { TimelineEventObject } from './types.js';

document.addEventListener('DOMContentLoaded', async () => {
  initThemeToggle();
  const events = await fetchEvents();

  renderSlider(events);
  renderEventCard(events[0]);

  const range = document.getElementById('year-range') as HTMLInputElement;
  range.addEventListener('input', () => {
    const index = parseInt(range.value, 10);
    renderEventCard(events[index]);
  });
});
