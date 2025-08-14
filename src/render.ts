import { TimelineEventObject } from './types.js';

export function renderSlider(events: TimelineEventObject[]): void {
  const years = events.map(e => e.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const yearLabels = document.getElementById('year-labels')!;
  yearLabels.innerHTML = '';
  [minYear, ...years.filter((y, i) => i % 2 === 0), maxYear].forEach(y => {
    const span = document.createElement('span');
    span.textContent = y.toString();
    yearLabels.appendChild(span);
  });

  const range = document.getElementById('year-range') as HTMLInputElement;
  range.min = '0';
  range.max = (events.length - 1).toString();
  range.value = '0';
}

export function renderEventCard(event: TimelineEventObject): void {
  const card = document.getElementById('event-card')!;
  card.innerHTML = `
    <h2>${event.year} — ${event.title}</h2>
    <img src="${event.imageURL}" alt="${event.title}">
    <p>${event.description}</p>
    <button class="learn-btn">Learn More</button>
  `;
}
