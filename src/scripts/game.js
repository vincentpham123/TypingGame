import Human from './human.js';
import Setting from './setting.js';
import Zombie from './zombie.js';
import Projectile from './projectile.js';
class Game {
    static num_humans=20;
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
        document.addEventListener('keydown',event => {
            //checking key pressed 
            console.log(event.key);
            this.checkLetter(event.key);
            //check if the event.key is equal to any of word[index]
            //if equal, update the correct letter for all words currently on the screen,
            // need to only check for humans position is within canvas width

        })

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
        const startLane =[680,650,590];
        const minDistance = 200;
        for(let i =0;i<Game.num_humans;i++){
            let positionFound = false;
            
            while(!positionFound ){
                const position = Math.floor(Math.random()*(10000-1500+1))+1600;
                const y =startLane[Math.floor(Math.random()*2)];
                const newHuman = new Human(position,y,this);
                const overLapCheck = this.humans.some((human)=>{
                    newHuman.isCollidedWith(human)
                });
                if (!overLapCheck){
                    this.add(newHuman);
                    positionFound=true;
                }
            }
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
        // 3 human lanes, are 680,650,590
        //zombie start lanes are 575,630,676
        //projectile start lanes = 595,650,696
        ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y)
        this.setting[0].drawFrame(ctx);
        this.humans.forEach((object)=>{
            object.drawFrame(ctx);
        });
        this.zombies.forEach(zombie=>{
            if(zombie.projectile===true){

                zombie.drawThrowingFrame(ctx);
            } else {
                zombie.drawIdleFrame(ctx);
            }
            // if zombie status = throw, animate drawthrowingframe, after projectile is thrown
            //change status to not throw. to revert back to idleanimations
            //else animate idleframe for zombie
        });
        this.trash.forEach(object=>{
            object.drawFrame(ctx);
        })
        }
    
    checkLetter(letter){
        this.humans.filter((human)=>human.pos[0]<1500).forEach(human=>{
            human.wordCheck(letter);
        })

    }
    triggerThrow(){
        
    }
    update(){
        this.humans.forEach(human=>{
            human.update();
        })
        this.checkforDeadHumans();
    }
    checkforDeadHumans(zombie){
        this.humans.forEach(human=>{
            if (human.status ==='dead'){

                let deadHumanPosition = human.pos[1];
                switch (true){
                    case(deadHumanPosition-4===676):
                        //change status for zombie 3 
                        this.zombies[2].projectile=true;
                        console.log(this.zombies[2]);
                        break;
                    case(deadHumanPosition-20===630):
                        this.zombies[1].projectile=true;
                        console.log(this.zombies[1]);
                        break;
                    case(deadHumanPosition-15===575):
                        this.zombies[0].projectile=true;
                        console.log(this.zombies[0]);
                        break;
                }

            }
        })
    }
    checkHits(){
        //check if trash hit dead human
        for(let i =0;i<this.trash.length;i++){
            for(let j=0;j<this.humans.length;j++){
                const trash1 = this.trash[i];
                const human1 = this.humans[j];
                if(trash1.isCollidedWith(human1)&&human1.pos[0]<1500&&human1.status==='dead'){
                    this.remove(trash1);
                    this.remove(human1);
                }
            }
        }
    }

    remove(object){
        console.log('remove in process');
        if (object instanceof Projectile){
            this.trash.splice(this.trash.indexOf(object),1);
        } else if (object instanceof Human){
            this.humans.splice(this.humans.indexOf(object),1);
        } else {
            throw new Error("unknown type of object");
        }
    }


}
export default Game;