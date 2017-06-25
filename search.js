$(document).ready(function(e){
var searchTerm = parseSearch();

var searchResult = getSearch();



function getSearch(){
    var searchurl = "https://boiling-eyrie-15862.herokuapp.com/search?search=" + searchTerm;
    $.ajax({
        method: 'POST',
        url: searchurl,
        data: JSON.stringify({
           search: searchTerm
        }),
        success: function(data){
            return (data);
        },
        error: function(){

        }
    });
}

function parseSearch(){
        var url = document.URL;
        var queryStart = url.indexOf("="),
            queryEnd = url.length+1
            query = url.slice(queryStart, queryEnd - 1);
        return query;
    }



});