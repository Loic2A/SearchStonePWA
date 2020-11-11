import { getCarteByMultiple } from "/back/script/getCarteByMultiple.js";

$(document).ready(function () {
    
	const json = '{"classes": "Druid", "sets": null, "types": null, "factions": null, "qualities": null, "races": null}'
    const args = JSON.parse(json);
    getCarteByMultiple(args)
    
});