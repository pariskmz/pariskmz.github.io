var Characters = [
  "Wilson","Wllow","Wolfgang","Wendy","WX-78","Wickerbottom","Woodie","Wes","Maxwell","Wigfrid","Webber","Winona"
];
var Biomas = [
  "Bosque","Pradera","Sabana","Pantano","Tierra rocosa","Cementerio","Desierto","Bosque de Abedul",
]

var randomChar = Characters[Math.floor(Math.random()*Characters.length)];
var randomBioma = Biomas[Math.floor(Math.random()*Biomas.length)];

function WriteInfo(){ 
document.getElementById("character").innerHTML = randomChar;
document.getElementById("bioma").innerHTML = randomBioma;
}



