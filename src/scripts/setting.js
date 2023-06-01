
class Setting {
    constructor(ctx){
        this.backgroundImage = new Image();
        this.imageLoaded = false;
        this.backgroundImage.onload =()=>{
            
            this.imageLoaded = true;
            // this.drawFrame(ctx);
        }
        // this.houseImage =  new Image();
        this.backgroundImage.src = './images/newbg.png';
        // this.houseImage.src = './images/house1.png';
        // this.skyImage = new Image();
        // this.skyImage.src = './images/sky1.png'
    }

    drawFrame(ctx){
        if (this.imageLoaded){
            ctx.drawImage(this.backgroundImage,0,0);
        }
        
        
        // ctx.drawImage(this.houseImage,10,200,100,100);
        // ctx.drawImage(this.skyImage,0,10,100,50);



      
        }
    
    
}






export default Setting
