import * as common from "/js/common/common.js";
//import * as playHandler from "/js/actions/playhandler.js";
import * as card from "/js/components/card.js";
import * as c from "/js/common/constant.js";
//import { InitGame } from "../common/initgame.js";
import { ShowGame } from "../common/showgame.js";


export function proHandler(f, ...arg) {
  return f(...arg)
    .then(r => r).catch(e => e);
    // .then(r => r);
}

export function btnPickedEvent(event, bMap) {

  let ect = event.currentTarget;
  //const pickerObj = c.pickerObj;
  const picked = common.playPicker(c.moveAttr, ect, bMap);

  c.pickerObj.buttonAttribute[c.moveAttr] = [
    `${picked[0]}-${c.pickerAttr[1][0]}`, 
    `${picked[1]}-${c.pickerAttr[1][1]}`, 
  ];
  c.pickerObj.buttonAttribute[c.pickerAttr[0]] = c.pickerAttr[1];

  //const playGame = new InitGame(c.pickerObj);
  return new Promise((resolve, reject) => {
    const playGame = new ShowGame(c.pickerObj, c.cardPlayers);//.getCardArr;
      //debugger;
      c.sectionPlay.firstElementChild.replaceWith(playGame.playContainer);
    });
    resolve();
  }
  //c.sectionPlay.append(playGame.playContainer);
  //playGame.playMap;

  //c.sectionPlay

  //debugger;

  
    //playerAttr = bMap.get

  // return new Promise((resolve, reject) => {
  //   alert(ect)
  //   resolve();
  //   reject(new Error("error"));
  // });
}