import * as playHandler from "../actions/playhandler.js";

export const step1InitProp = ["paper", "scissors", "rock"],
  step1InitClass = [
    "main-play-row1 button-paper",
    "main-play-row1 button-scissors",
    "main-play-row2 button-rock"
  ],
  step1ContainerClass = ["main-play-container", "main-play-step1"],
  step2ContainerClass = ["main-play-container", "main-play-animation", "main-play-step2"],
  step2InitProp = ["player", "bot"],

  playPickedCard = {
    player: undefined, 
    bot: undefined
  },
  
  btnClassBotPicker = ["btn-bot-shadow"],
  btnShadowFadeTime = 2300;


export let target = document.querySelector(".play");
  //step2InitClass = undefined;
  //currentPlayBtn = {};