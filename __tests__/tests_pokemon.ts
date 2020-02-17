import { Pokemon, Attack } from '../src/models'


describe('Tests Pokemon attacksBefore', () => {

    let pikachu: Pokemon
    let ditto: Pokemon
    let tonnerre: Attack

    let MathRandom: () => number

    beforeEach(() => {
        tonnerre = new Attack('Tonnerre', 12)

        pikachu = new Pokemon(
            'Pikachu',
            1,
            90,
            55,
            40,
            30,
            [
                new Attack('Eclair', 10),
                new Attack('Charge', 7),
                tonnerre,
                new Attack('Rugissement', 5)
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
                new Attack('Jet de merde', 6),
                new Attack('Chiasse', 8),
                new Attack('Ejaculation', 14),
                new Attack('Pisse sulfurique', 9)
            ]
        )

        MathRandom = Math.random
        Math.random = () => 2/100
    })

    it('should lose 10 hp', () => {
        pikachu.loseHealth(10)
        expect(pikachu.health).toEqual(20)
    })

    it('should get Tonnerre attack', () => {
        expect(pikachu.getRandomAttack()).toEqual(tonnerre)
    })

    it('should lose all his health', () => {
        pikachu.loseHealth(10000)
        expect(pikachu.health).toEqual(0)
    })

    /*it('ditto should not attack before pikachu', () => {
        expect(ditto.attacksBefore(pikachu)).toEqual(false)
    })

    it('pikachu should attack before ditto', () => {
        expect(pikachu.attacksBefore(ditto)).toEqual(true)
    })*/

    afterEach(() => {
        Math.random = MathRandom
    })
})
