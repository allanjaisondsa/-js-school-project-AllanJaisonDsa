export function openModal(event) {
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
    document.getElementById('close-modal')
        .addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal)
            closeModal();
    });
}
export function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}
