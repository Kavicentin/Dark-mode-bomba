        
        
        
        var claro = '_css/claro.css';
        var escuro = '_css/escuro.css';

    $("#switch").click( function () {
        if ($('.tema').attr('href') === claro) {
            $('.tema').attr('href', escuro);
        } else {
            $('.tema').attr('href', claro)
        }
  });
        
  $("#switch").click( function () {
    if ($('.logo').attr('src') === "_img/logo_claro.png") {
        $('.logo').attr('src', "_img/logo_escuro.png");
    } else {
        $('.logo').attr('src', "_img/logo_claro.png")
    }
});

    $("#registrar").click( function (){
        $('#form_logo').addClass("d-none")
        $('#form_reg').removeClass("d-none")
});
       

    $("#voltar").click( function (){
        $('#form_logo').removeClass("d-none")
        $('#form_reg').addClass("d-none")
        return false
});


    $("#enviar").click( function (){
        $('#form_logo').removeClass("d-none")
        $('#form_reg').addClass("d-none")
        return false
});

     function login() {
       
        var usuario = document.getElementsByName('username')[0].value;
        usuario = usuario.toLowerCase();
        var senha = document.getElementsByName('password')[0].value;
        senha = senha.toLowerCase();
        if (usuario == "kaique" && senha == "123") { 
            window.location.href = "kaique.html";
        }  else if (usuario == "jdf" && senha == "123") { 
            window.location.href="_js/bom/bomba/bomba.html"
        } else {
            alert("Dados incorretos, tente novamente");
            return false
        }
      };





