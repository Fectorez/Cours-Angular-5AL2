import { Pokemon } from '../src/sdk/models'


describe('Tests Pokemon attacksBefore', () => {

    it('pikachu 3 should attack before ditto 2', () => {
        let pikachu = new Pokemon('pikachu', 3)
        let ditto = new Pokemon('ditto', 2)
        expect(pikachu.attacksBefore(ditto)).toEqual(true)
    })

    it('ditto 2 should not attack before pikachu 3', () => {
        let pikachu = new Pokemon('pikachu', 3)
        let ditto = new Pokemon('ditto', 2)
        expect(ditto.attacksBefore(pikachu)).toEqual(false)
    })

    it('pikachu 3 should attack before ditto 3', () => {
        let pikachu = new Pokemon('pikachu', 3)
        let ditto = new Pokemon('ditto', 3)
        expect(pikachu.attacksBefore(ditto)).toEqual(true)
    })
})
