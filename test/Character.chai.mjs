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
    const job = new Job()
    const potioneer = new Potioneer()

    describe('Job Tests', () => {
        expects.valuesToEql(job.alias, '')
        expects.valuesToEql(job.description, '')
        expects.valuesToEql(job.skillLevel, 1)
        expects.valuesToEql(job.alias, 'potioneer')
    })
}

describe('Character.mjs', () => {
    describe('Class Job', () => JobTests())
})



