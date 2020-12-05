$(function () {
    let edit = false;
    fetchTasks();
    $("#task-result").hide();
    $('#search-btn').submit(function () {
        if ($("#search").val()) {
            let search = $('#search').val();
            $.ajax({
                type: "POST",
                url: "task-search.php",
                data: { search },
                /* dataType: "dataType",  */
                success: function (response) {
                    let tasks = JSON.parse(response);
                    let template = "";
                    tasks.forEach(tareas => {
                        console.log(tareas);
                        template +=
                            `<li> 
                        ${tareas.nombre}                    
                    </li>`
                    });
                    $("#container").html(template);
                    $("#task-result").show();
                }
            });
        }
    });

    $("#task-form").submit(function (e) {
        const postData = {
            name: $("#name").val(),
            description: $("#description").val(),
            id: $("#taskId").val()
        };

        let url = edit === false ? "task-add.php" : "task-edit.php";
        console.log(url);

        $.post(url, postData, function (response) {
            console.log(response);
            fetchTasks();
            $("#task-form").trigger("reset");
        });
        e.preventDefault();
    });

    function fetchTasks() {
        $.ajax({
            type: "GET",
            url: "task-list.php",
            success: function (response) {
                let tasks = JSON.parse(response);
                let template = "";
                tasks.forEach(tarea => {
                    template += `
                    <tr taskId="${tarea.id}">
                        <td>${tarea.id}</td>
                        <td>
                            <a href="#" class="task-item" title="Pulsar para editar">${tarea.nombre}</a>
                        </td>
                        <td>${tarea.descripcion}</td>
                        <td>
                            <button class="task-delete btn btn-danger">
                                Eliminar
                            </button>
                        </td>
                    </tr>`
                });
                $("#tasks").html(template);
            }
        });
    }

    $(document).on("click", ".task-delete", function () {
        if (confirm("Estas seguro de eliminarlo?")) {
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr("taskId");
            $.post("task-delete.php", { id }, function (response) {
                fetchTasks();
            });
        }
    });

    $(document).on("click", ".task-item", function () {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr("taskId");
        $.post("task-single.php", { id },
            function (response) {
                const task = JSON.parse(response);
                $("#name").val(task.nombre);
                $("#description").val(task.descripcion);
                $("#taskId").val(task.id);
                edit = true;
            },
        );

    });
});
