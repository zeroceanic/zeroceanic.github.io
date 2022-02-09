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
var welcomeTextDict = { "en" : "Archives V3",
                        "es" : "Archivo",
                        "de" : "Arkiv",
                        "he" : "אַרְכִיוֹן",
                        "sv" : "Archiv"};


$(document).ready(function () {
var tabs = '<div class="tab"><button class="tablinks writing" >Writing</button><button class="tablinks reading" >Reading</button><button class="tablinks writingreading" >Writing about Reading</button><button class="tablinks reading" >Reading About Writing</button><button class="tablinks sleeping" >Sleeping</button></div>'
$(".sidebar:has(.condition-tabcontent)").prepend(tabs);

$(".tablinks.writing").click(function () {
openLit(event, 'condition-writing');
});

$(".tablinks.reading").click(function () {
openLit(event, 'condition-reading');
});

$(".tablinks.writingreading").click(function () {
openLit(event, 'condition-writingreading');
});

$(".tablinks.readingwriting").click(function () {
openLit(event, 'condition-readingwriting');
});

$(".tablinks.sleeping").click(function () {
openLit(event, 'condition-sleeping');
});

$(".condition-writing").show();

$(".tablinks.writing").addClass("active");
});

function openLit(evt, cityName) {
$(".tablinks").removeClass("active");
$(".sidebar.condition-tabcontent").hide();
$(".sidebar." + cityName).show();
evt.currentTarget.className += " active";
}
