import {dist} from './util.js';
const NORMAL_FAME_TIME_DELTA = 1000/60;
class MovingObject{
   
    constructor(pos,speed,game){
        this.pos = pos;
        this.speed = speed;
        this.game=game;


    }

    move() {
        
        this.pos = [this.pos[0]-this.speed,this.pos[1]];
    }
    
    isCollidedWith(human){
        const centerDist=dist(this.pos,human.pos);
        return centerDist< (this.Width+this.width);
    }

}

export default MovingObject