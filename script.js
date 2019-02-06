// Crie um script em uma página hospedada no github onde que exiba 6 fotos obtidas através
// da API do Flickr. Informe a URL para o exemplo que criou.
const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=b8ab4d0b8904bab60c3d9b20ea0a3133&user_id=167980004%40N05&format=json&nojsoncallback=1&auth_token=72157705020100141-3d7333dc6a194594&api_sig=15a9daeb4ce61e144036e9d1f4a872e6'
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
