$(document).ready(function() {
    let artigos = [{
        id: 1,
        link: 'artigos/1.txt',
        titulo: 'Papel Planes (PWA)'
    }]

    function loadContent(url) {
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(content) {
                $('#conteudo').html(content)
            }
        })
    }
    
    artigos.forEach(function(artigo) {
        $('#menu').append(`<a id="option-${artigo.id}">${artigo.titulo}</a><br/>`)
        let el = $(`#option-${artigo.id}`)
        el.addClass('btn-menu').on('click', () => loadContent(artigo.link))
    })


})