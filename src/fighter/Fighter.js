class Fighter {
    constructor(name, health, damage) {
        if(name === ''){
            throw "empty name"
        }
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

}

module.exports = {
    Fighter
}