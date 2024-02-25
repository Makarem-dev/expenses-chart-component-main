"use strict";

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((entry) => {
      const dayEl = document.querySelector(`[day="${entry.day}"]`);
      if (dayEl) {
        statHeight = entry.amount * 2.86;
        console.log(statHeight);
        // dayEl.style.height = `${statHeight}px`;
      }
    });
  });
