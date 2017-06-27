$(document).ready(function(e){

    // On refresh method
    // Update the images and the next/prev buttons
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
        else if(sessionStorage.page>1 && sessionStorage.page<6){
          var prev = '<button id = "prev" onclick = "prev()" type ="button" class="w3-button w3-black w3-padding-large w3-large w3-margin-top"></button';
              var $prev = $(prev);
              $('#footer').prepend($prev);
              document.getElementById("prev").innerHTML = "Prev";
        }
				loadImages();
			}
			else{
				sessionStorage.page = 1;
				loadImages();
			}
		}
    // Method for when next button is clicked
    // increment sessionStorage.page which is the page number
    // also if wer're going to last page then remove the next button
		window.next = function(){
        if (sessionStorage.page) {
        	
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
             for(var j = 5; j< 9; j++){
              document.getElementById("img"+(j+1)).src = "";
              document.getElementById("title"+(j+1)).innerHTML = "";
            }
       		}
          
        }
        else{
          sessionStorage.page = 1;
          
        }
        loadImages();
	}
// Method for when prev button is clicked
    // decrement sessionStorage.page which is the page number
    // also if wer're going to first page then remove the prev button
	window.prev = function(){
        if (sessionStorage.page) {
        	
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
        loadImages();
	}
// funciton for making the get request to the server
// gets the images and titles and then upadates the page
  loadImages = function(){
    if(sessionStorage.page == 6){
       $.get('https://pure-retreat-11337.herokuapp.com/page6', function(data){
            var list = JSON.parse(data);
            
            
            for(var i = 0; i < 5; i++){
              
              document.getElementById("img"+(i+1)).src = list[i].image_link;
              document.getElementById("title"+(i+1)).innerHTML = list[i].book_name;
            }
            for(var j = 5; j< 9; j++){
              document.getElementById("img"+(j+1)).src = "";
              document.getElementById("title"+(j+1)).innerHTML = "";
            }
          });
    }
    else if(sessionStorage.page >=1 && sessionStorage.page < 6){
          $.get('https://pure-retreat-11337.herokuapp.com/page'+sessionStorage.page, function(data){
            var list = JSON.parse(data);
            
            
            for(var i = 0; i < 9; i++){
              
              document.getElementById("img"+(i+1)).src = list[i].image_link;
              document.getElementById("title"+(i+1)).innerHTML = list[i].book_name;
            }
          });
        }
        $(this).scrollTop(0);
  }

});