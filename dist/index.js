var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from './fetcher.js';
import { renderSlider, renderEventCard } from './render.js';
import { initThemeToggle } from './theme.js';
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    initThemeToggle();
    const events = yield fetchEvents();
    renderSlider(events);
    renderEventCard(events[0]);
    const range = document.getElementById('year-range');
    range.addEventListener('input', () => {
        const index = parseInt(range.value, 10);
        renderEventCard(events[index]);
    });
}));
