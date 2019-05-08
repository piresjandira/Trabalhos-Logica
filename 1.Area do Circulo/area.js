/**
 * Calcular IMC
 * @author Geovana Sousa e Jandira Pires
 */
function calcularCirculo() {
    let raio, area //Variavel igual

    raio = parseFloat(frmCirculo.txtRaio.value.replace(",","."))

    area = (raio * raio) * 3.14159

    frmCirculo.txtArea.value = area.toFixed(2)

}