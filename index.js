const Copo = require('./models/Copo')

let resposta = document.getElementById('resposta')
let progPrincipal = document.getElementById('progPrincipal')

progPrincipal.addEventListener('click', () =>{
    let raioMaior = Number(document.getElementById('raioMaior').value)
    let raioMenor = Number(document.getElementById('raioMenor').value)
    let altura = Number(document.getElementById('altura').value)
    if (raioMaior <= 0 || raioMenor <= 0 || altura <= 0) {
        resposta.innerHTML = 'Todos os valores devem ser maiores que zero.'
        return
    }
    if (raioMaior <= raioMenor) {
        resposta.innerHTML = 'O raio maior deve ser maior que o raio menor.'
        return
    }
    let copo = new Copo(raioMaior, raioMenor, altura)
    resposta.innerHTML = `
        <p>Geratriz: ${copo.calcGeratriz().toFixed(2)} cm</p>
        <p>Área Base Menor: ${copo.calcABMenor().toFixed(2)} cm²</p>
        <p>Área Base Maior: ${copo.calcABMaior().toFixed(2)} cm²</p>
        <p>Área Lateral: ${copo.calcAreaLateral().toFixed(2)} cm²</p>
        <p>Área Total: ${copo.calcAreaTotal().toFixed(2)} cm²</p>
        <p>Volume: ${copo.calcVolume().toFixed(2)} ml</p>
        <p>Classificação: ${copo.classificar()}</p>
    `
})