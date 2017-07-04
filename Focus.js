$(document).ready(function (e) {
    // parseFunction();
    // function parseFunction() {
    //     alert("test");
    //     var url = document.URL;
    //     var queryStart = url.indexOf("=");
    //     var queryEnd = url.length + 1;
    //     var query = url.slice(queryStart, queryEnd - 1);
    //     var queryData = getData(query);

    //     processdata(queryData);
    // }
    // function getData(query) {
    //     var searchurl = "https://boiling-eyrie-15862.herokuapp.com/request?request=" + query;
    //     $.ajax({
    //         method: 'POST',
    //         url: searchurl,
    //         data: JSON.stringify({
    //             queryTerm: query
    //         }),
    //         success: function (data) {
    //             return (data);
    //         },
    //         error: function () {

    //         }
    //     });
    // }
    // function processData(queryData) {
    //     var list = JSON.parse(queryData);
    //     document.write(list);
    // }
});