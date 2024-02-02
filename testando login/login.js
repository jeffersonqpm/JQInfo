function entrarSistema(){


    var nome, senha;

    nome = document.formLogin.txtNome.value;
    senha = document.formLogin.txtSenha.value;


    if(nome == "ana" && senha == '123'){
        location.href = "page.html";
        window.alert('Logado com sucesso.')
    }else{
        window.alert("Login e senha inválidos.")
    }
}