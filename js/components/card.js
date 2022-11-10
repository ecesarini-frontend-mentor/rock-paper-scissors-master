//import * as btn from "/js/components/buttons.js";

export function cardAdder(el1, el2) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.append(el1, el2);
  return card;
}
