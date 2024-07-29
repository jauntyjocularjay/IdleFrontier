

class Character {
    constructor(hp = 10, gp = 1, level = 0) {
    /** 
     *  @todo 
     *  @param { Fraction } hp is health total 
     *  @param { int } gp is gold, currency 
     *  @param { int } level is the character's level
     */
        this.hp = hp
        this.gp = gp
        this.level = level
    }
}

class Player extends Character {
    constructor(hp = 10, gp = 1, level = 0, xp=new Fraction(0,12)) {
    /**
     *  @class Player 
     *  @param { Fraction } hp is health total 
     *  @param { int } gp is gold, currency
     *  @param { Fraction } xp is the amount the player has toward the next level */

        super(100, 0, 0)
        this.xp = xp
    }
}

class Job extends Player {
    constructor(hp = 0, gp = 0, xp = new Fraction(0,12), alias = '', description = '') {
    /**
     *  @class job 
     *  @param { Fraction } hp is health total 
     *  @param { int } gp is gold, currency
     *  @param { Fraction } xp is the amount the player has toward the next level */

        super(hp, gp, xp)
        this.alias = alias
        this.description = description
        this.skillLevel = 1
    }
}

class Potioneer extends Job {
    constructor(hp = 0, gp = 0, xp = new Fraction(0,12)) {
    /**
     *  @class Potioneer 
     *  @param { Fraction } hp is health total 
     *  @param { int } gp is gold, currency
     *  @param { Fraction } xp is the amount the player has toward the next level */
        super(
            hp,
            gp,
            xp,
            'potioneer', 
            'A magician specializing in potions and concoctions which de/buff ' + 
                'and damage over time.'
        )
    }
}

class Thaunumerturge extends Job {
    constructor(hp = 0, gp = 0, xp = new Fraction(0,12)) {
        super(
            hp,
            gp,
            xp,
            'thaunumerturge',
            'A magician specializing in the mysticism of numbers. ' +
                'Something between a philosopher, sorcerer, and scientist.'
        )
    }
}

class Brute extends Job {
    constructor(hp = 0, gp = 0, xp = new Fraction(0,12)) {
        const description =
        super(
            hp,
            gp,
            xp,
            'brute',
            'A fighter specializing in unarmed combat and melee clubs.'
        )
    }
}

class Duelist extends Job {
    constructor(hp = 0, gp = 0, xp = new Fraction(0,12)) {
        super(
            hp,
            gp,
            xp,
            'duelist', 
            'An opportunistic swordsman relying on speed, evasion, ' +
                'and accuracy. They frequently come equipped with a ' +
                'flintlock pistol.'
        )
    }
}

class Enemy extends Character {
    constructor(hp = 10, gp = 1, xp) {
    /**
     *  @class Enemy
     *  @param { Fraction } hp is health total 
     *  @param { int } gp is gold, currency
     *  @param { Number } xp is the amount the player receives after defeat
     */
        super(hp, gp)
        this.xp = xp
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