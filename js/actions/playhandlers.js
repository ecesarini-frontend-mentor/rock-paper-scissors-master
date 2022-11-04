import { buttonBuild } from "../components/buttons/buttons.js";

export function btnPlayCluster(prop, clList) {
  const currentPlayer = {};
  prop.forEach((p, ind) => {
    currentPlayer[p] = buttonBuild(clList[ind]);
  });
  return currentPlayer;
}

export function btnPlayContainer(contClList, prop, propClList) {
  const container = document.createElement("div"),
    cbc = btnPlayCluster(prop, propClList);
  container.classList.add(...contClList);
  for (let p in cbc) {
    container.append(cbc[p]);
  }
  return container;
}

function callbackInit(btn, callback, cbArg) {
  btn.forEach((b) => b.addEventListener("click", () => callback(...cbArg)));
}

export function playUpdater(tg, container, cbObj) {
  const btn = container.querySelectorAll("button");
  callbackInit(btn, cbObj.func, cbObj.arg);
  tg.append(container);
}

// export function clickCallBack(obj, callback, cbArg) {
//   for (let prop in obj) {
//     obj[prop].addEventListener("click", () => callback(...cbArg));
//   }
// }
