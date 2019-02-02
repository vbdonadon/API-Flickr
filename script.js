// Crie um script em uma página hospedada no github onde que exiba 6 fotos obtidas através
// da API do Flickr. Informe a URL para o exemplo que criou.
const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=e0704084a765455afa2c7af759082590&user_id=167980004%40N05&format=json&nojsoncallback=1&auth_token=72157704865735461-4bb18f0201f42de3&api_sig=1eb85e1c8f5d4713785aa77c00c12784'
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
