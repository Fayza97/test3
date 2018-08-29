(function () {
    const url = "http://localhost:3000/posts";
    const URL = "http://localhost:3000/posts/";
    // $.ajax({
    $.get({
        url: url,
        // method: "GET",
        success: (result, req) => {
            const tbody = $("table tbody");

            result.forEach((el, i) => {
                const tr = $("<tr>").append([
                    $("<td>")
                    .addClass("id")
                    .html(el.id),
                    $("<td>")
                    .addClass("userid")
                    .html(el.userId),
                    $("<td>")
                    .addClass("categoryid")
                    .html(el.categoryId),
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
                            inputsArray[0].value = el.userId;
                            inputsArray[1].value = el.categoryId;
                            inputsArray[2].value = el.title;
                            // $("textarea").value = el.body;
                            inputsArray[3].value = el.body;

                            let saveBtn = $("<button>")
                                .html("Save")
                                .addClass("btn btn-success")
                                .on("click", () => {
                                    el.title = inputsArray[2];
                                    el.body = inputsArray[3];
                                    // axios.put(URL + el.id);
                                    $.ajax({
                                        method: "PUT",
                                        url: URL + el.id,
                                        data: JSON({
                                            userId: el + userid,
                                            categoryId: el + categoryid,
                                            title: el + title,
                                            body: el + body
                                        }),
                                        contentType: "application/json",
                                        success: function (result) {
                                            console.log("success?");
                                        }
                                    });
                                });
                            console.log(el)
                            // });

                            $(".form").append(saveBtn)
                            // move data to form
                            // let row_el = $(this).closest("tr");
                            // var id = row_el.find(".id").text();
                            // var newUser = row_el.find(".userid").val();
                            // var newCategory = row_el.find(".categoryid").val();
                            // var newTitle = row_el.find(".title").val();
                            // var newBody = row_el.find(".body").val();
                            // console.log(newTitle);
                            // console.log(newBody);
                            // console.log(newUser);
                            // console.log(newCategory);
                            // console.log(id);
                            // console.log(newBody);
                            // // append saveBtn to the form

                            // let inputsArray = $(".form input,.form textarea");
                            // inputsArray[0].value = el.id;
                            // const saveBtn = $(
                            //     '<button class="btn btn-success">Save</button>'
                            // ).on("click", () => {
                            //     $.ajax({
                            //         method: "PUT",
                            //         url: URL + el.id,
                            //         data: JSON.stringify({
                            //             userId: newUser,
                            //             categoryId: newCategory,
                            //             title: newTitle,
                            //             body: newBody
                            //         }),
                            //         contentType: "application/json",
                            //         success: function (result) {
                            //             console.log("success?");
                            //         }
                            //     });
                            // });
                            // $(".form").append(saveBtn)
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
                userId: $("#userid").val(),
                categoryId: $("#categoryid").val(),
                title: $("#title").val(),
                body: $("#body").val()
            }),
            //  processData: false,
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        });

        e.preventDefault();
    }

    $(".form").submit(pForm);
})();

$("#sub-button").on("click", () => {
    console.log("djkd");
});