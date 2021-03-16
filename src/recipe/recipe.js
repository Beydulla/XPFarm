

const recipe = () => {
    var firstRun = 0;
    var recipeNumber = 0;
    var count = 0;
    var recipeCounts = 1;
    var recipeIngCount = 0;
    var scaling_factor = 1.0;
    var scaled_main_weight = 1;
    var ingridents = [];
    const readline = require('readline');

    const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
    });
    
    rl.on('line', (line) => {
    if(firstRun == 0){
        firstRun = 1;
        recipeCounts = parseInt(line);
        return;
    }
    var values = line.split(' ');
    if(values.length = 3 && (parseInt(values[0]) - 1) == (values[0] - 1)){
        values = line.split(' ');
        recipeNumber++;
        recipeIngCount = values[0];
        scaling_factor = values[2] / values[1];
        return;
    }
    count++

    values = line.split(' ');
    var ingrident = {name: "", weight: 0.0, perc: 0.0}
    ingrident.name = values[0];
    ingrident.weight = parseFloat(values[1]);
    ingrident.perc = parseFloat(values[2]);
    if(ingrident.perc == 100.0){
        scaled_main_weight = ingrident.weight * scaling_factor;
    }
    ingridents.push(ingrident);
    if(count == recipeIngCount){
        printRecipe(recipeNumber, ingridents, scaled_main_weight)
        if(recipeCounts == recipeNumber){
            rl.close();
        }else{
            count = 0;
            ingridents = [];
        }
    }    
    });
    
}

const printRecipe = (recipeNumber, ingridents, mainIngWeight) => {
    console.log("Recipe # " + recipeNumber);
    for(i = 0; i < ingridents.length; i++){
        console.log(ingridents[i].name + " " + (ingridents[i].perc * mainIngWeight / 100).toFixed(1));
    }
    console.log("----------------------------------------");
}

module.exports = {
    recipe
}