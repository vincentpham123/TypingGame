import Human from './human.js';
import Setting from './setting.js';
import Zombie from './zombie.js';
import Projectile from './projectile.js';
class Game {
    static num_humans=20;
    static DIM_X = 1500;
    static DIM_Y = 900;
    constructor(){
        this.score=0;
        this.humans=[];
        this.zombies=[];
        this.setting = [];
        this.humanTargets=[];
        this.addHumans();
        this.addSetting();
        this.addZombies();
        this.trash=[];
        this.active = false;
        this.time = 0;
        this.gameOver=false;
        document.addEventListener('keydown',event => {
            //checking key pressed 
           
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
      
        const startLane =[590,680,650];
        const minDistance = 200;
        for(let i =0;i<Game.num_humans;i++){
            let positionFound = false;
            
            while(!positionFound ){
                const position = Math.floor(Math.random()*(4000-1500+1))+1500;
                const y =startLane[Math.floor(Math.random()*startLane.length)];
                const newHuman = new Human(position,y,this);
                    this.add(newHuman);
                    positionFound=true;
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
        if (this.humans.some(human=>human.pos[0]<=150))this.gameOver=true;
        
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
            zombie.drawFrame(ctx);
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
    checkForLoss(){
        this.humans.some(human=>human.pos[0]<150);
    }
    update(){
        this.humans.forEach(human=>{
            human.update();
        })
        this.checkforDeadHumans();
        this.assignHumans();
        this.checkHits();
        if (this.gameOver){

        }
    }
    // resetProjectileThrown(){
    //     this.zombies.forEach((zombie)=>{
    //         zombie.projectileThrown=false;
    //     });
    // }
    //maybe have a total trash for each zombie to throw, so it will just throw
    //all the trash specific for each humam
    
    checkforDeadHumans(){
        this.humans.forEach(human=>{
            if (human.status ==='dead'){
                this.humanTargets.push(human);
                }

            });
        }
        assignHumans(){
            for(let i =0;i<this.humanTargets.length;i++){
            let deadHuman =this.humanTargets[i];
            let deadHumanPosition = this.humanTargets[i].pos[1];
            switch (true){
                case(deadHumanPosition-4===676):
                    //change status for zombie 3 
                    if (!this.zombies[2].targets.includes(deadHuman)&&!this.zombies[2].killed.includes(deadHuman)){
                    this.zombies[2].targets.push(deadHuman);
                    this.zombies[2].projectile=true;
                    }
                    break;
                case(deadHumanPosition-20===630):
                    if (!this.zombies[1].targets.includes(deadHuman)&&!this.zombies[1].killed.includes(deadHuman)){
                    this.zombies[1].targets.push(deadHuman);
                    this.zombies[1].projectile=true;
                    }
                    break;
                case(deadHumanPosition-15===575):
                if (!this.zombies[0].targets.includes(deadHuman)&&!this.zombies[0].killed.includes(deadHuman)){
                    this.zombies[0].targets.push(deadHuman);
                    this.zombies[0].projectile=true;
                    }
                    break;
            }
            }
        }
    
    
    checkHits(){
        //check if trash hit dead human
        for(let i =0;i<this.trash.length;i++){
            for(let j=0;j<this.humans.length;j++){
                const trash1 = this.trash[i];
                const human1 = this.humans[j];
                if (trash1 && human1){
                    if(trash1.isCollidedWith(human1,20,65) && human1.pos[0]<1500&&human1.status==='dead'){
                        this.remove(trash1);
                        this.remove(human1);
                    }
                }
            }
        }
    }

    remove(object){
        console.log('removal in process');
        if (object instanceof Projectile){
            this.trash.splice(this.trash.indexOf(object),1);
        } else if (object instanceof Human){
            this.humans.splice(this.humans.indexOf(object),1);
        } else {
            throw new Error("unknown type of object");
        }
    }

    getSetting(){
        return this.setting[0];
    }
    restartObjects(){
        this.gameOver=false;
        this.humans = [];
        this.trash=[];
        this.zombies=[];
        this.addZombies();
        this.addHumans();
    }
}

export default Game;