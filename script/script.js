// (function () {
//   //  const url = 'https://jsonplaceholder.typicode.com/posts';
// $.ajax({
//     url: url,
//     method: 'GET',
//     success: (result, req) => {
//         const tbody = $('table tbody');

//         result.forEach((el, i) => {
//             const tr = $('<tr>').append([
//                 $('<td>').html(el.id),
//                 $('<td>').html(el.userId),
//                 $('<td>').html(el.title),
//                 $('<td>').html(el.body)
//             ]);

//             tbody.append(tr);
//         });
//     }
// });

// // fetch(url)
//     .then(res => res.json())
//     .then(result => {
//         const tbody = $('table tbody');

//         result.forEach((el, i) => {
//             const tr = $('<tr>').append([
//                 $('<td>').html(el.id),
//                 $('<td>').html(el.userId),
//                 $('<td>').html(el.title),
//                 $('<td>').html(el.body)
//             ]);

//             tbody.append(tr);
//         });
//     })

// $('#createBtn').on('click', () => {
//     const postXhr = new XMLHttpRequest();
//     postXhr.addEventListener('load', () => {
//         console.log(postXhr.responseText);
//     })

//     postXhr.open('POST', url);
//     postXhr.send({
//         userId: $('#userId').val(),
//         title: $('#title').val(),
//         body: $('#body').val()
//     });
// });
// }())



// $(document).ready(function () {

//     // app html
//     app_html = "";

//     app_html += "<div class='container'>";

//     app_html += "<div class='page-header'>";
//     app_html += "<h1 id='page-title'>Read Products</h1>";
//     app_html += "</div>";

//     // this is where the contents will be shown.
//     app_html += "<div id='page-content'></div>";

//     app_html += "</div>";

//     // inject to 'app' in index.html
//     $("#app").html(app_html);

// });

// // change page title
// function changePageTitle(page_title) {

//     // change page title
//     $('#page-title').text(page_title);

//     // change title tag
//     document.title = page_title;
// }

// // function to make form values to json format
// $.fn.serializeObject = function () {
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function () {
//         if (o[this.name] !== undefined) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };



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