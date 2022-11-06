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

export function randomPick() {
  return Math.floor(Math.random() * 3);
}

export function btnPlayPicker(ect, obj, clArr) {
  //const pick = {};
  const picked = [
    Object.keys(obj).find((key) => obj[key] === ect),
    Object.keys(obj)[randomPick()],
  ];
  clArr[1] = clArr[1].map((item, ind) => //map returns something
    item += ` main-play-row2 button-${picked[ind]}`
  );
  return clArr;
}
