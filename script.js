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
