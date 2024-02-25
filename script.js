"use strict";

fetch("data.json")
  .then((response) => response.json())
  .then(async (data) => {
    await new Promise((resovle) => setTimeout(resovle, 1000));
    renderBars(data);
  });

const renderBars = (data) => {
  const barsElements = data.map((barData) => {
    return `
        <div class="column">
          <div class="price">${barData.amount}$</div>
          <div class="chart" style="height:${barData.amount * 2.86}px;"></div>
          ${barData.day}
        </div>
    `;
  });

  const containerEl = document.querySelector(".days-column");
  containerEl.innerHTML = barsElements.join("");
};
