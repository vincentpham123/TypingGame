
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
import Game from "./scripts/game.js"
import Resource from './scripts/resources.js'
import GameView from "./scripts/game_view.js"
import Projectile from './scripts/projectile.js'

window.Human = Human;
window.MovingObject = MovingObject;
window.Setting = Setting;
document.addEventListener("DOMContentLoaded", () => { 
     
    // const word = getRandomWord();
    // let setting = document.getElementById('setting');
    let canvas= document.getElementById('game');
    const ctx = canvas.getContext("2d");
    const imageUrls = ['./images/bg.png',
    './images/grass_15.png',
    './images/house1.png',
    './images/walkcyclevarious.png',
    './images/wireframe.png'];
    let resources = new Resource(imageUrls);
  console.log(resources.resourceCache['./images/grass_15.png']);

    let setting = new Setting(ctx);
    // setting.drawFrame(ctx);
    canvas.width = 1500
    canvas.height = 900

    let trash = new Projectile(ctx);
    trash.drawFrame(ctx);
    
    // setting.drawFrame(ctx);
    // let game = new Game();
    // let gameview = new GameView(game,ctx).start();
    // const game = new Game();
    // console.log(game);
    // new GameView(game,ctx).start();
    

    // setting.width = 1000;
    // setting.height = 500;
    
    // //code to be put in game class
    // let humans=[]
    // let human1 = new Human(ctx);
    // human1.drawFrame(ctx);
  
    // let human2 = new Human();
    // human1.animate(ctx,5)
    // human1.animate(ctx,5);
    // human2.animate(ctx,5);
  });
