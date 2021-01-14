$(function () {
    listar();
    loguear();
    $("#form-registro").submit(function (e) {
        const data = $(this).serialize();
        /* const data = {
            user: $("#user").val(),
            pass: $("#pass").val(),
            tel: $("#tel").val(),
            id: $("#UserId").val()
        }; */
        let url = "registrar.php";
        console.log(data);
        /* $.post(url, data, function (response) {
            console.log(response);            
            listar();
            $("#form-registro").trigger("reset");    
        }); */

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
                console.log(response);
                listar();
                $("#form-registro").trigger("reset");
            }
        });
        e.preventDefault();
    });


    function listar() {
        $.ajax({
            type: "GET",
            url: "listar.php",
            success: function (response) {
                let datos = JSON.parse(response);
                let template = "";
                datos.forEach(dato => {
                    template +=
                        `<tr ID-user="${dato.id}">                        
                        <td>
                            <a href="" class="item-tabla" title="Pulsar para editar"
                            data-toggle="modal" data-target="#modalEditar"> ${dato.user}</a>
                        </td>
                        <td> ${dato.pass} </td>                        
                        <td> ${dato.tel} </td>                        
                        <td>                         
                            <button class="borrar btn btn-danger m-2" data-toggle="modal" data-target="#modalEliminacion">Eliminar</buttton>
                            <button class="btnactualizar btn btn-primary" data-toggle="modal" data-target="#modalEditar">Editar</buttton>
                        </td>
                    </tr>
                    `
                });
                $("#cuerpo-tabla").html(template);
            }
        });
    }

    $(document).on("click", ".borrar", function () {
        let item = $(this)[0].parentElement.parentElement;
        let id = $(item).attr("ID-user");
        eliminar(id);
    });

    function eliminar(id) {
        $(document).on("click", ".modalEliminar", function () {
            $.ajax({
                type: "POST",
                url: "eliminar.php",
                data: { id },
                success: function (response) {
                    listar();
                }
            });
        });
    }

    $(document).on("click", ".item-tabla", function () {
        let item = $(this)[0].parentElement.parentElement;
        let id = $(item).attr("ID-user");
        console.log(id);
        $.ajax({
            type: "POST",
            url: "usuario-individual.php",
            data: { id },
            success: function (response) {
                const dato = JSON.parse(response);
                $("#ID-user1").val(dato.id);
                $("#user1").val(dato.user);
                $("#pass1").val(dato.pass);
                $("#tel1").val(dato.tel22);
                console.log(response);
            }
        });

    });

    $(document).on("click", ".btnactualizar", function (e) {
        let item = $(this)[0].parentElement.parentElement;
        let id = $(item).attr("ID-user");
        console.log(id);
        $.ajax({
            type: "POST",
            url: "usuario-individual.php",
            data: { id },
            success: function (response) {
                const dato = JSON.parse(response);
                $("#ID-user1").val(dato.id);
                $("#user1").val(dato.user);
                $("#pass1").val(dato.pass);
                $("#tel1").val(dato.tel22);
                console.log(response);
            }
        });
        e.preventDefault();
    });



    $(document).on("click", ".actualizar", function (e) {
        const data = $("#form-edicion").serialize();
        console.log(data);
        let url = "editar.php";
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
                console.log(response);
                listar();
                loguear();
                $("#form-edicion").trigger("reset");
            }
        });
        e.preventDefault();
    });



    $("#form-login").submit(function (e) {
        const item = $(this).serialize();
        console.log(item);
        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: item,
            success: function (response) {
                var msg = "";
                let data = "index.html?" + response;
                if (response.includes('id')) {
                    window.location.href = data;
                } else {
                    msg = response;
                }
                $("#parrafo").html(msg);
            }
        });
        e.preventDefault();
    });



    function loguear() {
        $(document).ready(function () {
            let fa = document.URL;
            let id2 = fa.split("?id=");
            let id = id2[1];
            console.log(id);
            $.ajax({
                type: "GET",
                url: "logueo.php",
                data: { "id": id },
                success: function (response) {
                    console.log(response);
                    if (!response.includes("No se hallo")) {
                        $("#nick").html(response);
                    }
                }
            });
        });
    }


    /* $(document).ready(function () {
        let fa = document.URL;
        let id2 = fa.split("?id=");
        let id = id2[1];
        console.log(id);
        $.ajax({
            type: "GET",
            url: "logueo.php",
            data: { "id": id },
            success: function (response) {
                console.log(response);
                if (!response.includes("No se hallo")) {
                    $("#nick").html(response);
                }
            }
        });
    }); */


});
