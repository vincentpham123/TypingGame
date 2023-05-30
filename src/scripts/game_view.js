
class GameView {
    static alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    constructor(game,ctx){
        this.ctx = ctx;
        this.game = game;
        this.lastFrameTime=0;
        this.frameRate=10;
        this.frameDelay = 1000/this.frameRate
        this.index =0;
        document.addEventListener('keydown',event => {
            //checking key pressed 
            console.log(event.key);
            this.game.checkLetter(event.key);
            //check if the event.key is equal to any of word[index]
            //if equal, update the correct letter for all words currently on the screen,
            // need to only check for humans position is within canvas width

        })
        
    }


    start(){
        console.log(this.game)
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(currentTime=0){
     
     const elapsed = currentTime - this.lastFrameTime;
        if (elapsed > this.frameDelay){
            this.lastFrameTime=currentTime
            this.game.moveObjects();
            this.game.checkHits();
            this.game.update();
            this.game.draw(this.ctx);
            // this.game.update();
            // this.game.moveHumans();
        }
        requestAnimationFrame(this.animate.bind(this));
    };
   
}
export default GameView;