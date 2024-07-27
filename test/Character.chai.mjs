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

    describe('Job Tests', () => {
        expects.valuesToEql(job.alias, '')
    })
}

describe('Character.mjs', () => {
    describe('Class Job', () => JobTests())
})



