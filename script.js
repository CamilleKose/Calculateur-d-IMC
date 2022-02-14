// Calculateur IMC //

let btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    
    let poids = document.getElementById('poids').value;
    let taille = document.getElementById('taille').value;
    let result = document.getElementById('result');

    let tailleEnM = taille / 100;
    let tailleAuCarre = tailleEnM * tailleEnM;
    let imc = poids / tailleAuCarre;
    imc = imc.toFixed(1);
   
    result.textContent = imc;

    });
