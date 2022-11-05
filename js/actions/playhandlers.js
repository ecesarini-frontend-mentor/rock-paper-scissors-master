import { buttonBuild } from "/js/components/buttons/buttons.js";
// import * as common from "/js/common/common.js";

export function btnPlayObj(obj) {
  const btnObj = {};
  for(let prop in obj) {
    btnObj[prop] = buttonBuild(obj[prop]);
  }
  return btnObj;
}

export function containerObj(tg, contCl, obj) {
  const container = document.createElement('div');
  container.classList.add(...contCl);
  for(let prop in obj) {
    container.append(obj[prop]);
  }
  tg.append(container);
}


export function callbackAttacher(obj, callback) {
  for(let prop in obj) {
    obj[prop].addEventListener("click", callback);
  }
}

// export function clickCallBack(obj, callback, cbArg) {
//   for (let prop in obj) {
//     obj[prop].addEventListener("click", () => callback(...cbArg));
//   }
// }

// export function btnPlayContainer(contClList, prop, propClList) {
//   const container = document.createElement("div"),
//     cbc = btnPlayCluster(prop, propClList);
//   container.classList.add(...contClList);
//   for (let p in cbc) {
//     container.append(cbc[p]);
//   }
//   return container;
// }

// function callbackInit(btn, callback, cbArg) {
//   btn.forEach((b) => b.addEventListener("click", () => callback(...cbArg)));
// }

// export function playUpdater(tg, container, cbObj) {
//   const btn = container.querySelectorAll("button");
//   callbackInit(btn, cbObj.func, cbObj.arg);
//   tg.append(container);
// }
