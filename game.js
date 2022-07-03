function Character(name,strengh,health){
    this.name = name;
    this.strengh = strengh;
    this.health = health;
    this.elements = new UTElements(this.name);

  
}


function UTElements(name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.Progress = document.querySelector(`.${name}-health span`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.statusBtn = document.querySelector(`#${name}-status`);
    this.status = document.querySelector(`#${name}-stat`);
  
}
NewGame = document.querySelector(`#win`);

Character.prototype.attack = function(opponent){
   //nartoo = this
   //opponent = sasaki

   if (opponent.health > 0){
   opponent.health -= this.strengh;
   opponent.elements.Progress.style.width = `${opponent.health}%`;
   } else{
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.statusBtn.remove();
    opponent.elements.alive.innerHTML = `${opponent.name} is died`;
   }
}


Character.prototype.status = function(){
    this.elements.status.innerHTML = `Name: ${this.name} <br> Strengh: ${this.strengh} <br> Health: ${this.health}%`;
}



Character.prototype.makeHealth = function(){
    if(this.health < 100){
      this.health += 10;
      this.elements.Progress.style.width = `${this.health}%`;
    }

    if(this.health >100){
        this.health = 100;
        this.elements.Progress.style.width = `${this.health}%`;
    }


}


let Batman = new Character("Batman",10,100);
let Joker = new Character("Joker",5,100);


// nartoo.attack(sasaki);

// nartoo.makeHealth();
// nartoo.status();
// sasaki.attack(nartoo);
// nartoo.status();
// nartoo.makeHealth();
// nartoo.makeHealth();
// nartoo.status();


Batman.elements.attackBtn.addEventListener("click",function(){
    Batman.attack(Joker);
    // Joker.status();
});


Joker.elements.attackBtn.addEventListener("click",function(){
    Joker.attack(Batman);
    // Batman.status();
});

Batman.elements.healthBtn.addEventListener("click",function(){
    Batman.makeHealth();
    // Batman.status();
});

Joker.elements.healthBtn.addEventListener("click",function(){
    Joker.makeHealth();
    // Joker.status();
});

Batman.elements.statusBtn.addEventListener("click",function(){
    Batman.status();
});

Joker.elements.statusBtn.addEventListener("click",function(){
    Joker.status();
});

NewGame.addEventListener("click",function(){
    location.reload();
})


