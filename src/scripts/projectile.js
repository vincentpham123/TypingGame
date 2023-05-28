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
            console.log('callback')
        };
        this.trash.src = Projectile.url;
        this.number = Math.floor(Math.random()*3)+1;
        this.centerX = (1500-Projectile.spriteWidth)/2;
        this.centerY = (500-Projectile.spriteHeight)/2;
      
    }
    drawFrame(ctx){
        if(this.imageLoaded){
            ctx.drawImage(this.trash,3,4,20,20,100,100,20,20);
            // ctx.drawImage(this.trash,0,0);
        }
    }
    move(){
        this.pos = [this.pos[0]+20,this.pos[1]];
    }
    


}
export default Projectile;