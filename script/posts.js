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
                    $("<td>").html(el.id),
                    $("<td>").html(el.userId),
                    $("<td>").html(el.categoryId),
                    $("<td>").html(el.title),
                    $("<td>").html(el.body),
                    $("<td>").html(
                        $('<button id="update-button" class="btn btn-warning">')
                        .html("Edit")
                        .on("click", () => {
                            //update 
                            $.put({
                                url: URL,
                                data: JSON.stringify({}),
                                contentType: 'application/json',
                                success: function (result) {
                                    alert("success?");
                                }
                            });
                        })
                    ),
                    $("<td>").html(
                        $('<button id="delete-button" class="btn btn-danger">')
                        .html("Delete")
                        .on("click", () => {
                            //delete
                            $.delete({
                                url: URL,
                                contentType: 'application/json',
                                success: function (data) {
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
            contentType: 'application/json',
            data: JSON.stringify({
                "userId": $('#userid').val(),
                "categoryId": $('#categoryid').val(),
                "title": $('#title').val(),
                "body": $('#body').val()
            }),
            //  processData: false,
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        });

        e.preventDefault();
    }

    $('.form').submit(pForm);



    // // DELETE
    // $('table').on('click', '#delete-button', function () {
    //     var rowEl = $(this).closest('tr');
    //     var id = rowEl.find('.id').text();
    //     console.log(rowEl.html);
    //     $.delete({
    //         url: URL + id,
    //         contentType: 'application/json',
    //         success: function (data) {
    //             console.log(data[0]);
    //         }
    //     });
    // });
})();