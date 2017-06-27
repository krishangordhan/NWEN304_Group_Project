$(document).ready(function(e){

		window.onload = function(){
			if(sessionStorage.page){
				if(sessionStorage.page == 6){
					var n = document.getElementById("Next");
					if(n != null){
						n.remove();
					}
					n = document.getElementById("prev");
					if(n == null){
						var prev = '<button id = "prev" onclick = "prev()" type ="button" class="w3-button w3-black w3-padding-large w3-large w3-margin-top"></button';
           			var $prev = $(prev);
           			$('#footer').prepend($prev);
           			document.getElementById("prev").innerHTML = "Prev";
					}
				}
				else if(sessionStorage.page == 1){
					$.get('https://pure-retreat-11337.herokuapp.com/page1', function(data){
						
					});
				}
			}
			else{
				sessionStorage.page = 1;
			}
		}

		window.next = function(){
        if (sessionStorage.page) {
        	console.log(sessionStorage);
        	if(sessionStorage.page == 1){
           		var prev = '<button id = "prev" onclick = "prev()" type ="button" class="w3-button w3-black w3-padding-large w3-large w3-margin-top"></button';
           		var $prev = $(prev);
           		$('#footer').prepend($prev);
           		document.getElementById("prev").innerHTML = "Prev";
           		sessionStorage.page = Number(sessionStorage.page) + 1;
       		}
       		else if((Number(sessionStorage.page) > 1) && (Number(sessionStorage.page) < 5 )){
       			sessionStorage.page = Number(sessionStorage.page) + 1;
       		}
       		else if(sessionStorage.page == 5){
       			sessionStorage.page = Number(sessionStorage.page) + 1;
       			$('#Next').remove();

       		}

        }
	}

	window.prev = function(){
        if (sessionStorage.page) {
        	console.log(sessionStorage);
        	if(sessionStorage.page == 6){
           		var next = '<button id = "Next" onclick = "next()" type ="button" class="w3-button w3-black w3-padding-large w3-large w3-margin-top"></button';
           		var $next = $(next);
           		$('#prev').after($next);
           		document.getElementById("Next").innerHTML = "Next";
           		sessionStorage.page = Number(sessionStorage.page) - 1;
       		}
       		else if((Number(sessionStorage.page) > 2) && (Number(sessionStorage.page) < 6 )){
       			sessionStorage.page = Number(sessionStorage.page) - 1;
       		}
       		else if(sessionStorage.page == 2){
       			sessionStorage.page = Number(sessionStorage.page) - 1;
       			$('#prev').remove();
       		}

        }
	}

});