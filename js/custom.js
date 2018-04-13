//cross out on click
$("ul").on("click", "li", function(){ 
	$(this).toggleClass("crossed-out");
});

//show trash on mousover li
$("ul").on("mouseenter", "li", function() {
   $(this).children("span").addClass( "show-x");
});

$("ul").on("mouseleave", "li", function() {
   $(this).children("span").removeClass("show-x");
});


//x delete todo
$("ul").on("click", "span", function(event){ 
	$(this).parent().slideUp(400, function() {
		$(this).remove();
	});
	event.stopPropagation();
});


//adding new todos
$("input[type='text'").keypress(function(event) {
	if (event.which === 13) {
		//record input text
		var todoText = $(this).val();
		//creates new li with text
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
		//clears input
		$(this).val("");
	}
});

//getting and setting the date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var finishedDate = ((''+month).length<2 ? '0' : '') + month + '/' +
((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear();

$(".date").text(finishedDate);

