class Copo {
    constructor(raioMaior, raioMenor, altura) {
        this.raioMaior = raioMaior
        this.raioMenor = raioMenor
        this.altura = altura
    }
    calcGeratriz() {
        return Math.sqrt(Math.pow(this.raioMaior - this.raioMenor, 2) + Math.pow(this.altura, 2));
    }

    calcABMenor() {
        return Math.PI * Math.pow(this.raioMenor, 2);
    }

    calcABMaior() {
        return Math.PI * Math.pow(this.raioMaior, 2);
    }

    calcAreaLateral() {
        return Math.PI * (this.raioMaior + this.raioMenor) * this.calcGeratriz();
    }

    calcAreaTotal() {
        return this.calcABMenor() + this.calcABMaior() + this.calcAreaLateral();
    }

    calcVolume() {
        return (Math.PI * this.altura * (Math.pow(this.raioMaior, 2) + this.raioMaior * this.raioMenor + Math.pow(this.raioMenor, 2))) / 3;
    }

    classificar() {

        let volume = this.calcVolume()

        if (volume <= 400) {
            return "Copo Padrão (Água / Chá)"

        } else if (volume > 400 && volume <= 700) {
            return "Copo Grande (Suco / Refrigerante)"

        } else if (volume > 700 && volume <= 1000) {
            return "Copo Extra Grande (Suco / Refrigerante)"
            
        }

    }

}

module.exports = Copo