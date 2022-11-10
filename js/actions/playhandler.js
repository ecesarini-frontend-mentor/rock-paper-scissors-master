import { buttonBuild } from "/js/components/button.js";
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
    this.btnCurrentList;
    return this.btnCurrentList;
  }

  handleEvent(e) {
    if (e.type === "click") {
      this.handler(e.currentTarget);
    }
  }
}

export function btnContainerRefresh(tg, tgClass, obj, init = false) {
  while(tg.firstChild) tg.removeChild(tg.firstChild); //check https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements 
  const container = document.createElement("div");
  container.classList.add(...tgClass);
  for (let p in obj) {
    container.append(obj[p]);
  }
  if(init) { 
    tg.append(container) 
  };
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
