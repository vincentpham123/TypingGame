
class Setting {
    constructor(){
        this.image = './images/grass_15.png';
    }

    draw(ctx){
        const backgroundImage = new Image();
        backgroundImage.src=this.image;
        
        backgroundImage.onload = function(){
            ctx.drawImage(backgroundImage,0,0);
        }
      
        }
   
}






export default Setting