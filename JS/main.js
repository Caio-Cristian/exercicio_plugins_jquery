$(document).ready(function(){
    $('#carrossel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000', {reverse: true});
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
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
            cpf: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: { 
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            telefone: 'Por favor, insira o seu Telefone',
            mensagem: 'Por favor, deixe uma mensagem',
            cpf: 'Por favor, insira o seu CPF',
            endereçoCompleto: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos ou incorretos!`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})

function scrollToSection(id, offset) {
    const sectionOffsetTop = $(id).offset().top + offset;
    $('html, body').animate({
        scrollTop: sectionOffsetTop
    }, 'slow');
}