    const array1 = ['Maça', 'Banana', 'Framboesa', 'Tamanduá']
    const array2 = ['Alface', 'Almerão', 'Beterraba', 'Calçicha']
    const array3 = ['Tomate', 'Batata', 'Inhame', 'Cueca']

    a1 = document.getElementById('a1')
    a2 = document.getElementById('a2')
    a3 = document.getElementById('a3')
    sa = document.getElementById('sa')

    a1.innerHTML = (`Frutas: ${array1}`)
    a2.innerHTML = (`Legumes: ${array2}`)
    a3.innerHTML = (`Raizes: ${array3}`)

    sa.innerHTML = (`Frutas: ${array1}, Legumes: ${array2} e Raizes: ${array3}.`)