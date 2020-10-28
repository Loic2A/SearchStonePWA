
import { transformUrlImage } from "/script/transformUrlImage.js";
import { getCarteByType } from "/script/getCarteByType.js";
import { getCarteByName } from "/script/getCarteByName.js";


$(document).ready(function () {
    //getAllCarte();
    //getImage("https://art.hearthstonejson.com/v1/render/latest/frFR/512x/BOT_438.png");
    //getCarteByType("Hero%2520Power")
    getCarteByName("Draconic%2520Lineage")
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

        console.log(response);

        return response;

    });
}

