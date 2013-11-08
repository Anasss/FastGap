// FASTGAP - GUSTAVO COSTA - @GustavoCostaW

//effects class
var transitionClass;
//controll transitions
var transitionControl = true;

//events
function transitions(){
    //listener buttons menu .botoes-app class
	$("#page").on('click','.botoes-app',function(){

		transitionControl = true;
		/* effects, for select one effect, create or view effects in transitions.css */
		switch($(this).data("url")) {
			//pg1
			case "page1.html" :
				transitionClass = "transitionApp1";
			break;
			//pg2
			case "page2.html" :
				transitionClass = "transitionApp2";
			break;
			//pg3
			case "page3.html" :
				transitionClass = "transitionApp3";
			break;
			//pg4
			case "page4.html" :
				transitionClass = "transitionApp4";
			break;
			//pg5
			case "page5.html" :
				transitionClass = "transitionApp5";
			break;
			transitionClass = "transitionApp1";
			default:
				
		}
		//start event
		$("#content").addClass(transitionClass);

		// save var in clicked button
		page = $(this).data("url");
		//transition effect for webkit and ms
		$("#content").on("webkitTransitionEnd transitionend MSTransitionEnd",transitionApp);
		
		function transitionApp(){
			if(transitionControl){
								
				//ajax load new page
				PageLoad.init();
				PageLoad.transition = transitionClass;
				PageLoad.load(page);
				
				transitionControl = false;
				window.History.pushState(null, null, page);
			}
		}
	});
	// menu btn click
    $("#page").on('click',"#menu-button",function(){
    	transitionControl = false;
        showMenu();
    });

    // swipe
    Hammer(document).on("swipeleft",function(){
        if($("#menu").hasClass("transitionMenuAppStart")){
        	transitionControl = false;
            showMenu();
        }
    });
    Hammer(document).on("swiperight",function(){
        if(!$("#menu").hasClass("transitionMenuAppStart")){
        	transitionControl = false;
            showMenu();
        }
    });

    //effects in menu
    function showMenu(){
        if(!$("#menu").hasClass("transitionMenuAppStart")){
            $('#content,#header-app').addClass("transitionContentAppStart"); 
            $('#menu').addClass("transitionMenuAppStart");               
        }
        else{
            $("#menu").removeClass("transitionMenuAppStart");
            $('#content,#header-app').removeClass("transitionContentAppStart");
        }
    }
}