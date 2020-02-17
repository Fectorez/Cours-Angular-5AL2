import { Attack } from '.'
import AttackService from '../services/AttackServices';

export default class Pokemon {
    public health: number

    constructor (
        public name: string,
        public level: number,
        public speed: number,
        public offensiveStat: number,
        public defensiveStat: number,
        public maxHealth: number,
        public attacks: Attack[]
    )
    {
        this.health = maxHealth
    }

    public loseHealth (dammages: number): void {
        this.health -= dammages;
        if ( this.health < 0 ) {
            this.health = 0
        }
    }

    public getRandomAttack (): Attack {
        return this.attacks[Math.floor(Math.random() * 100) % this.attacks.length]
    }
}
