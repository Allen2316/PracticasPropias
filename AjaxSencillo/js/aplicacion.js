$(document).ready(function () {
    $("#registrar").click(function (e) {
        var datos = $("#formularioID").serialize();
        console.log(datos);
        $.ajax({
            type: "POST",
            url: "registro.php",
            data: datos,            
            success: function (response) {
                if (response == 1) {
                    alert("Agregado con Exito");
                } else {
                    alert("Falló al Registrar");
                }
                /* $("#formularioID").trigger("reset"); */
            }
        });
        e.preventDefault();
    });


});