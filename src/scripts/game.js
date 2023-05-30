import Human from './human.js';
import Setting from './setting.js';
import Zombie from './zombie.js';
class Game {
    static num_humans=5;
    static DIM_X = 1500;
    static DIM_Y = 900;
    constructor(currentTyping){
        this.typing = currentTyping;
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
        if (object instanceof Human){
            this.humans.push(object);
        }

    }
    addZombies(){
        // let position=[590,650,680];
        // for(let i =0;i<3;i++){
            this.zombies.push(new Zombie(575));
        }
    
    addHumans(){
        for(let i =0;i<Game.num_humans;i++){
            this.add(new Human());
        }
    }
    addSetting(){
        this.setting.push(new Setting());
    }

    moveHumans(){
        this.humans.forEach(object =>{
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
            zombie.drawFrame(ctx);
        })
    }
    checkLetter(letter){
        this.humans.forEach(human=>{
            human.wordCheck(letter);
        })

    }
    update(){
        this.humans.forEach(human=>{
            human.update();
        })
    }

    remove(object){
        this.humans.splice(this.humans.indexOf(object),1);
    }


}
export default Game;