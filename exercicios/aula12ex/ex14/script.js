function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas.</p> `

    if (hora >= 0 && hora < 6) {
        img.src = 'imagens/madrugada.png'
        msg.innerHTML += 'Boa Madrugada!'
        document.body.style.backgroundColor = '#142829'
    } else if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.png'
        msg.innerHTML += 'Bom dia'
        document.body.style.backgroundColor = '#E2C48F'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        msg.innerHTML += '<p>Boa Tarde!</p>'
        document.body.style.backgroundColor = '#6A457B'
    } else {
        img.src = 'imagens/noite.png'
        msg.innerHTML += 'Boa noite!'
        document.body.style.backgroundColor = '#1B2340'
    }
}