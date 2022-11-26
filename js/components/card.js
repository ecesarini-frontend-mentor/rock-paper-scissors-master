//import * as btn from "/js/components/buttons.js";

export function cardBuild(el1, el2, cl) {
  //debugger;
  const card = document.createElement("div");
  card.classList.add("card");
  if(cl) card.classList.add(cl.split(" "));
  card.append(el1, el2);
  return card;
}
