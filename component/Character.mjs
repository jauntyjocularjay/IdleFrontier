class Job {
    constructor(alias = '', description = '') {
        this.alias = alias
        this.description = description
        this.skillLevel = 1
    }
}

class Potioneer extends Job {
    constructor() {
        const description =
            'A magician specializing in potions and concoctions ' +
            'which de/buff and damage over time.'

        super('potioneer', description)
    }
}

class Thaunumerturge extends Job {
    constructor() {
        const description =
            'A magician specializing in the mysticism of numbers. ' +
            'Something between a philosopher, sorcerer, and scientist.'
        super('thaunumerturge', description)
    }
}

class Brute extends Job {
    constructor() {
        const description =
            'A fighter specializing in unarmed combat and melee ' +
            'clubs.'
        super('brute', description)
    }
}

class Duelist extends Job {
    constructor() {
        const description =
            'An opportunistic swordsman relying on speed, evasion, ' +
            'and accuracy. They frequently come equipped with a ' +
            'flintlock pistol.'
        super('Duelist', description)
    }
}

class Character {
    constructor(hp = 10, xp = 1, gp = 1) {
        this.hp = hp
        this.xp = xp
        this.gp = gp
    }
}

class Player extends Character {
    constructor(job) {
        super(100, 0, 0)
        this.job = job
    }
}

class Enemy extends Character {
    constructor() {
        super()
    }
}

export {
    Job,
    Potioneer,
    Brute,
    Duelist,
    Thaunumerturge,
    Character,
    Player,
    Enemy
}