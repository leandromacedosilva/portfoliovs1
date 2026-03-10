
function enviarWhats(event) {

    event.preventDefault();

    const nome = window.document.getElementById('nome').value;
    const mensagem = window.document.getElementById('mensagem').value;
    const telefone = '5594991790035';

    const texto = `Olá, chamo-me ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const URL = `https://wa.me/${telefone}?text=${msgFormatada}`;

    //console.log(URL);

    window.open(URL, '_blank');
}
