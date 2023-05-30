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
    getCenterX(){

    }
    getCenterY(){

    }
    move() {
        
        this.pos = [this.pos[0]-this.speed,this.pos[1]];
    }
    
    isCollidedWith(human){
        //check if projectile is in the correct lane
        const centerDist=this.pos[0]-human.pos[0];
        if (centerDist>=-10) return true;
    }

}

export default MovingObject