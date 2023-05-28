
class GameView {
    constructor(game,ctx){
        this.ctx = ctx;
        this.game = game;
        this.lastFrameTime=0;
        this.frameRate=10;
        this.frameDelay = 1000/this.frameRate
        
    }


    start(){
        console.log(this.game)
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(currentTime=0){
     
     const elapsed = currentTime - this.lastFrameTime;
        if (elapsed > this.frameDelay){
            this.lastFrameTime=currentTime
            this.game.moveHumans();
            this.game.update();
            this.game.draw(this.ctx);
            // this.game.update();
            // this.game.moveHumans();
        }
        requestAnimationFrame(this.animate.bind(this));
    };
   
}
export default GameView;