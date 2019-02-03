// Crie um script em uma página hospedada no github onde que exiba 6 fotos obtidas através
// da API do Flickr. Informe a URL para o exemplo que criou.
const getFrob = 'https://api.flickr.com/services/rest/?method=flickr.auth.getFrob&api_key=e0704084a765455afa2c7af759082590&format=json&nojsoncallback=1&auth_token=72157704865735461-4bb18f0201f42de3&api_sig=447035ef857ed335d2241d9725107798'
const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=52cad1a1c4789a58813e763039891e0e&user_id=167980004%40N05&format=json&nojsoncallback=1&auth_token=72157706457922534-e03993ad27d8739e&api_sig=ad58f732e1b885304a25d98689a9e915'
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
        alert('Falha na requisição. Key expirada.');
    });
});