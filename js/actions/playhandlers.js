import { buttonBuild } from "../components/buttons/buttons.js";
import * as common from "../common/common.js";

export function btnPlayCluster(prop, clList) {
  const currentPlayer = {};
  prop.forEach((p, ind) => {
    currentPlayer[p] = buttonBuild(clList[ind]);
  });
  return currentPlayer;
}

export function playUpdater(tg, container) {
  tg.append(container);
}

export function clickCallBack(obj, callback, cbArg) {
  for (let prop in obj) {
    obj[prop].addEventListener("click", () => callback(...cbArg));
  }
}

export function btnPlayContainer(
  contClList,
  prop,
  propClList,
  callback,
  cbArg
) {
  const container = document.createElement("div");
  container.classList.add(...contClList);
  const cbc = btnPlayCluster(prop, propClList);
  clickCallBack(cbc, callback, cbArg);
  for (let p in cbc) {
    container.append(cbc[p]);
  }
  return container;
}

/*export function step1(e) {
    const pkdCluster = btnPlayCluster(
        ['player', 'bot'],
        ['main-play-row2 button-player', 'main-play-row-2 button-bot'],
    );
    btnPlayContainer(
        ['main-play-container', 'main-play-step2'],
        e.currentTarget, document.querySelectorAll(".play button")[common.randomPick()]],
        pkdCluster,
        ['main-play-row2 button-player', 'main-play-row-2 button-bot'],
    )

}

export function btnPicker(e) {
    const btnPlay = document.querySelectorAll(".play button");
    const prop = ['player', 'bot'],
        propClist = ['main-play-row2 button-player', 'main-play-row-2 button-bot'];

    const btnActive = btnPlayCluster(prop, propClist);

    btnActive['player'] = e.currentTarget;
    btnActive['bot'] = btnPlay[common.randomPick()];
    //debugger;
}*/
