import GameService from './services/GameServices'
import { Pokemon, Attack } from './models'
import AttackService from './services/AttackServices'

let pikachu = new Pokemon(
    'Pikachu',
    70,
    90,
    55,
    40,
    30,
    [
        new Attack('Eclair', 40),
        new Attack('Charge', 5),
        new Attack('Tonnerre', 60),
        new Attack('Rugissement', 1)
    ]
)

let ditto = new Pokemon(
    'Ditto',
    1,
    48,
    48,
    48,
    48,
    [
        new Attack('Charge', 5),
        new Attack('Flammèche', 25),
        new Attack('Lèchouille', 75),
        new Attack('Déflagration', 40)
    ]
)

let game = new GameService(console.log, pikachu, ditto, new AttackService())

game.play()