
function test() {
    var n = window.document.getElementById('itab')
    var n = Number(n.value)
    var res = window.document.getElementById('rtab')
    res.innerHTML = ''
    res.style.paddingTop = '10px'
    res.style.textAlign = 'center'
    if (n <= 10) {
        var c = 0
        var r = 0
        while (c <= 10) {
            res.innerHTML += `${n} x ${c} = ${r} <br>`
            c ++
            r = n * c
        }
    }
}





