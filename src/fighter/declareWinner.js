const declareWinner = (fighter1, fighter2, firstAttacker) => {

    if(fighter1.name === firstAttacker){
        subtractDamage(fighter2, fighter1);
        if(lost(fighter2)){
            return fighter1.name;
        }
    }

}

const  subtractDamage = (fighter1, fighter2) => {
    fighter1.health = fighter1.health - fighter2.damage;
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