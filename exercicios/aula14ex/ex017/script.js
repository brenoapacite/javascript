
function test() {
    var n = window.document.getElementById('itab')
    var res = window.document.getElementById('seltab')
    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(n.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c ++
        }
    }
}





