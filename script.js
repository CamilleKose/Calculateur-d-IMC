// Calculateur IMC //

let poids = prompt('Quel est votre poids ?');
let taille = prompt('Quelle est votre taille en cm ?')

function calculImc(poids, taille){

    let tailleEnM = taille / 100;
    let tailleAuCarre = tailleEnM * tailleEnM
    let result = poids / tailleAuCarre
    result = result.toFixed(2)
    return ('Votre IMC est de ' + result + '.')
}

alert(calculImc(poids, taille));