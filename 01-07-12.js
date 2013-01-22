$(document).ready(function()
{
	$('li.baja').hover(function()
		{
			$('li', this).slideDown("slow");
		},

		function()
		{
			$('li', this).slideUp("slow");
		});


	$("#baja2").hover(
		function()
		{
			$("li", this).slideDown("slow");
		},

		function()
		{
			$('li', this).slideUp("slow");
		});
});

//–––––––––––––––––––––––––––––––––––––––––––––––

$(document).ready(function(){
  makeScrollable("div.sc_menu_wrapper", "div.sc_menu");
});

function makeScrollable(wrapper, scrollable){

	var wrapper = $(wrapper), scrollable = $(scrollable);

	scrollable.hide();
	var loading = $("<div class='loading'>Loading...</div>").appendTo(wrapper);

	var interval = setInterval(function(){

		var images = scrollable.find("img");

		var completed = 0;

		images.each(function(){
			if(this.complete)
				completed++;
		});

		if(completed == images.length){

			clearInterval(interval);

			setTimeout(function(){
				loading.hide();

				wrapper.css({overflow: "hidden"});
				scrollable.slideDown("slow");
			}, 1000);
		}
	}, 100);
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

$(document).ready(function(){

	$("div#wrapDesliza").hover(function(){

		$("div#desliza").animate({width: "200px"});
	},

	function(){

		$("div#desliza").animate({width: "0px"});
	});
});

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
$(document).ready(function(){

	$("a#elem").hover(function(){
		$("a#elem").animate({height: "150px"});
	},

	function(){
		$("a#elem").animate({height: "40px"});
	});
});

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
function struct(){

	var lastParrafo = (document.getElementById('structure').getElementsByTagName('p'))[1];
	alert(lastParrafo.childNodes.length);
}


function agranda(){

	document.getElementById('mouse').style.height = "100px";
}

function mengua(){

	document.getElementById('mouse').style.height = "50px";
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
$(document).ready(function(){

	var hole = $('div.persiana');
	var visible = $('div#visible');

	visible.hover(
		function(){

			visible.css({top:"0px", height:"100%"});
			hole.fadeOut("slow");
		},
		function(){

			visible.css({top:"40px", height:"120px"});
			hole.fadeIn("slow");
		});
});
