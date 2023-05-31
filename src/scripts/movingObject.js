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
        //axis-aligned bounding box(two objects a,b)
        //if a.x + a.width >=b.x
        //& (a.x<=b.x+b.width)
        //&(a.y+a.height>=b.y)
        //a.y<=(b.y+b.height)
        if (Math.abs(projectileLane - humanLane) <= laneRange ) {
          const detection1 = (this.pos[0]+width1>=human.pos[0]);
          const detection2 = (human.pos[0]+width2>=this.pos[0]);
          if (detection1 && detection2) {
            console.log('collision detected')
            return true;
          }
        }
      
        return false;
    }



}

export default MovingObject