$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira seu email',
            telefone:'Por favor, insira seu número para contato',
            cep:'Por favor, insira seu cep',
            cpf:'Por favor, insira seu cpf'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evendo, validador){
            var camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
        }
    })
})