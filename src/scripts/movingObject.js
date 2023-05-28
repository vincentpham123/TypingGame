
const NORMAL_FAME_TIME_DELTA = 1000/60;
class MovingObject{
   
    constructor(pos,speed){
        this.pos = pos;
        this.speed = speed;
        


    }

    move() {
        
        this.pos = [this.pos[0]-this.speed,this.pos[1]];
    }
    


}

export default MovingObject