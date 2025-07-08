// 💡 Projeto: Classificador de Nível de Herói(Projeto DIO)
// Autor: Samuell
// Objetivo: Usar estruturas condicionais para classificar o nível de um herói com base em sua experiência (XP)

// 1️⃣ Definindo o nome do herói
const nome = "Maluket22";  // Nome fictício do jogador

// 2️⃣ Definindo a quantidade de XP do herói
const xp = 40000;  // Valor de experiência acumulada

// 3️⃣ Variável que armazenará o nível classificado
let nivel;  // Será definido com base nas condições abaixo

// 4️⃣ Estrutura de decisão para classificar o nível do herói
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";  // Para qualquer XP acima de 10000
}

// 5️⃣ Exibindo o resultado final
console.log("O herói de nome " + nome + " está no nível " + nivel + ".");