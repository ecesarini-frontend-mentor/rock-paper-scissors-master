export function objMapper(prop, value) {
  if (prop.length !== value.length) {
    throw new Error("Input value lengths mismatch");
  }
  try {
    const obj = {};
    prop.forEach((elem, ind) => (obj[elem] = value[ind]));
    return obj;
  } catch (e) {
    console.log(e);
  }
}

// export class StepObj {
//   constructor(btnProp, btnClass) {
//     this.btnProp = btnProp;
//     this.btnClass = btnClass;
//   }
// }

// export class Listener {
//   constructor(func, arg) {
//     this.func = func;
//     this.arg = arg;
//   }
// }

export function randomPick() {
  return Math.floor(Math.random() * 3);
}

export function btnPlayPicker(ect, objTg) {
  const pick = {};
  pick["player"] = ect;
  pick["bot"] = objTg[Object.keys(objTg)[randomPick()]];
  for(let p in pick) {
    pick[p].classList.replace("main-play-row1", "main-play-row2");
  };
  return pick;
}
