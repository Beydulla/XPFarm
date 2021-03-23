const declareWinner = () => {

}

const  subtractDamage = (fighter1, fighter2) => {
    fighter1.health = fighter1.health - fighter2.damage;
}

module.exports = {
    declareWinner,
    subtractDamage
}