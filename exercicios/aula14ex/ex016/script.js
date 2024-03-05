
function calcular() {
    var c = window.document.getElementById('iinic')
    var f = window.document.getElementById('ifim')
    var p = window.document.getElementById('ipas')
    var res = window.document.getElementById('res')

    res.innerHTML = 'Contando: <br>'

    if (c.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
        
    } else {
        var c = Number(c.value)
        var f = Number(f.value)
        var p = Number(p.value)
    if (p == 0) {
        window.alert('Passo invalido! Considerando Passo 1')
        p = 1
    }
            if (c < f) {
            // Contagem crescente
            do {
                res.innerHTML += `${c} &#x1F449`
                c = c + p
            } while (c <= f)
        } else {
            // Contagem descrescente
            do {
                res.innerHTML += `${c} &#x1F449`
                c = c - p
            } while (c >= f)
        }
    } 
    res.innerHTML += '&#x1F3C1'
}