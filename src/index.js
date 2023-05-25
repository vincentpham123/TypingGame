
// let game = document.getElementById('game');
// game.width=500;
// game.height=500;
// const ctx = game.getContext("2d");
// ctx.fillStyle="black";
// ctx.fillRect(0,0,500,500);


document.addEventListener("DOMContentLoaded", () => { 
    document.querySelectorAll("h1").forEach( element => {
      element.style.backgroundColor = "red";
    });

    let title = document.querySelectorAll('.title')[0];
    console.log(title);
    title.addEventListener('click',event=>console.log('hi'));
    let game = document.getElementById('game');
    
    game.width=500;
    game.height=500;
    const ctx = game.getContext("2d");
    ctx.fillStyle="black";
    ctx.fillRect(0,0,500,500);
  })
