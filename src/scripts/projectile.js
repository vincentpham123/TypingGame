import MovingObject from './movingObject.js';

class Projectile extends MovingObject {
    static spriteWidth = 20;
    static spriteHeight = 20;
    static url = './images/littered_dungeon.png';
    static frames = [[3,4],[30,4],[60,4],[90,2]];
    static dimensions = [[20,20],[20,20],[20,20],[30,30]];
    constructor(y,game){
        let pos = [100+50,y+20];
        let speed = 20;
        super(pos,speed,game)
        this.randomIndex =Math.floor(Math.random()*4);
        this.width = Projectile.dimensions[this.randomIndex][0];
        this.height = Projectile.dimensions[this.randomIndex][1];
        this.trash = new Image();
        this.imageLoaded=false 
        this.trash.onload=()=>{
            this.imageLoaded = true;

        };
        this.trash.src = Projectile.url;
        this.number = Math.floor(Math.random()*3)+1;
      
    }
    getCenterX(){
        return this.pos[0]+20/2;
    }
    getCenterY(){
        return this.pos[1]+20/2;
    }
    update(){
        this.rotation+=this.rotationSpped;
    }
    drawFrame(ctx){
        
        let [frameX,frameY] = [Projectile.frames[this.randomIndex][0],Projectile.frames[this.randomIndex][1]];
        let [dimX,dimY] = [Projectile.dimensions[this.randomIndex][0],Projectile.dimensions[this.randomIndex][1]];
        if(this.imageLoaded){
            
            // ctx.drawImage(this.trash,3,4,20,20,this.pos[0],this.pos[1],20,20);
            ctx.drawImage(this.trash,frameX,frameY,dimX,dimY,this.pos[0],this.pos[1],dimX,dimY);
            // ctx.rotate(-1);
            // ctx.drawImage(this.trash,0,0);
        }
    }
    move(){
        this.pos = [this.pos[0]+25,this.pos[1]];
    }
    


}
export default Projectile;