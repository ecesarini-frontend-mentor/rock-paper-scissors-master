export const sectionPlay = document.querySelector(".play"),
  playInit = {
    containerClass: ["main-play-container", "main-play-step1"],
    buttonClass: [
      "main-play-row1 button-sec-play",
      "main-play-row1 button-sec-play",
      "main-play-row2 button-sec-play",
    ],
    buttonAttribute: {
      move: ["paper", "scissors", "rock"],
      //test: ["test-paper", "test-scissors", "test-rock"]
    }
  },  
  moveAttr = "move",
  pickerAttr = ["picker", ["player", "bot"]],

  pickerObj = {
    containerClass: ["main-play-container", "main-play-step2"],
    buttonClass: [
      "button-sec-play",
      "button-sec-play",
    ],
    buttonAttribute: { }
  },
  cardPlayers = [
    ["p", "You picked", ["card-play-header", "card-play-header-player"], ["card-play", "card-play-player"]],
    ["p", "The house picked", ["card-play-header", "card-play-header-bot"], ["card-play", "card-play-bot"]]
  ];



// cbStep1 = (arg) => {
//   return function(e) {
//     (e) => cbe.step1Test(e, arg);
//   }
// },
//cbStep1 = (e) => cbe.step1Test(e),







//import * as playHandler from "../actions/playhandler.js";

//const step1 = ()=>alert("ciao");

// export const step1InitProp = ["paper", "scissors", "rock"],
//   step1InitClass = [
//     "main-play-row1 button-sec-play",
//     "main-play-row1 button-sec-play",
//     "main-play-row2 button-sec-play",
//   ],
//   step1ContainerClass = ["main-play-container", "main-play-step1"],
//   step2ContainerClass = [
//     "main-play-container",
//     "main-play-animation",
//     "main-play-step2",
//   ],
//   step2InitProp = ["player", "bot"],
//   playPickedCard = {
//     player: undefined,
//     bot: undefined,
//   },
//   btnClassBotPicker = ["btn-bot-shadow"],
//   btnShadowFadeTime = 2300;

// export let target = document.querySelector(".play");
//step2InitClass = undefined;
//currentPlayBtn = {};
