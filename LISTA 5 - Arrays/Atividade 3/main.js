function alf() {

    nome1 = document.getElementById('name1')
    nome2 = document.getElementById('name2')
    nome3 = document.getElementById('name3')
    nome4 = document.getElementById('name4')
    nome5 = document.getElementById('name5')

    nomes = [nome1.value, nome2.value, nome3.value, nome4.value, nome5.value]

    p1 = document.getElementById('p1')

        nomes.sort()
        nomes.reverse()
        p1.innerHTML = (nomes)
}