export class Ship{
  constructor(type, position) {
    this.position = position;
    this.type = type;
    this.damage = 0;
    this.maxDamage = this.type.size;
    this.sunk = false;
    this.used = false;
  }

  isSunk() {
    return this.damage >= this.maxDamage;
  }

  sunkShip() {
    this.damage = this.maxDamage;
    this.sunk = true;
  }

  incremementDamage() {
    this.damage++;
    if(this.isSunk()) {
      this.sunkShip();
    }
  };
}