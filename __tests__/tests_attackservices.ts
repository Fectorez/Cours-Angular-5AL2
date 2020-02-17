import { Pokemon, Attack } from '../src/models'
import AttackService from '../src/services/AttackServices'


describe('Tests AttackService', () => {

    let pikachu: Pokemon
    let ditto: Pokemon

    let attackService = new AttackService();

    let MathRandom: () => number

    beforeEach(() => {
        pikachu = new Pokemon(
            'Pikachu',
            1,
            90,
            55,
            40,
            30,
            [
                new Attack('Eclair', 7)
            ]
        )
    
        ditto = new Pokemon(
            'Ditto',
            1,
            48,
            48,
            48,
            48,
            [
                new Attack('Jet de merde', 6)
            ]
        )

        MathRandom = Math.random
        Math.random = () => 0.49
    })

    it('pikachu should attack before ditto', () => {
        expect(attackService.getFirstAttacker(pikachu, ditto)).toEqual(pikachu)
    })

    it('ditto should not attack before pikachu', () => {
        expect(attackService.getFirstAttacker(ditto, pikachu)).toEqual(pikachu)
    })

    it('first attacker between pokemons having the same speed is the first', () => {
        let p = pikachu
        expect(attackService.getFirstAttacker(pikachu, p)).toEqual(p)
    })

    it('pikachu should make 2 HP dammages to ditto', () => {
        expect(attackService.calculateAttackDammages(pikachu, new Attack('test', 7), ditto)).toEqual(2)
    })

    it('ditto should have 46HP after pikachu attack', () => {
        attackService.attack(pikachu, new Attack('test', 7), ditto)
        expect(ditto.health).toEqual(46)
    })

    afterEach(() => {
        Math.random = MathRandom
    })
})
