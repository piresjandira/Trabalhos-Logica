/**
 * Cálculo do IMC
 * @author Professor José de Assis
 */

 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)

     if (imc<17) {
        frmImc.foto.src = "imagens/img-2.png"
     }
     else if (imc >=17 && imc <=18.49) {
        frmImc.foto.src = "imagens/img-3.png"
         
     }
     else if (imc >=18.5 && imc <=24.99) {
        frmImc.foto.src = "imagens/img-4.png"
         
     }
     else if (imc >=25 && imc <=29.99) {
        frmImc.foto.src = "imagens/img-5.png"
         
     }
     else if (imc >=30 && imc <=34.99) {
        frmImc.foto.src = "imagens/img-6.png"
         
     }
     else if (imc >=35 && imc <=39.99) {
        frmImc.foto.src = "imagens/img-7.png"
         
     } else   {
        frmImc.foto.src = "imagens/img-8.png"
         
     }
 }
 function limpar() { 
     frmImc.foto.src = ""
     
 }