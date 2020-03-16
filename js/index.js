$(document).ready(function() {
    let artigos = [{
        id: 1,
        link: 'artigos/1.txt',
        titulo: 'Papel Planes (PWA)'
    }, {
        id: 2,
        link: 'artigos/2.txt',
        titulo: 'Progressive Web Apps'
    }, {
        id: 3,
        link: 'artigos/3.txt',
        titulo: "API's HTML 5 e Web Components"
    }]

    function loadContent(url) {
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            contentType: "charset=UTF-8",
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