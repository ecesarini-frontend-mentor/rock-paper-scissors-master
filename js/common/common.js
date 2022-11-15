export function elementCreator(ty, con, clArr = false) {
  const elem = document.createElement(ty);
  if (clArr && Array.isArray(clArr)) elem.classList.add(...clArr);
  elem.innerText = con;
  return elem;
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

export function btnBotOverlay(inner, cl, attr) {
  const bbo = document.createElement("div");

  bbo.classList.add(...cl);
  inner.setAttribute(attr[0], attr[1]);
  bbo.append(inner);
  return bbo;
}

export function callbackAttacher(obj, callback) {
  for (let prop in obj) {
    obj[prop].addEventListener("click", callback);
  }
}
