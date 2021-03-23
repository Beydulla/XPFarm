class Fighter {
    constructor(name, health, damage) {
        if(name === ''){
            throw "empty name"
        }
        if(health === undefined){
            health = 100;
        }
        if(damage === undefined){
            damage = 10;
        }
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

}

module.exports = {
    Fighter
}