import { buttonBuild } from "/js/components/button.js";
import * as c from "../common/constant.js";
import * as common from "/js/common/common.js";

export class BtnPlay {
  constructor(initProp, initClass, handler) {
    this.initProp = initProp;
    this.btnCurrentList = {};
    this.initClass = initClass;
    this.handler = handler;
  }

  get init() {
    this.initProp.forEach((p) => (this.btnCurrentList[p] = undefined));
    this.initClass.forEach((elem, index) => {
      //don't use "map" because returns an array
      this.btnCurrentList[Object.keys(this.btnCurrentList)[index]] =
        buttonBuild(elem);
    });
    for (let prop in this.btnCurrentList) {
      this.btnCurrentList[prop].addEventListener("click", this);
    }
    return this.btnCurrentList;
  }

  handleEvent(e) {
    if (e.type === "click") {
      this.handler(e.currentTarget);
    }
  }
}

export function btnContainerFlush(tg, tgClass) {
  while (tg.firstChild) tg.removeChild(tg.firstChild); //check https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
  if (tgClass) {
    const container = document.createElement("div");
    container.classList.add(...tgClass);
    return container;
  }
}

export function btnContainerRefresh(tg, tgClass, obj, init = false) {
  const container = btnContainerFlush(tg, tgClass);
  for (let p in obj) {
    container.append(obj[p]);
  }
  if (init) {
    tg.append(container);
  }
}

export function btnContainerUpdater(tg, tgClass, obj) {
  const container = btnContainerFlush(tg, tgClass),
    btnRm = obj.bot.querySelector("button"),
    remover = () => {btnRm.classList.remove(c.btnShadowHouse)};
    // skipper = () => {if(window.onclick) return true};

  for (let p in obj) {
    container.append(obj[p]);
  }
  //const ta = timeAction(1000, obj.bot.querySelector("button"), c.btnShadowHouse);
  
  const ta = setTimeout(remover, c.btnShadowFadeTime);
  // window.addEventListener("click", () => {
  //   clearTimeout(ta);
  //   remover();
  // });
  // if(skipper()) {
  //   clearTimeout(ta);
  //   remover();
  // }

  //debugger;
  tg.append(container);
}

// export function timeAction(delay, elem, sel) {
//   const remover = () => {
//     elem.classList.remove(sel);
//   };

//   return setTimeout(remover, delay);
// }
