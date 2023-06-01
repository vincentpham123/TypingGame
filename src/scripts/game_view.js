import Game from "./game.js"
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
        this.menuImage.onload=()=>{
            this.imageLoaded=true;
            this.startMenu();
        }
        this.menuImage.src = './images/bg4.0.png';
        this.typingindex=0;
        this.againIndex=0;
        this.returnIndex=0;
        this.yesIndex=0;
        this.noIndex=0;
        this.yes = ['y','e','s'];
        this.no = ['n','o'];
        const eventListener = document.addEventListener('keydown', (event)=>{
            // if (event.key ==='Backspace'){
            //     this.menuKeys.pop();
            // } else if(GameView.alphabet.includes(event.key.toUpperCase())){
            //     this.menuKeys.push(event.key.toLowerCase());
            // 
            console.log(event.key);
            let letters = document.getElementsByClassName('startLetters');
            for(let i =this.typingindex;i<letters.length;i++){
                let letter=letters[i].innerText;
                if (letter===event.key){
                    letters[i].classList.add('typed');
                    this.typingindex++;
                    break;
                } 
                else {
                    this.typingindex=0;
                    for(let j=0;j<letters.length;j++)
                        letters[j].classList.remove('typed');
                }
            }
            
          
            // };
            let againLetters =document.getElementsByClassName('againLetters');
            let returnLetters = document.getElementsByClassName('returnLetters');
            
            switch(this.yesIndex){
                case(0):
                    if(this.yes.indexOf(event.key)===0) {
                        againLetters[this.yesIndex].classList.add('typed')
                        this.yesIndex+=1
                    };
                    
                    break;
                case(1):
                    if(this.yes.indexOf(event.key)===1) {
                    againLetters[this.yesIndex].classList.add('typed')
                    this.yesIndex+=1;
                    }
                    break;
                case(2):
                    this.yesIndex=0;
                    if(this.yes.indexOf(event.key)===2) {
                    againLetters[2].classList.add('typed')
                    setTimeout(()=>this.restart(),3000);
                    }
                    break;
            }
            switch(this.noIndex){
                case(0):
                    if(this.no.indexOf(event.key)===0) {
                        returnLetters[this.noIndex].classList.add('typed');
                        this.noIndex+=1
                    };
                    break;
                case(1):
                    console.log(event.key===this.no[1]);
                    this.noIndex=0;
                    if(this.no.indexOf(event.key)===1) {
                    returnLetters[1].classList.add('typed');
                    this.returnToMenu();
                    }
                    break;
              
            }
            // for(let i =this.againIndex;i<againLetters.length;i++){
            //     let letter=againLetters[i].innerText;
            //     if (letter===event.key){
            //         againLetters[i].classList.add('typed');
            //         this.againIndex++;
            //         break;
            //     } 
            //     else {
            //         this.againIndex=0;
            //         for(let j=0;j<againLetters.length;j++)
            //         againLetters[j].classList.remove('typed');
            //     }
            // }
            // for(let i =this.returnIndex;i< returnLetters.length;i++){
            //     let letter=returnLetters[i].innerText;
            //     if (letter===event.key){
            //         returnLetters[i].classList.add('typed');
            //         this.returnIndex++;
               
            //         break;
            //     } 
            //     else {
            //         this.returnIndex=0;
            //         for(let j=0;j<returnLetters.length;j++)
            //             returnLetters[j].classList.remove('typed');
            //     }
            // }
            let check = document.getElementsByClassName('typed');
            if(check.length===5&&check[0].innerText==='s') {
                setTimeout(()=>this.start(),1000);
                this.typingindex=0;
            }
            // else if(check.length===2&&check[0].innerText==='n'){
            //     this.startMenu();
            //     this.returnIndex=0;
            // }else if(check.length===3&&check[0].innerText==='y'){
            //     setTimeout(()=>this.restart(),1000);
            //     this.againIndex=0;
            // }
        })
        // document.addEventListener('keydown',event => {
        //     //checking key pressed 
        //     console.log(event.key);
        //     this.game.checkLetter(event.key);
        //     //check if the event.key is equal to any of word[index]
        //     //if equal, update the correct letter for all words currently on the screen,
        //     // need to only check for humans position is within canvas width

        // })
        
    }
    clearTyped(classname){
        let remove = document.getElementsByClassName(classname);
        for(let i =0;i<remove.length;i++){
            remove[i].classList.remove('typed');
        }
    }
    startMenu(){
        this.ctx.clearRect(0,0,1500,900);
        this.ctx.drawImage(this.menuImage,0,0);

        
        // this.clearTyped('againLetters');
        // this.clearTyped('returnLetters');
        // let typingindex=0;
        // let againIndex=0;
        // let returnIndex=0;
    //     const startMenuEvent = document.addEventListener('keydown', (event)=>{
    //     // if (event.key ==='Backspace'){
    //     //     this.menuKeys.pop();
    //     // } else if(GameView.alphabet.includes(event.key.toUpperCase())){
    //     //     this.menuKeys.push(event.key.toLowerCase());
    //     // 

    //     let letters = document.getElementsByClassName('startLetters');
    //     for(let i =typingindex;i<letters.length;i++){
    //         let letter=letters[i].innerText;
    //         if (letter===event.key){
    //             letters[i].classList.add('typed');
    //             typingindex++;

    //             break;
    //         } 
    //         else {
    //             typingindex=0;
    //             for(let j=0;j<letters.length;j++)
    //                 letters[j].classList.remove('typed');
    //         }
    //     }
        
      
    //     // };
    //     let againLetters =document.getElementsByClassName('againLetters');
    //     let returnLetters = document.getElementsByClassName('returnLetters');
   

    //     for(let i =againIndex;i<againLetters.length;i++){
    //         let letter=againLetters[i].innerText;
    //         if (letter===event.key){
    //             againLetters[i].classList.add('typed');
    //             againIndex++;
    //             break;
    //         } 
    //         else {
    //             againIndex=0;
    //             for(let j=0;j<againLetters.length;j++)
    //             againLetters[j].classList.remove('typed');
    //         }
    //     }
    //     for(let i =returnIndex;i< returnLetters.length;i++){
    //         let letter=returnLetters[i].innerText;
    //         if (letter===event.key){
    //             returnLetters[i].classList.add('typed');
    //             returnIndex++;
           
    //             break;
    //         } 
    //         else {
    //             returnIndex=0;
    //             for(let j=0;j<returnLetters.length;j++)
    //                 returnLetters[j].classList.remove('typed');
    //         }
    //     }
    //     let check = document.getElementsByClassName('typed');
    //     if(check.length===5&&check[0].innerText==='s') {
    //         setTimeout(()=>this.start(),1000);
    //     }else if(check.length===2&&check[0].innerText==='n'){
    //         this.startMenu();
    //     }else if(check.length===3&&check[0].innerText==='y'){
    //         setTimeout(()=>this.restart(),1000);
    //     }
    // })
    }
    returnToMenu(){
        window.location.reload();
    }
       
    modeSelection(){
        this.menuKeys=[];
        let navbar = document.getElementById('navBar')
        navbar.style.display='none';
        let modes = document.getElementById('modeSelection')
        modes.style.display='block';
        document.addEventListener('keydown',event=>{
            if (event.key ==='Backspace'){
                this.menuKeys.pop();
            } else if(GameView.alphabet.includes(event.key.toUpperCase())){
                this.menuKeys.push(event.key.toLowerCase());
            };
            
            let sletters = document.getElementsByClassName('sLetters');
            let aletters = document.getElementsByClassName('aLetters');
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

    over(){
        //remove all previoous typed elements
        this.clearTyped('againLetters');
        this.clearTyped('returnLetters');
        this.clearTyped('startLetters');
    
        let tryAgain = document.getElementById('tryAgain');
        let yes = document.getElementById('yes');
        let no = document.getElementById('no');
        this.ctx.clearRect(0,0,1500,900);
        this.ctx.drawImage(this.menuImage,0,0);
        tryAgain.style.display='block';
        yes.style.display='block';
        no.style.display='block';
        // this.ctx.drawImage(this.menuImage, 0, 0);
    }

    animate(currentTime=0){
     if(!this.game.gameOver){
        const elapsed = currentTime - this.lastFrameTime;
            if (elapsed > this.frameDelay){
                this.lastFrameTime=currentTime
                this.game.moveObjects();
                this.game.update();
                this.game.draw(this.ctx);
    
            }
            requestAnimationFrame(this.animate.bind(this));
    }else{
        this.over();
    }
    }
    restart(){
        this.clearTyped('againLetters');
        this.clearTyped('returnLetters');
        this.clearTyped('startLetters');
        console.log('restarted');
        this.lastFrameTime=0
        this.game.restartObjects();
        console.log(this.game);
        let tryAgain = document.getElementById('tryAgain');
        let yes = document.getElementById('yes');
        let no = document.getElementById('no');
        tryAgain.style.display='none';
        yes.style.display='none';
        no.style.display='none';
        this.start();
        

    }
   
}
export default GameView;