// Check of specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Enter on input to add new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var item = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + item + "</li>");
		$(this).val("");
	}
});

// toggle input
$("#add").click(function(){
	$("input[type='text']").fadeToggle();
})