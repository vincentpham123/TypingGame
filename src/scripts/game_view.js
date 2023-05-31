
class GameView {
    static alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    constructor(game,ctx,canvas){
        this.canvas=canvas;
        this.ctx = ctx;
        this.game = game;
        this.lastFrameTime=0;
        this.frameRate=10;
        this.frameDelay = 1000/this.frameRate
        this.index =0;
        this.menuImage=new Image();
        this.imageLoaded=false;
        this.menuKeys=[];
        this.menuImage.onload=()=>{
            this.imageLoaded=true;
            this.startMenu();
        }
        this.menuImage.src = './images/bg4.0.png';
        // document.addEventListener('keydown',event => {
        //     //checking key pressed 
        //     console.log(event.key);
        //     this.game.checkLetter(event.key);
        //     //check if the event.key is equal to any of word[index]
        //     //if equal, update the correct letter for all words currently on the screen,
        //     // need to only check for humans position is within canvas width

        // })
        
    }

    startMenu(){
        this.ctx.clearRect(0,0,1500,900);
        console.log(this.menuImage);
        console.log(this.imageLoaded);
        if(this.imageLoaded) this.ctx.drawImage(this.menuImage,0,0);
        this.ctx.drawImage(this.menuImage, 0, 0);
        const start = document.getElementById('start');
        const startMenuEvent = document.addEventListener('keydown', (event)=>{
        if (event.key ==='Backspace'){
            this.menuKeys.pop();
        } else if(GameView.alphabet.includes(event.key.toUpperCase())){
            this.menuKeys.push(event.key.toLowerCase());
        };
        let letters = document.getElementsByClassName('startLetters');
        for(let i =0;i<letters.length;i++){
            let letter=letters[i].innerText;
            console.log(letter);
            if (letter===this.menuKeys[i]){
                letters[i].classList.add('typed');
            } else {
                letters[i].classList.remove('typed');
            }
        }
        let check = document.getElementsByClassName('typed');
        if(check.length===5) {
            setTimeout(()=>this.start(),1000);
        };
        
        // Add decorations or text to the menu
        // let title = document.createElement('h1');
        // title.innerText='ahhh urRrRR Orrr!!'
        // title.setAttribute('id','myTitle');
        })
    }
    startMenuEvent(event){
        if (event.key ==='Backspace'){
            this.menuKeys.pop();
        } else if(GameView.alphabet.includes(event.key.toUpperCase())){
            this.menuKeys.push(event.key.toLowerCase());
        };
        let letters = document.getElementsByClassName('startLetters');
        for(let i =0;i<letters.length;i++){
            let letter=letters[i].innerText;
            console.log(letter);
            if (letter===this.menuKeys[i]){
                letters[i].classList.add('typed');
            } else {
                letters[i].classList.remove('typed');
            }
        }
        let check = document.getElementsByClassName('typed');
        if(check.length===5) {
            setTimeout(()=>this.startGame(),1000);
        }
    }
    modeSelection(){
        this.menuKeys=[];
        let navbar = document.getElementById('navBar')
        navbar.style.display='none'
        let modes = document.getElementById('modeSelection')
        modes.style.display='block';
        document.removeEventListener('keydown',this.startMenuEvent);
        document.addEventListener('keydown',event=>{
            if (event.key ==='Backspace'){
                this.menuKeys.pop();
            } else if(GameView.alphabet.includes(event.key.toUpperCase())){
                this.menuKeys.push(event.key.toLowerCase());
            };
            
            let sletters = document.getElementsByClassName('sLetters');
            let aletters = document.getElementsByClassName('aLetters');
            console.log(this.menuKeys);
            for(let i=0;i<this.menuKeys.length;i++){
                if (this.menuKeys[i]===sletters[i].innerText){
                    sletters[i].classList.add('typed');
                } else {
                    sletters[i].classList.remove('typed');
                }
                if(this.menuKeys[i]===aletters[i].innerText){
                    aletters[i].classList.add('typed');
                }else {
                    aletters[i].classList.remove('typed');
                }
            }
            let check = document.getElementsByClassName('typed');
            if(check.length===6) {
                console.log(arcade);
            } else if(check.length===8){
                console.log(survival);
            }
        })
    }
    start(){
        let navbar = document.getElementById('navBar')
        let title = document.getElementById('myTitle')
        navbar.style.display='none'
        title.style.display='none'
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(currentTime=0){
     
     const elapsed = currentTime - this.lastFrameTime;
        if (elapsed > this.frameDelay){
            this.lastFrameTime=currentTime
            this.game.moveObjects();
            this.game.update();
            this.game.draw(this.ctx);
            // this.game.update();
            // this.game.moveHumans();
        }
        requestAnimationFrame(this.animate.bind(this));
    };
   
}
export default GameView;