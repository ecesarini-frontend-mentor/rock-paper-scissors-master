export function elementCreator(ty, con, clArr = false) {
  const elem = document.createElement(ty);
  if (clArr && Array.isArray(clArr)) elem.classList.add(...clArr);
  if(con) elem.innerText = con;
  return elem;
}

export function randomPick(num) {
  return Math.floor(Math.random() * num);
}

export function playPicker(attr, ect, bMap) {
  const player = ect.getAttribute(attr),
    mapProp = Array.from(bMap.keys());
  
  return [player, mapProp[randomPick(3)]];  
}
