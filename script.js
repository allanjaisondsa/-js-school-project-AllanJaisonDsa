// Fetch and render timeline events
async function loadEvents() {
  try {
    const response = await fetch('events.json');
    const events = await response.json();
    renderEvents(events);
  } catch (error) {
    console.error('Error loading events:', error);
  }
}

function renderEvents(events) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  events.forEach((event, index) => {
    const marker = document.createElement('div');
    marker.className = 'event-marker';
    marker.innerHTML = `
      <h4>${event.year} — ${event.title}</h4>
      <p>${event.category}</p>
    `;
    marker.addEventListener('click', () => openModal(event));
    timeline.appendChild(marker);
  });
}

function openModal(event) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div id="modal-content">
      <span id="close-modal" style="cursor:pointer;float:right;">&times;</span>
      <h2>${event.year} — ${event.title}</h2>
      <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%;border-radius:6px;">
      <p>${event.description}</p>
      <small>Category: ${event.category}</small>
    </div>
  `;
  modal.classList.add('active');

  document.getElementById('close-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', loadEvents);
