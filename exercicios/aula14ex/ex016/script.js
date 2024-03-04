

function calcular() {
    var c = window.document.getElementById('iinic')
    var c = Number(c.value)
    var f = window.document.getElementById('ifim')
    var f = Number(f.value)
    var p = window.document.getElementById('ipas')
    var p = Number(p.value)
    var res = window.document.getElementById('res')

    res.innerHTML = 'Contando: <br>'

    if (c <= f) {
        do {
            res.innerHTML += `${c} &#x1F449`
            c = c + p
        } while (c <= f)
    } else {
        do {
            res.innerHTML += `${c} &#x1F449`
            c = c - p
        } while (c >= f)
    }
    res.innerHTML += '&#x1F3C1'
}