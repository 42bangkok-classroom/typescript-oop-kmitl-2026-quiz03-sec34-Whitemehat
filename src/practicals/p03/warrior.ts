import { Character } from "./character";

export class Warrior extends Character {
  public weapon:string;
  static REDUCE = 10;
  constructor(name: string , weapon:string , health: number){
    super(name , health);
    this.weapon = weapon;
  }

  getWeapon(){
    return this.weapon;
  }

  getHealth(): number {
    if(!this.name || !this.weapon){
      return 0;
    }
    return this.health;
  }

  receiveDamage(damage: number): void {
    this.health -= (damage * (100 - Warrior.REDUCE) / 100);
  }
}
