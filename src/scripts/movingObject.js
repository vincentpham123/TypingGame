import {dist} from './util.js';
const NORMAL_FAME_TIME_DELTA = 1000/60;
class MovingObject{
    static humanWdith=65;
    static trashWidth=20;
    constructor(pos,speed,game){
        this.pos = pos;
        this.speed = speed;
        this.game=game;


    }
    move() {
        
        this.pos = [this.pos[0]-this.speed,this.pos[1]];
    }
    getCenter(spriteWidth){
        return this.pos[0]+Math.floor(spriteWidth/2);
    }
    isCollidedWith(human,width1,width2){
        // check if projectile is in the correct lane
        // projectile 595,650,696
        // human start 590,650,680
        const projectileLane = this.pos[1];
        const humanLane = human.pos[1];
      
        // Define the acceptable range for the lane
        const laneRange = 20;
      
        if (Math.abs(projectileLane - humanLane) <= laneRange ) {
          const centerDist = this.getCenter(width1) - human.getCenter(width2);
          if (Math.abs(centerDist)<=20) {
            return true;
          }
        }
      
        return false;
    }



}

export default MovingObject