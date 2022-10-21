class Pokemon {
    //creates instance of Pokemon with properties name, lvl, hp, and moves
    constructor(name, lvl, hp, moves) {
        this.name = name;
        this.lvl = lvl;
        this.hp = hp;
        this.moves = moves;
    }

    //increments lvl by 1 and hp +15
    rareCandy() {
        this.lvl++;
        this.hp += 15;
    }

    //decrements hp by 20
    attack() {
        this.hp -= 20;
    }

    //potion hp by 10
    potion() {
        this.hp += 10;
    }

}

class FireType extends Pokemon {
    constructor(name, lvl, hp, moves) {
        super(name, lvl, hp, moves);
        this.moves = moves;
    }
}

class GhostType extends Pokemon {
    constructor(name, lvl, hp, moves, effectedBy = true) {
        super(name, lvl, hp, moves);
        this.effectedBy = effectedBy;
    }

    effect() {
        if(this.effectedBy) {
            this.effectedBy = true;
            console.log('It was super effective!')
        } else {
            console.log('Has no effect.')
        }
    }
}


let fireType= new FireType('Growlithe', 12, 35, ['Fireball', 'Bite']);
console.log('A wild Growlithe appeared!!!');
console.log(fireType);

let ghostType = new GhostType('Ghastly', 48, 72, ['Curse', 'Lick'], false);
console.log('Go Ghastly!!!');
console.log(ghostType);



fireType.attack();
console.log('Ghastly used Lick! -20 HP')
console.log(fireType);

console.log('Growlithe used Bite!');
ghostType.effect();
console.log(ghostType);

console.log('Trainer gave Ghastly a Potion! +10 HP');
ghostType.potion();
console.log(ghostType);

console.log('Growlithe used Fireball!');
ghostType.attack();
console.log(ghostType);

fireType.attack();
console.log('Ghastly used Lick! -20 HP')
console.log(fireType);
console.log('You Killed Growlith D:')


