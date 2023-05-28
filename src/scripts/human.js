import MovingObject from './movingObject.js';
import * as Util from './util.js';
import Resources from './resources.js';


class Human extends MovingObject {
    static IMAGE = './images/walkcyclevarious.png';
    static start =[680,650,600];
    static startSpeed=.5;
    static frame = 9;
    static spriteHeight = 60;
    static spriteWidth = 65;
    // need to set up 3 random positions for a human, 
    constructor (ctx){
        const speed = Human.startSpeed
        const y = Human.start[Math.floor(Math.random()*Human.start.length)];
        const x = Math.floor(Math.random()*(1800-1500+1))+1500;
    
        super([x,y],speed);
        this.sprite = new Image();
        this.maxFrame=11;
        this.minFrame=9;
        this.centerX = (1500-Human.spriteWidth)/2;
        this.centerY = (500-Human.spriteHeight)/2;
        this.person = Math.floor(Math.random()*9);
        this.spriteHeight = Human.spriteHeight*this.person;
        this.frame = Human.frame;
        this.imageLoaded = false;
        // this.sprite.src = Human.IMAGE;
        this.sprite.onload= ()=>{
            console.log('callback')
            this.imageLoaded=true;
            // this.drawFrame(ctx);
        };
        this.sprite.src = Human.IMAGE;
    }


   drawFrame(ctx) {
        let [x,y] = this.pos;
        let personNum = this.person;
        let frame = this.frame;
        console.log(this.sprite);
        if (this.imageLoaded){

            console.log(this.sprite);
            ctx.drawImage(this.sprite,Human.spriteWidth*frame,
                Human.spriteHeight*personNum,
                Human.spriteWidth,
                Human.spriteHeight,
                x,
                y,
                70,
                70);
        }
        // ctx.drawImage(this.sprite,65,61,65,61,this.pos[0],this.pos[1],65,61);
    }
    
    update(){
        if (this.frame<this.maxFrame) this.frame++;
        else this.frame = this.minFrame;
    }

    move(){
        let [x,y] = this.pos;
        if (x>0) this.pos = [this.pos[0]-1,this.pos[1]];
    }


   

    checkCollision(rect1,rect2){
        //check if a projectile has hit a human
        

    }
}

export default Human

