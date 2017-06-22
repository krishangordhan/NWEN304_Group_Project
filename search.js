$(document).ready(function(e){
var searchTerm = parseSearch();

function parseSearch(){
        var url = document.URL;
        var queryStart = url.indexOf("="),
            queryEnd = url.length+1
            query = url.slice(queryStart, queryEnd - 1);
        return query;
    }

});