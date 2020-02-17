import { Pokemon } from "../models";
import AttackService from "./AttackServices";

export default class GameServices {

    constructor(
        public write: (message: string) => void,
        public a: Pokemon,
        public b: Pokemon,
        public attackService: AttackService
    )
    {}

    private defenderIsDead (attacker: Pokemon, def: Pokemon): boolean {
        let attack = attacker.getRandomAttack();
        let dammages = this.attackService.attack(attacker, attack, def)
        this.write(`${attacker.name} utilise l'attaque ${attack.name}`);
        this.write(`${def.name} perd ${dammages} (${def.health} PV restants)\n`)
        if ( def.health <= 0 ) {
            this.write(`${def.name} n'a plus de PV`)
            this.write(`${attacker.name} remporte le combat`)
            return true
        }
        return false
    }

    public play () {
        while ( true ) {
            let firstAttacker = this.attackService.getFirstAttacker(this.a, this.b)
            let secondAttacker = firstAttacker === this.a ? this.b : this.a

            if ( this.defenderIsDead(firstAttacker, secondAttacker) ) {
                break
            }
            if ( this.defenderIsDead(secondAttacker, firstAttacker) ) {
                break
            }
        }
    }
}
