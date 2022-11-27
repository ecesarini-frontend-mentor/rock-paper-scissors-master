//import * as btn from "/js/components/buttons.js";

export function cardBuild(el1, el2, clArr) {
  //debugger;
  const card = document.createElement("div");
  card.classList.add("card");
  if(clArr && Array.isArray(clArr)) card.classList.add(...clArr);
  card.append(el1, el2);
  return card;
}
