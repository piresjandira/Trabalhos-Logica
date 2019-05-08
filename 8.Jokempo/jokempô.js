// 0= Papel  1 = Pedra  2= Tesoura  
// let computador

function jogar(usuario) {
    let computador=Math.floor(Math.random() * 3);

    if (usuario == 0) {
        formJokempo.usuario.value = 'Papel';
        if (computador == 0) {
            formJokempo.aleatorio.value = 'Papel';
            formJokempo.resultado.value = 'Empate';
        
        }
        if (computador == 1) {
            formJokempo.aleatorio.value = 'Pedra';
            formJokempo.resultado.value = 'Ganhou';
        
        }
        if (computador == 2) {
            formJokempo.aleatorio.value = 'Tesoura';
            formJokempo.resultado.value = 'Perdeu';
        
        }
    }
    if (usuario == 1) {
        formJokempo.usuario.value = 'Pedra';

        if (computador == 0) {
            formJokempo.aleatorio.value = 'Papel';
            formJokempo.resultado.value = 'Perdeu';
        
        }
        if (computador == 1) {
            formJokempo.aleatorio.value = 'Pedra';
            formJokempo.resultado.value = 'Empate';
        
        }
        if (computador == 2) {
            formJokempo.aleatorio.value = 'Tesoura';
            formJokempo.resultado.value = 'Ganhou';
        
        }
    }
    if (usuario == 2) {
        formJokempo.usuario.value = 'Tesoura';
        if (computador == 0) {
            formJokempo.aleatorio.value = 'Papel';
            formJokempo.resultado.value = 'Ganhou';
        
        }
        if (computador == 1) {
            formJokempo.aleatorio.value = 'Pedra';
            formJokempo.resultado.value = 'Perdeu';
        
        }
        if (computador == 2) {
            formJokempo.aleatorio.value = 'Tesoura';
            formJokempo.resultado.value = 'Empate';
        
        }
    }
  
}