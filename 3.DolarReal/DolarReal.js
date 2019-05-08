function calcular() {
    let quantidadeDolares, valorDia, valorReal 

    quantidadeDolares = parseFloat(frmDolarReal.dolar.value)
    valorDia = parseFloat(frmDolarReal.valorDia.value)
    valorReal = quantidadeDolares * valorDia

    frmDolarReal.real.value = valorReal
}