import { transformUrlImage } from "/script/transformUrlImage.js";

export function getCarteByRace(race) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/"+ set +"",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "acc93a5516msh1444a5fc4c180adp1013c1jsn4e04544b762f"
        }
    };

    $.ajax(settings).done(function (response) {
        $.each(response, function (j, carte) {
            transformUrlImage(carte)
        });

        console.log(response);

        return response;
    });
}