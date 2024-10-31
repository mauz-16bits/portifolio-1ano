function conC() {

    v1 = document.getElementById('v1').value
    v2 = document.getElementById('v2').value
    v3 = document.getElementById('v3').value

    v1 = Number(v1)
    v2 = Number(v2)
    v3 = Number(v3)

    const valores = [v1, v2, v3]

    valores.sort()
    valores.reverse()

    const maior = valores[0]

    p = document.getElementById('p')

    sm = v1+v2+v3

    const menor = valores.sort()

    if (sm > 100) {
        p.innerHTML = (`O maior valor é ${maior}`)
    } else {
        p.innerHTML = (`O menor valor é ${menor[0]}`)
    }

}