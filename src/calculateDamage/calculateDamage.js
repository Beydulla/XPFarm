//https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/javascript

const calculateDamage = (yourType, opponentType, attack, defense) => {
    const validTypes = ["fire", "water", "grass", "electric"];
    if(!validTypes.includes(yourType) || !validTypes.includes(opponentType)){
        return 0;
    }

    return 50 * (attack / defense) * effectiveness(yourType, opponentType);
}

const effectiveness = (yourType, opponentType) => {
    if(yourType === opponentType){
        return 0.5;
    }
    const fireAndElectric = ["fire", "electric"];
    const grassAndElectric = ["grass", "electric"];
    if(fireAndElectric.includes(yourType) && fireAndElectric.includes(opponentType)){
        return 1;
    }
    if(grassAndElectric.includes(yourType) && grassAndElectric.includes(opponentType)){
        return 1;
    }
    switch (yourType + "-" +opponentType){
        case "fire-grass": return 2;
        case "water-fire": return 2;
        case "grass-water": return 2;
        case "electric-water": return 2;
        default: return 0.5;
    }

}

module.exports = {
    calculateDamage,
    effectiveness
}