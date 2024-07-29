import { Fraction } from '../module/fraction/Fraction.mjs'
import { expects } from '../module/cuppr/Chai.mjs'
import {
    Job,
    Potioneer,
    Brute,
    Thaunumerturge,
    Duelist,
    Character,
    Player,
    Enemy
} from '../component/Character.mjs'



function JobTests() {
    const job1 = new Job()
    const job2 = new Job('job2', 'description')
    const potioneer = new Potioneer()
    const brute = new Brute()
    const thaunumerturge = new Thaunumerturge()
    const duelist = new Duelist()

    describe('Job Tests', () => {
        expects.valueToEql(job1.alias, '')
        expects.valueToEql(job1.description, '')
        expects.valueToEql(job1.skillLevel, 1)
        expects.valueToEql(job2.alias, 'job2')
        expects.valueToEql(job2.description, 'description')
        expects.valueToEql(job2.skillLevel, 1)
    })

    describe('Potioneer Tests', () => {
        expects.valueToEql(potioneer.alias, 'potioneer')
        expects.valueToEql(potioneer.skillLevel, 1)
        expects.valueToEql(potioneer.xp, new Fraction(0,16))
        expects.valueToEql(potioneer.skillLevel, 1)
    })

    describe('Brute Tests', () => {
        expects.valueToEql(brute.alias, 'brute')
        expects.valueToEql(brute.skillLevel, 1)
        expects.valueToEql(potioneer.xp, new Fraction(0,16))
        expects.valueToEql(potioneer.skillLevel, 1)
    })

    describe('Thaunumerturge Tests', () => {
        expects.valueToEql(thaunumerturge.alias, 'thaunumerturge')
        expects.valueToEql(thaunumerturge.skillLevel, 1)
        expects.valueToEql(thaunumerturge.xp, new Fraction(0,16))
        expects.valueToEql(potioneer.skillLevel, 1)
    })

    describe('Duelist Tests', () => {
        expects.valueToEql(duelist.alias, 'Duelist')
        expects.valueToEql(duelist.skillLevel, 1)
        expects.valueToEql(duelist.xp, new Fraction(0,16))
        expects.valueToEql(potioneer.skillLevel, 1)
    })
}

function CharacterTests() {
    
    const character = new Character()
    const player = new Player()
    const enemy = new Enemy()

    describe('Character Tests', () => {
        expects.valueToEql(character.hp, 10)
        expects.valueToEql(character.xp, 1)
        expects.valueToEql(character.gp, 1)
    })

    describe('Player Tests', () => {
        expects.valueToEql(player.hp, 100)
        expects.valueToEql(player.xp, 0)
        expects.valueToEql(player.gp, 0)
        expects.valueTo(player.job, null)
    })

    describe('Enemy Tests', () => {
        expects.valueToEql(enemy.hp, 10)
        expects.valueToEql(enemy.xp, 1)
        expects.valueToEql(enemy.gp, 1)
    })
}

describe('Character.mjs', () => {
    describe('Class Job', () => JobTests())
    describe('Character Tests', () => CharacterTests())
})



