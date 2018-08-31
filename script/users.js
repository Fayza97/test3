(function () {
    const url = "http://localhost:3000/users";
    const URL = "http://localhost:3000/users/";
    $.get({
        url: url,
        success: (result, req) => {
            const tbody = $("table tbody");

            result.forEach((el, i) => {
                const tr = $("<tr>").append([
                    $("<td>")
                    .addClass("rid")
                    .html(el.id),
                    $("<td>")
                    .addClass("name")
                    .html(el.name),
                    $("<td>")
                    .addClass("email")
                    .html(el.email),
                    $("<td>").append(
                        $('<button id="update-button" class="btn btn-warning">')
                        .html("Edit")
                        .on("click", function () {
                            console.log("sdk");

                            let inputsArray = $(".form input");
                            inputsArray[0].value = el.name;
                            inputsArray[1].value = el.email;

                            let saveBtn = $("<button>")
                                .html("Save")
                                .addClass("btn btn-success")
                                .on("click", () => {
                                    el.name = inputsArray[0];
                                    el.email = inputsArray[1];
                                    saveBtn.remove()
                                    $.ajax({
                                        method: "PUT",
                                        url: URL + el.id,
                                        data: JSON.stringify({
                                            name: name.value,
                                            email: email.value
                                        }),
                                        contentType: "application/json",
                                        success: function (result) {
                                            console.log('ewrty')
                                            tr.find('.name').html(name.value)
                                            tr.find('.email').html(email.value)
                                            $("input").val("")
                                            // console.log(title)
                                        }
                                    });
                                });
                            console.log(el)
                            // });
                            $(".form").append(saveBtn)
                        })
                    ),
                    $("<td>").append(
                        $('<button id="delete-button" class="btn btn-danger">')
                        .html("Delete")
                        .on("click", () => {
                            //delete
                            $.ajax({
                                method: "DELETE",
                                url: URL + el.id,
                                success: function (data) {
                                    tr.remove();
                                    console.log(data[0]);
                                }
                            });
                        })
                    )
                ]);
                tbody.append(tr);
            });
        }
    });
    //POST Method
    function pForm(e) {
        $.post({
            url: url,
            contentType: "application/json",
            data: JSON.stringify({
                name: $("#name").val(),
                email: $("#email").val(),
            }),
            //  processData: false,
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        });

        // e.preventDefault();
    }
    $(".form").submit(pForm);
    $(".form").on('submit', '#sub-button', pForm).on('submit', e => e.preventDefault())

    $("#sub-button").on("click", () => {
        console.log("djkd");
    });
})();