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
    const jobs = [
        new Potioneer(),
        new Brute(),
        new Thaunumerturge(),
        new Duelist(),
    ]

    jobs.forEach(job => {
        describe(job.alias + ' test', () => {
            expects.valueToEql(job.skillLevel, 1)
            expects.valueToEql(job.hp, new Fraction(64,64))
            expects.valueToEql(job.xp, new Fraction(0,16))
            expects.valueToEql(job.skillLevel, 1)
            expects.valueToEql(job.gp, 0)    
        })
    })
}

describe('Character.mjs', () => {
    describe('Class Job', () => JobTests())
    describe('', (a) =>  a = null)
})



