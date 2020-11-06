
export function buildResponseJSON(json) {

}

export function buildResponseAllCarteJSON(json) {
    var newJson = [];

    $.each(json, function (i, set) {
        $.each(set, function (j, carte) {
            newJson.push(carte);
        });
    });

    return newJson;
}