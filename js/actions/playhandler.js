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
    this.initProp.forEach(p => this.btnCurrentList[p] = undefined);
    this.initClass.forEach((elem, index) => { //don't use "map" because returns an array
      this.btnCurrentList[Object.keys(this.btnCurrentList)[index]] = buttonBuild(elem);
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
  while(tg.firstChild) tg.removeChild(tg.firstChild); //check https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements 
  if(tgClass) {
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
  if(init) { 
    tg.append(container) 
  };
}

export function btnContainerUpdater(tg, tgClass, obj) {
  const container = btnContainerFlush(tg, tgClass);
  for (let p in obj) {
    container.append(obj[p]);
  }
  timeAction(2000, obj.bot, c.btnShadowHouse);
  //debugger;
}

export function timeAction(delay, elem, sel) {
  setTimeout(()=> {
    elem.classList.remove(sel); 
  }, delay);
}

// export function btnPlayObj(obj) {
//   const btnObj = {};
//   for (let prop in obj) {
//     btnObj[prop] = buttonBuild(obj[prop]);
//   }
//   return btnObj;
// }

// export function containerObj(contCl, obj) {
//   const container = document.createElement("div");
//   container.classList.add(...contCl);
//   for (let prop in obj) {
//     container.append(obj[prop]);
//   }
//   return container;
//   //tg.append(container);
// }
