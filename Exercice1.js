t = prompt("Combien de tentative voulez-vous faire ? ");
let i = 0;
c = parseInt(Math.random() * 10);
console.log(c);
while ((i != t) && (b = prompt("Devinez le Chiffre") != c)) {
    i++;
}
if (!b) alert("tu as gagné!!!!");
else alert("tu as perdu :( "); 