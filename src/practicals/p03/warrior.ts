import { Character } from "./character";

export class Warrior extends Character {
  public weapon: string
  static REDUCE_PERCENT: number = 10
  constructor(name: string , weapon : string , health: number ){
    super(name , health)
    this.weapon = weapon
  }
  getWeapon(){
    return this.weapon
  }
  getHealth(){
        if(!this.name && !this.weapon && !this.health){
          return 0
        }
        return this.health
    }
  receiveDamage(damage: number){
    this.health -= (damage * ( 100 - Warrior.REDUCE_PERCENT) / 100)
  }
}
