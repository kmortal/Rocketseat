
function nota(nota){
    if (nota <= 100 && nota >= 0)
    {
        if (nota >= 90 && nota <= 100) nota='A'

        else if (nota >= 80) nota='B'

        else if (nota >= 70) nota='C'

        else if (nota >= 60) nota='D'

        else if (nota < 60 && nota > 0) nota='F'
    }else return 'nota inválida'
    return nota
}

console.log(nota(100))