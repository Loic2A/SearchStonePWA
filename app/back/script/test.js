import { getCarteByMultiple } from "/back/script/getCarteByMultiple.js";
import {getCarteByClass} from "/back/script/getCarteByClass.js";

$(document).ready(function () {
    const json = {"classes": "Druid", "sets": null, "types": "Hero Power", "factions": null, "qualities": null, "races": null};
	const json1 = {"classes": null, "sets": "Basic", "types": null, "factions": null, "qualities": null, "races": null};
    const json2 = {"classes": null, "sets": null, "types": "Hero", "factions": null, "qualities": null, "races": null};
    const json3 = {"classes": null, "sets": null, "types": null, "factions": "Alliance", "qualities": null, "races": null};
    const json4 = {"classes": null, "sets": null, "types": null, "factions": null, "qualities": "Common", "races": null};
    const json5 = {"classes": null, "sets": null, "types": null, "factions": null, "qualities": null, "races": "Demon"};
    //const json6 = {"classes": null, "sets": null, "types": "Hero", "factions": null, "qualities": null, "races": null};

    getCarteByMultiple(json, afficherMultiple);

    function afficherMultiple(response) {
        console.log(response);
    }
    
});