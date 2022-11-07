import { buttonBuild } from "/js/components/buttons.js";
// import * as common from "/js/common/common.js";

// export function populateMyTarget(a) {
//   let target;
//   a.forEach(ae => {
    
//   });


// }


export function btnPlayObj(obj) {
  const btnObj = {};
  for(let prop in obj) {
    btnObj[prop] = buttonBuild(obj[prop]);
  }
  return btnObj;
}

export function containerObj(contCl, obj) {
  const container = document.createElement('div');
  container.classList.add(...contCl);
  for(let prop in obj) {
    container.append(obj[prop]);
  }
  return container;
  //tg.append(container);
}


export function callbackAttacher(obj, callback) {
  for(let prop in obj) {
    obj[prop].addEventListener("click", callback);
  }
}
