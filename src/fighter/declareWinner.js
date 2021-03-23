const declareWinner = () => {

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