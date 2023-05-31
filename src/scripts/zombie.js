import Projectile from "./projectile";
import Game from './game.js';
class Zombie{
    static url = './images/zombie.png';
    static throwingAnimation=[3,63,130,205,352,407,460,63]; 
    static throwingDimensions=[[50,70],[50,70],[50,70],[50,70],[50,70],[50,70],[68,70],[50,70]];
    static idleDimensions=[[47,70],[47,70],[47,70],[44,70],[44,70],[44,70]];
    static idleAnimation=[3,53,102,150,196,243];
    static idleCol=163;
    static throwingCol = 320;
    static idleRow = [229];
    constructor(y,game){
        //y position is dependent on zombie lane
        this.standingIndex=0;
        this.x = 100;
        this.y = y;
        this.game = game;
        this.sprite = new Image();
        this.imageLoaded=false;
        this.sprite.onload=()=>{
            this.imageLoaded=true;
        }
        this.sprite.src = Zombie.url;
        this.idleAnimation=[1,2,3,4,5,6];
        this.targets=[];
        this.projectile=false;
        this.projectileThrown=false;

    }

    drawFrame(ctx){
        
        console.log(this.targets);
        if (this.targets.every((target=>target.targeted===true))|| this.targets.length===0){
            this.drawIdleFrame(ctx);
        }else{
            this.drawThrowingFrame(ctx);
        }
    }
    throwProjectile(){
        if (this.targets.length > 0){
            const target = this.targets.shift();
            if(!target.targeted){
            const trash = new Projectile(this.y,this.game);
            this.game.add(trash);
            target.targeted=true;
            }
        }
        // let targetLength=this.targets.length
        // for(let i=this.targets.length-1;i>=0;i--){
        //     let trash = new Projectile(this.y);
        //     this.game.add(trash)
        //     this.targets.splice(i,1);
        // }
    }
    drawThrowingFrame(ctx){
        let [frameX,frameY] = [Zombie.throwingDimensions[this.standingIndex][0],Zombie.throwingDimensions[this.standingIndex][1]];
        let [dimensionX, dimensionY] =[Zombie.throwingAnimation[this.standingIndex],Zombie.throwingCol];
        if(this.imageLoaded){
            this.standingIndex++;
            ctx.drawImage(this.sprite,dimensionX,dimensionY,frameX,frameY,this.x,this.y,frameX,frameY);
            // ctx.drawImage(this.sprite,63,320,50,70,this.x,this.y,50,70);
            
            if(this.standingIndex>7) {
                this.throwProjectile();
                this.standingIndex = 0;
               }
            }
        }
    drawIdleFrame(ctx){
        let [frameX,frameY] = [Zombie.idleDimensions[this.standingIndex][0],Zombie.idleDimensions[this.standingIndex][1]]
        let [dimensionX, dimensionY] =[Zombie.idleAnimation[this.standingIndex],Zombie.idleCol];
        if(this.imageLoaded){
                this.standingIndex++;
                ctx.drawImage(this.sprite,dimensionX,dimensionY,frameX,frameY,this.x,this.y,frameX,frameY);
                // ctx.drawImage(this.sprite,63,320,50,70,this.x,this.y,50,70);
           
               if(this.standingIndex>5) this.standingIndex = 0;
            }
    }
    

}

export default Zombie;