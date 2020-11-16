class Character {
  constructor(x,y, health_){
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  damage(){
    return this.health -= 10;
  }
  getHealth(){
    return this.health_;
  }
  toString(){
    return `x: ${this.x} y: ${this.y} health: ${this.health_} `
  }
}

class Player extends Character{
  constructor(){
    super(x, y);
    this.name = name;
  }
  move(dx, dy){
    this.x += dx;
    this.y += dy;
  }
  toString(){
    return `name: ${this.name} ${super.toString()}`;
  }
}





var x = process.argv[2];
var y = process.argv[3];
var name = process.argv[4];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());
