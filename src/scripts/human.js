import MovingObject from './movingObject.js';
import * as Util from './util.js';


class Human extends MovingObject {
    static IMAGE = './images/walkcyclevarious.png';
    static humanImage = new Image();


    constructor (pos,ctx,person){
        const vel = Util.randomVec(1);
        super(pos,vel);
    
        this.image = Human.humanImage;
        this.person = person;
        this.spriteWidth = 65;
        this.spriteHeight = 61*this.person;
        this.maxFrame = 11;
        this.minFrame=9;
        this.gameFrame=0;
        this.frame = 8;
    }

    draw(ctx){
        console.log(this.image);
        let [x,y] = this.pos;
        let person = this.person
        const humanImage = this.image;
        humanImage.src = Human.IMAGE;
        const width = this.spriteWidth
        const height = this.spriteHeight
        let frame = this.frame;
        
        humanImage.onload = function(){
            ctx.clearRect(0,0,1000,500);
            ctx.drawImage(humanImage,65*frame,61*person,65,61,x,y,65,61);
        }
        
        // ctx.drawImage(this.image,10*this.spriteWidth,1*this.spriteHeight,this.spriteWidth,this.spriteHeight,x,y,this.width,this.height);

    }

    update(){
        if (this.frame<this.maxFrame) this.frame++;
        else this.frame = this.minFrame;
    }

    move(){
        let [x,y] = this.pos;
        if (x>0) this.pos = [this.pos[0]-1,this.pos[1]];
    }


    animate(ctx,frameRate=60){
        // ctx.clearRect(0,0,1000 ,500);
        let frameCounter = 0;
        const frameDelay = Math.floor(60/frameRate);

        const animateLoop = ()=>{
            if (frameCounter % frameDelay===0){
                // ctx.clearRect(0,0,1000 ,500);
                this.draw(ctx);
                this.update();
                this.move();
            }
            frameCounter++;
            requestAnimationFrame(animateLoop.bind(this));
        };
        requestAnimationFrame(animateLoop.bind(this));


    }
}

export default Human

