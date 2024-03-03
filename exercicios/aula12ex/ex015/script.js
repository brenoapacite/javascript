

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { 
             //Criança
                genero = '<strong>criança</strong> masculina'
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                genero = '<strong>jovem</strong> masculino'
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                genero = '<strong>adulto</strong> masculino'
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //Idoso
                genero = '<strong>idoso</strong> masculino'
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { 
                //Criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade < 21) {
                   //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60) {
                   //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                   //Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }

}