(function () {
    const url = "http://localhost:3000/posts";
    const URL = "http://localhost:3000/posts/";
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
                    .addClass("userid")
                    .html(el.userid),
                    $("<td>")
                    .addClass("categoryid")
                    .html(el.categoryid),
                    $("<td>")
                    .addClass("title")
                    .html(el.title),
                    $("<td>")
                    .addClass("body")
                    .html(el.body),
                    $("<td>").append(
                        $('<button id="update-button" class="btn btn-warning">')
                        .html("Edit")
                        .on("click", function () {
                            console.log("sdk");

                            let inputsArray = $(".form input");
                            inputsArray[0].value = el.userid;
                            inputsArray[1].value = el.categoryid;
                            inputsArray[2].value = el.title;
                            inputsArray[3].value = el.body;

                            let saveBtn = $("<button>")
                                .html("Save")
                                .addClass("btn btn-success")
                                .on("click", () => {
                                    el.userid = inputsArray[0];
                                    el.categoryid = inputsArray[1];
                                    el.title = inputsArray[2];
                                    el.body = inputsArray[3];
                                    saveBtn.remove()
                                    $.ajax({
                                        method: "PUT",
                                        url: URL + el.id,
                                        data: JSON.stringify({
                                            userid: userid.value,
                                            categoryid: categoryid.value,
                                            title: title.value,
                                            body: body.value
                                        }),
                                        contentType: "application/json",
                                        success: function (result) {
                                            console.log('ewrty')
                                            tr.find('.userid').html(userid.value)
                                            tr.find('.categoryid').html(categoryid.value)
                                            tr.find('.title').html(title.value)
                                            tr.find('.body').html(body.value)
                                            $("input").val("")
                                            console.log(title)
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
                userid: $("#userid").val(),
                categoryid: $("#categoryid").val(),
                title: $("#title").val(),
                body: $("#body").val()
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