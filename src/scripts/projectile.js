import MovingObject from './movingObject.js';

class Projectile extends MovingObject {
    static spriteWidth = 20;
    static spriteHeight = 20;
    static url = './images/littered_dungeon.png';
    constructor(ctx){
        let pos = [100,100];
        let speed = 20;
        super(pos,speed)
        this.frame = Math.floor(Math.random()*3)+1
        this.trash = new Image();
        this.imageLoaded=false 
        this.trash.onload=()=>{
            this.imageLoaded = true;
            this.drawFrame(ctx);
        };
        this.trash.src = Projectile.url;
        this.number = Math.floor(Math.random()*3)+1;
        this.centerX = this.pos[0]+20/2;
        this.centerY = this.pos[1]+20/2;
        this.rotation=0;
        this.rotationSpeed=25;
      
    }
    update(){
        this.rotation+=this.rotationSpped;
    }
    drawFrame(ctx){
        if(this.imageLoaded){
            ctx.save();
            ctx.translate(this.centerX,this.centerY);
            ctx.rotate(5.9);
            ctx.drawImage(this.trash,3,4,20,20,100,100,20,20);
            // ctx.rotate(-1);
            ctx.restore();
            // ctx.drawImage(this.trash,0,0);
        }
    }
    move(){
        this.pos = [this.pos[0]+20,this.pos[1]];
    }
    


}
export default Projectile;