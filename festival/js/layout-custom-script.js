$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "Archives",
                        "es" : "Archivo",
                        "de" : "Arkiv",
                        "he" : "אַרְכִיוֹן",
                        "sv" : "Archiv"};
