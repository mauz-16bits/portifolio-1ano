    str1 = prompt('Digite uma')
    str2 = prompt('Digite uma')
    str3 = prompt('Digite uma')
    str4 = prompt('Digite uma')
    str5 = prompt('Digite uma')

    p = document.getElementById('p')

    strings = [str1, str2, str3, str4, str5]

    if (str1.length > str2.length && str1.length > str3.length && str1.length > str4.length && str1.length > str5.length){
        p.innerHTML = (`A palavra "${str1}" é a maior, e tem ${str1.length} caracteres`)
    } else if (str2.length > str1.length && str2.length > str3.length && str2.length > str4.length && str2.length > str5.length){
        p.innerHTML = (`A palavra"${str2}" é a maior, e tem ${str2.length} caracteres`)
    } else if (str3.length > str1.length && str3.length > str2.length && str3.length > str4.length && str3.length > str5.length){
        p.innerHTML = (`A palavra"${str3}" é a maior, e tem ${str3.length} caracteres`)
    } else if (str4.length > str1.length && str4.length > str2.length && str4.length > str3.length && str4.length > str5.length){
        p.innerHTML = (`A palavra"${str4}" é a maior, e tem ${str3.length} caracteres`)
    } else {
        p.innerHTML = (`A palavra ${str5} é a maior, e tem ${str5.length} caracteres`)
}