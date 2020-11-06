
import { transformUrlImage } from "/back/script/transformUrlImage.js";
import { buildResponseAllCarteJSON } from "/back/script/buildResponseJSON.js";

$(document).ready(function () {
    getAllCarte();

    fetch('https://us-central1-searchstone-250a5.cloudfunctions.net/helloWorld')
        .then(response => {
            console.log(response);
        })
        .catch(console.error);

});

function getAllCarte() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?locale=frFR",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "acc93a5516msh1444a5fc4c180adp1013c1jsn4e04544b762f"
        }
    };

    $.ajax(settings).done(function (response) {

        $.each(response,function (i, cartes) {
            $.each(cartes, function (j, carte) {
                transformUrlImage(carte)
            });

        });

        response = buildResponseAllCarteJSON(response);

        console.log(response)

        return response;

    });
}

