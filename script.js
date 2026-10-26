const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];
//#1
console.log(livres[0].titre);
console.log(livres.length);
console.table(livres);

for (let i = 0; i < livres.length; i++) {
    console.log(livres[i].titre);
    console.log(livres[i].auteur);
    console.log("--------------");
}

//#2
livres.push({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false });
console.table(livres);

for (let i = 0; i < livres.length; i++) {
    if (livres[i].titre === "Le Seigneur des anneaux"){
        livres[i].disponible = true;
        console.log(livres[1].disponible);
    }
}

if (livres.findIndex(livres.titre === "Fahrenheit 451")) {
    livres[3].splice();
    for (let i = 0; i < livres.length; i++) {
    console.log(livres[i].titre);
    console.log(livres[i].auteur);
    console.log("--------------");
}
}