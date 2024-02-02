function concatene() {
    /*
        var nome;
        var sobrenome;
        var nomeCompleto;
    
    
        nome = document.formeJeff.txtNome.value;
        sobrenome = document.formeJeff.txtSobrenome.value;
    
        nomeCompleto = nome + ' ' + sobrenome;
    
    
        if (nome == '') {
            window.alert('Digite o seu nome')
    
        } else if (sobrenome == '') {
            window.alert('Digite seu Sobrenome')
        } else {
    
    
            document.write('Olá ' + nomeCompleto + ', Seja Bem Vindo(a)!');
        }
        */




}


function logar() {
    var login, senha;
    var login2, senha2;

    /*
  
       login = document.formLogin.txtLogin.value;
      senha = document.formLogin.txtsenha.value;
  */

    login = document.getElementById('login').value;
    senha = document.getElementById('senha').value;

    //login2 = login.toUpperCase();
    //senha2 = senha.toUpperCase();


    if (login == "jefferson" && senha == "jeff123") {
        location.href = "page.html"

    } else if (login == 'ana' && senha == 'dory1324') {
        location.href = "page.html"

    } else if (login == 'Rosi' && senha == '050400') {
        location.href = 'page.html'

    } else {
        window.alert("Login ou senha inválida")
        location.href = 'index.html'
    }

}

function sair() {
    location.href = 'index.html'
}