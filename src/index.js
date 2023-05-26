
// let game = document.getElementById('game');
// game.width=500;
// game.height=500;
// const ctx = game.getContext("2d");
// ctx.fillStyle="black";
// ctx.fillRect(0,0,500,500);
// import wordgenerator from "./scripts"
import {getRandomWord} from './scripts/wordgenerator.js';
import MovingObject from './scripts/movingObject.js';
import Setting from './scripts/setting.js';
import Human from './scripts/human.js';
window.MovingObject = MovingObject;
window.Setting = Setting;
document.addEventListener("DOMContentLoaded", () => { 
     
    const word = getRandomWord();
    let setting = document.getElementById('setting');
    let game= document.getElementById('game');
    const ctx = game.getContext("2d");
    const setting2 = setting.getContext("2d");
    let background = new Setting();
    background.draw(setting2);
    setting.width = 1000;
    setting.height = 500;
    game.width=1000;
    game.height=500;

    //code to be put in game class
    let humans=[]
    let human1 = new Human([500,100],ctx,1);
    let human2 = new Human([500,300],ctx,2);
    human1.animate(ctx,4);
    human2.animate(ctx,4);
    // human1.animate(ctx,5);
    // human2.animate(ctx,5);
  })
