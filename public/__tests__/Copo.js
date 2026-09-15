const Copo = require('../models/Copo')

test('Copo 1 - Modelo Padrão', () => {
    let copo = new Copo(4, 2.5, 9)
    expect(copo.calcGeratriz()).toBeCloseTo(9.12, 2)
    expect(copo.calcABMenor()).toBeCloseTo(19.63, 2)
    expect(copo.calcABMaior()).toBeCloseTo(50.27, 2)
    expect(copo.calcAreaLateral()).toBeCloseTo(186.32, 2)
    expect(copo.calcAreaTotal()).toBeCloseTo(256.22, 2)
    expect(copo.calcVolume()).toBeCloseTo(303.95, 2)
    expect(copo.classificar()).toBe('Copo Padrão (Água / Chá)')
})

test('Copo 2 - Modelo Grande', () => {
    let copo = new Copo(5, 3, 12)
    expect(copo.calcGeratriz()).toBeCloseTo(12.17, 2)
    expect(copo.calcABMenor()).toBeCloseTo(28.27, 2)
    expect(copo.calcABMaior()).toBeCloseTo(78.54, 2)
    expect(copo.calcAreaLateral()).toBeCloseTo(305.75, 2)
    expect(copo.calcAreaTotal()).toBeCloseTo(412.57, 2)
    expect(copo.calcVolume()).toBeCloseTo(615.75, 2)
    expect(copo.classificar()).toBe('Copo Grande (Suco / Refrigerante)')
})