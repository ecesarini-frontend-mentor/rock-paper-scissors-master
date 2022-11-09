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

export function randomPick(num) {
  return Math.floor(Math.random() * num);
}

export function playPicker(ect, obj, sub) {
  const picked = [
    Object.keys(obj).find((key) => obj[key] === ect),
    Object.keys(obj)[randomPick(3)],
  ];
  const arr = picked.map((elem) => `${sub} button-${elem}`);
  return arr;
}

export function btnPlayPicker(ect, obj, clArr) {
  const picked = [
    Object.keys(obj).find((key) => obj[key] === ect),
    Object.keys(obj)[randomPick(3)],
  ];
  clArr[1] = clArr[1].map(
    (
      item,
      ind //map returns something
    ) => (item += ` main-play-row2 button-${picked[ind]}`)
  );
  return clArr;
}

export function callbackAttacher(obj, callback) {
  for (let prop in obj) {
    obj[prop].addEventListener("click", callback);
  }
}
