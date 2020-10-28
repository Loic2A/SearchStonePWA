export function transformUrlImage(carte) {
    var id = carte.cardId;
    carte.img = "https://art.hearthstonejson.com/v1/render/latest/frFR/512x/"+ id + ".png";
}
