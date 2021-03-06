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

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
