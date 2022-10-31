export function randomPick() {
    return Math.floor(Math.random() * 3);
}

export function btnPlayPicker(obj) {
    obj['player'] = e.currentTarget;
    obj['bot'] = btnActive[randomPick()];
    return obj;
}