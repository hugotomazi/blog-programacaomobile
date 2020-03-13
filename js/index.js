$(document).ready(function() {
    let artigos = [{
        id: 1,
        link: 'artigos/1.txt',
        titulo: 'Programação Web'
    },
    {
        id: 2,
        link: 'artigos/1.txt',
        titulo: 'Programação Web'
    },
    {
        id: 3,
        link: 'artigos/1.txt',
        titulo: 'Programação Web'
    },
    {
        id: 4,
        link: 'artigos/1.txt',
        titulo: 'Programação Web'
    }]

    function loadContent(url) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function(content) {
                console.log(content)
            }
        })
    }
    
    artigos.forEach(function(artigo) {
        $('#menu').append(`<a id="option-${artigo.id}">${artigo.titulo}</a><br/>`)
        let el = $(`#option-${artigo.id}`)
        el.addClass('btn-menu')
        el.on('click', function() {
            loadContent(artigo.link)
        })
    })


})