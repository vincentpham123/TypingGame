class Zombie{
    static url = './images/zombie.png';
    constructor(y){
        //y position is dependent on zombie lane
        this.x = 100;
        this.y = y;
        this.sprite = new Image();
        this.imageLoaded=false;
        this.sprite.onload=()=>{
            this.imageLoaded=true;
        }
        this.sprite.src = Zombie.url;
    }


}