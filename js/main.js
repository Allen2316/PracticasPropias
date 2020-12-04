$(document).ready(function () {
    $("#formulario").submit(function (event) {
        event.prevetDefault();
        $("#nombre").val();
        console.log("cuidado");
    })
});