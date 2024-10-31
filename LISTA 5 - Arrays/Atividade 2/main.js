function alf() {

    const nome1 = document.getElementById('name1')
    const nome2 = document.getElementById('name2')
    const nome3 = document.getElementById('name3')
    const nome4 = document.getElementById('name4')

    const nomes = [nome1.value, nome2.value, nome3.value, nome4.value]

    p1 = document.getElementById('p1')
    p2 = document.getElementById('p2')
    p3 = document.getElementById('p3')
    p4 = document.getElementById('p4')

    if (nome1.value == nome2.value && nome3.value == nome4.value && nome1.value == nome3.value && nome4.value == nome2.value){
        p1.innerHTML = ('Todos os nomes são iguais')
    } else {
        nomes.sort()
        p1.innerHTML = (nomes)
}

}