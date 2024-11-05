let xp = 10.002;
let nome = [
  "Vampira",
  "Tempestade",
  "Scot",
  "Noturno",
  "Wolwerine",
  "Mistica",
  "Xavier",
  "Jean Grey",
];
let nivel = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina_Diamante",
  "Ascendente",
  "Imortal",
  "Radiante",
];

if (xp < 1.0) {
  console.log("O Herói de nome: " + nome[0] + ", está no nível: " + nivel[0]);
} else if (xp >= 1.001 && xp <= 2.0) {
  console.log("O Herói de nome: " + nome[1] + ", está no nível: " + nivel[1]);
} else if (xp >= 2.001 && xp <= 5.0) {
  1;
  console.log("O Herói de nome: " + nome[2] + ", está no nível: " + nivel[2]);
} else if (xp >= 5.001 && xp <= 7.0) {
  console.log("O Herói de nome: " + nome[3] + ", está no nível: " + nivel[3]);
} else if (xp >= 7.001 && xp <= 8.0) {
  console.log("O Herói de nome: " + nome[4] + ", está no nível: " + nivel[4]);
} else if (xp >= 8.001 && xp <= 9.0) {
  console.log("O Herói de nome: " + nome[5] + ", está no nível: " + nivel[5]);
} else if (xp >= 9.0001 && xp <= 10.0) {
  console.log("O Herói de nome: " + nome[6] + ", está no nível: " + nivel[6]);
} else {
  console.log("O Herói de nome: " + nome[7] + ", está no nível: " + nivel[7]);
}
