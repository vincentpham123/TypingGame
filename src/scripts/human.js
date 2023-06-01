import MovingObject from './movingObject.js';
import * as Util from './util.js';

import Word from './word.js';
import * as RandomWord from './wordgenerator.js';

class Human extends MovingObject {
    static IMAGE = './images/walkcyclevarious.png';
    static start =[680,650,590];
   
    static frame = 9;
    static spriteHeight = 60;
    static spriteWidth = 65;
    // need to set up 3 random positions for a human, 
    async setRandomWord(letters=5){
        let initialWord;
        // do{
            initialWord = await RandomWord.getRandomWord();
            
        // }while(initialWord.length > letters);
        this.word=initialWord;
        this.score=100*this.word.length;
    }

    constructor (x,y,speed,game){
      
    
        super([x,y],speed,game);
        
        this.targeted=false;
        this.status = 'alive';
        this.setRandomWord();
        this.sprite = new Image();
        this.maxFrame=11;
        this.minFrame=9;
        this.width=65;
        this.height=60;
        this.centerX = this.pos[0]+Human.spriteWidth/2;
        this.centerY = this.pos[1]+Human.spriteHeight/2;
        this.person = Math.floor(Math.random()*7)+1;
        this.spriteHeight = Human.spriteHeight*this.person;
        this.frame = Human.frame;
        this.imageLoaded = false;
        this.sprite.onload= ()=>{
            this.imageLoaded=true;
            // this.drawFrame(ctx);
        };
        this.sprite.src = Human.IMAGE;

    }

    getCenterX(){
        return this.pos[0]+65/2;
    }
    getCenterY(){
        return this.pos[1]+60/2;
    }
   drawFrame(ctx) {
        let [x,y] = this.pos;
        let personNum = this.person;
        let frame = this.frame;
        if (this.imageLoaded ){
            
            ctx.drawImage(this.sprite,Human.spriteWidth*frame,
                Human.spriteHeight*personNum,
                Human.spriteWidth,
                Human.spriteHeight,
                x,
                y,
                70,
                70);
            this.drawWord(ctx);
            
            
        }
        
    }

    drawWord(ctx){

      
        ctx.fillStyle='white';
        ctx.font = '20px arial';
        ctx.fillText(this.word,this.pos[0],this.pos[1]+5);
    }
    
    update(){
        if (this.frame<this.maxFrame) this.frame++;
        else this.frame = this.minFrame;
    }

    move(){
        // setInterval(()=>{
        //     if (this.speed>=20){
        //         this.speed+2
        //     }},10000);
        
        let [x,y] = this.pos;
        if (x>100) this.pos = [this.pos[0]-this.speed,this.pos[1]];
    }


    wordCheck(letter){

        // if (word===this.word.word){
        //     //trigger death event
        // } 
            if (letter===this.word[0]){
                this.word = this.word.slice(1);
              
            }
            if(!this.word.length){
                this.status='dead';
                console.log(this);
            }
        }
        
    


   

  
}

export default Human;

