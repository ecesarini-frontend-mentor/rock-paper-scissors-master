export class StepObj {
  constructor(btnProp, btnClass) {
    this.btnProp = btnProp;
    this.btnClass = btnClass;
  }
}

export class Listener {
  constructor(func, arg) {
    this.func = func;
    this.arg = arg;
  }
}

export function randomPick() {
  return Math.floor(Math.random() * 3);
}

export function btnPlayPicker(obj) {
  obj["player"] = e.currentTarget;
  obj["bot"] = btnActive[randomPick()];
  return obj;
}
