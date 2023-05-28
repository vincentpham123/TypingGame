export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function dist(pos1,pos2){
  return Math.sqrt()
}
// Scale the length of a vector by the given amount.
export function scale(vec, m) {
return [vec[0] * m, vec[1] * m];
}


//function to preload all the images to be used
// var img = new Image();
//img.onload = function(){
    //startGame();
//};
//img.src=url;


