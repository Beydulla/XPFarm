class Fighter {
    constructor(name, health, damagePerAttack ) {
        if(name === ''){
            throw "empty name"
        }
        if(health === undefined){
            health = 100;
        }
        if(damagePerAttack  === undefined){
            damagePerAttack  = 10;
        }
        this.name = name;
        this.health = health;
        this.damagePerAttack  = damagePerAttack ;
    }

}

module.exports = {
    Fighter
}