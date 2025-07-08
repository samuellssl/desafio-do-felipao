// variável nome do player

let nome = "Maluket22"

// variável level do player

let levelPlayer = 40000

// variável clássificação de level

let level;

// condição

if(levelPlayer <= 500){
    level = "Bronze";
} else if(levelPlayer <= 1000){
    level = "Prata";
} else if(levelPlayer <= 2000){
    level = "Ouro";
} else{
    level = "Imortal";
}

console.log("O heroi de nome " + nome + "está no nível " + level);