import Human from './human.js';
import Setting from './setting.js';

class Game {
    static num_humans=5;
    static DIM_X = 1500;
    static DIM_Y = 900;
    constructor(){
        this.humans = [];
        this.setting = [];
        this.addHumans();
        this.addSetting();
    }

    add(object){
        if (object instanceof Human){
            this.humans.push(object);
        }

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
    }
    update(ctx){
        this.humans.forEach(human=>{
            human.update();
        })
    }

    remove(object){
        this.humans.splice(this.humans.indexOf(object),1);
    }


}
export default Game;