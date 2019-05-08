function calcular() {
    let homem, mulher, crianca, KCarne, Cerveja, Refri$, kgCarne, valorCarne, latas, VlLata, refri, prRefri

    homem = parseFloat(frmChurrasco.txtHomem.value.replace(',', '.'))
    mulher = parseFloat(frmChurrasco.txtMulher.value.replace(',', '.'))
    crianca = parseFloat(frmChurrasco.txtCrianca.value.replace(',', '.'))
    KCarne = parseFloat(frmChurrasco.txtKCarne.value.replace(',', '.'))
    Cerveja = parseFloat(frmChurrasco.txtCerveja.value.replace(',', '.'))
    RefriUnit = parseFloat(frmChurrasco.txtRefriUnit.value.replace(',', '.'))


    kgCarne = parseFloat(frmChurrasco.txtCarne.value.replace(',', '.'))
    valorCarne = parseFloat(frmChurrasco.txtPreço.value.replace(',', '.'))

    latas = parseFloat(frmChurrasco.txtLitros.value.replace(',', '.'))
    VlLata = parseFloat(frmChurrasco.txtLatas.value.replace(',', '.'))

    refri = parseFloat(frmChurrasco.txtRefri.value.replace(',', '.'))
    prRefri = parseFloat(frmChurrasco.vlRefri.value.replace(',', '.'))


    kgCarne = (homem * 0,3) + (mulher * 0,3) + (crianca * 0,1)
    valorCarne = (kgCarne * KCarne)

    latas = (homem * 12) + (mulher * 4) 
    VlLata = (latas * RefriUnit) 

    refri = mulher * 2 + crianca * 2
    prRefri = refri * RefriUnit


    frmChurrasco.txtCarne.value = kgCarne.toFixed(0)
    frmChurrasco.txtPreço.value = valorCarne.toFixed(2)

    frmChurrasco.txtLatas.value = VlLata.toFixed(2)
    frmChurrasco.txtLitros.value = latas.toFixed(0)

    frmChurrasco.txtRefri.value = refri.toFixed(0)
    frmChurrasco.vlRefri.value = prRefri.toFixed(2)

    frmChurrasco.vlTotal.value = (valorCarne + VlLata + prRefri).toFixed(2)
    frmChurrasco.pessoa.value =((valorCarne + VlLata + prRefri) / (homem + mulher )).toFixed(2)

}