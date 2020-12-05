$(function () {
    console.log('JQuery is working');
    $("#task-result").hide();
    $('#search').keyup(function () {
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
});
