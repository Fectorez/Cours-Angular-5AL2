import { Pokemon, Attack } from "../models";

export default class AttackService {
    public calculateAttackDammages(off: Pokemon, attack: Attack, def: Pokemon): number {
        return Math.floor(Math.floor(Math.floor(2 * off.level/ 5 + 2) * off.offensiveStat * attack.basePower / def.defensiveStat) / 50) + 2
    }

    public getFirstAttacker(a: Pokemon, b: Pokemon): Pokemon {
        if ( a.speed === b.speed ) {
            return Math.random() < 0.5 ? a : b
        }
        return a.speed > b.speed ? a : b;
    }

    public attack (off: Pokemon, attack: Attack, def: Pokemon): number {
        let dammages = this.calculateAttackDammages(off, attack, def);
        def.loseHealth(dammages);
        return dammages
    }
}
