// TESTE DA QUATRO

// Escreva um código JQuery que: após carregar a arvore do DOM altere
// o alt de todas as imagens para "alt de teste"
const changeImageAlt = document.querySelectorAll('img')
window.onload = () => {
    changeImageAlt.forEach(element => {
        element.setAttribute('alt', 'alt de teste')
    })
}

// Faça uma requisição Ajax usandojQuery para a seguinte URL http://www.exemplo.com/json
// esta URL irá retornar um objeto "pessoa" contendo alguns itens, imprima esses itens no 
// console do Chrome
// $(document).ready(function () {
//     $.ajax({
//         url: "https://www.exemplo.com/json",
//         type: 'GET',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data);
//         },
//     }).done(function () {
//         console.log('Requisição feita.');
//     }).fail(function() {
//         console.log('Falha na requisição.');
//     });
// });

// Crie um script em uma página hospedada no github onde que exiba 6 fotos obtidas através
// da API do Flickr. Informe a URL para o exemplo que criou.
const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=6d31b2ff99d0ce26d95b01cf28dae6b4&user_id=167980004%40N05&format=json&nojsoncallback=1&auth_token=72157706388893944-02540908c16c5fb9&api_sig=1a345eb70363bc4eadff8dfc3eebf7b2'
$(document).ready(function () {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json', 
        success: function (data) {
            const getPhoto = data.photos.photo;
            for (i = 0; i < 6; i++){
                document.getElementsByClassName('images__galery')[0].innerHTML += `<img src="https://farm${getPhoto[i].farm}.staticflickr.com/${getPhoto[i].server}/${getPhoto[i].id}_${getPhoto[i].secret}.jpg"/>`
            }
        },
    }).done(function () {
        console.log('Requisição feita.');
    }).fail(function() {
        console.log('Falha na requisição.');
    });
});

// Usando o window.location qual a melhor forma de obter a querystring desta URL e qual seu
// valor: http://example.com/maaaa-ooooeee?moises=raquete#/nao/consegue?/gugu=valenduuu
window.location.search // Retorna a query string completa.
