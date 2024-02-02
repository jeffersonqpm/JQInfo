function logarold() {
    /*

        var nome, senha;

        nome = document.getElementById("login").value;
        senha = document.getElementById("senha").value;


        if (nome == "jefferson" && senha == "123") {

            location.href = "page.html"

        } else {
            window.alert("Login e senha inválidos.");
        }

        */

}

function concatene() {

    var nome, sobrenome;
    var nomeCompleto;

    nome = document.formJeff.txtNome.value;
    sobrenome = document.formJeff.txtSobrenome.value;

    nomeCompleto = nome + " " + sobrenome

    window.alert("Nome: " + nomeCompleto);

}

function logar() {

    var usuario, senha;

    usuario = document.formLogin.txtUser.value;
    senha = document.formLogin.txtSenha.value;

    if (usuario == "jeff" && senha == "123") {
        location.href = "page.html";
    } else {
        window.alert('Usuário e senha inválidos.')
    }

}