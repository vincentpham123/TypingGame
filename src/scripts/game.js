import Human from './human.js';
import Setting from './setting.js';
import Zombie from './zombie.js';
import Projectile from './projectile.js';
class Game {
    static num_humans=5;
    static DIM_X = 1500;
    static DIM_Y = 900;
    constructor(){
        this.humans = [];
        this.zombies=[];
        this.setting = [];
        this.addHumans();
        this.addSetting();
        this.addZombies();
        this.trash=[];
        this.active = false;
        this.time = 0;

    }
    
    add(object){
        if (object instanceof Human) {
            this.humans.push(object);
          } else if (object instanceof Projectile ) {
            this.trash.push(object);
          } else {
            throw new Error("unknown type of object");
          }

    }
    addZombies(){
        let position=[575,630,676];
        let zombie1 = new Zombie(575,this);
        let zombie2 = new Zombie(630,this);
        let zombie3 = new Zombie(676,this);

        this.zombies.push(zombie1);
        this.zombies.push(zombie2);
        this.zombies.push(zombie3);
    
    }
    
    addHumans(){
        for(let i =0;i<Game.num_humans;i++){
            this.add(new Human(this));
        }
    }
    addSetting(){
        this.setting.push(new Setting());
    }

    moveObjects(){
        this.humans.concat(this.trash).forEach(object =>{
            object.move();
        })
        
    }

    allObjects(){
        return [].concat(this.setting,this.humans);
    }
    draw(ctx){
        ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y)
        this.setting[0].drawFrame(ctx);
        this.humans.forEach((object)=>{
            object.drawFrame(ctx);
        });
        this.zombies.forEach(zombie=>{
            zombie.drawThrowingFrame(ctx);
        });
        this.trash.forEach(object=>{
            object.drawFrame(ctx);
        })
        }
    
    checkLetter(letter){
        this.humans.forEach(human=>{
            human.wordCheck(letter);
        })

    }
    triggerThrow(){
        
    }
    update(){
        this.humans.forEach(human=>{
            human.update();
        })
    }
    checkforDeadHumans(){
        this.humans.forEach(human=>{
            if (human.status ==='dead'){
                //trigger zombie in the lane to throw
                //change zombie in lane status to throw 
                //zombie throw animation will check if the status is throw
                // once throw is done, status will be changed to not throw

            }
        })
    }
    checkHits(){
        //check if trash hit dead human
        for(let i =0;i<this.trash.length;i++){
            for(let j=0;j<this.humans.length;j++){
                const trash = this.trash[i];
                const human = this.humans[j];
                if(trash.isCollidedWith(human)){
                    console.log(trash);
                    console.log(human);
                    this.remove(trash);
                    this.remove(human);
                }
            }
        }
    }

    remove(object){
        if (object instanceof Trash){
            this.trash.splice(this.trash.indexOf(object),1);
        } else if (object instanceof Human){
            this.humans.splice(this.humans.indexOf(object),1);
        } else {
            throw new Error("unknown type of object");
        }
    }


}
export default Game;