const declareWinner = (fighter1, fighter2, firstAttacker) => {

    let currentAttacker = fighter2;
    let currentDefender = fighter1;
    if(fighter1.name === firstAttacker){
        currentAttacker = fighter1;
        currentDefender = fighter2;
    }
    while(1){
        subtractDamage(currentDefender, currentAttacker);
        if(lost(currentDefender)){
            return currentAttacker.name;
        }
        const temp = currentDefender;
        currentDefender = currentAttacker;
        currentAttacker = temp;

    }

}
const subtractDamage = (fighter1, fighter2) => {
    fighter1.health = fighter1.health - fighter2.damagePerAttack ;
}

const lost = (fighter) => {
    if(fighter.health <= 0){
        return true;
    }
}
module.exports = {
    declareWinner,
    subtractDamage,
    lost
}