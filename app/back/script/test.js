import {getAllCarte} from "/back/script/getAllCarte.js";
import {getCarteByType} from "/back/script/getCarteByType.js";

$(document).ready(function () {
    getAllCarte();
    getCarteByType('Spell');
});
