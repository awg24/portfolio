$(document).ready(function() {
	$('a[href*=\\#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
		  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		   if ($target) {
			 var targetOffset = $target.offset().top;
			 $(this).click(function() {
			   $('html, body').animate({scrollTop: targetOffset}, 400);
			   return false;
			 });
		  }
		}
	});

	$("#email-submit").on("submit", function(event){
		event.preventDefault();

		$.ajax({
			method: "POST",
			url: window.location.origin + "/send/email",
			data: {
				firstName: $("#first_name").val(),
				lastName: $("#last_name").val(),
				email: $("#email").val(),
				message: $("#message").val()
			}
		}).then(function(response){
			$("#status").addClass("blue blue-box");
			$("#status").text("Message Sent");
			setTimeout(function(){
				$("#status").text("");
				$("#status").removeClass("blue blue-box");
			}, 3000);
		}).catch(function(err){
			$("#status").addClass("red red-box");
			$("#status").text("There was an issue processing the email. Try again later.");
			setTimeout(function(){
				$("#status").text("");
				$("#status").removeClass("red red-box");
			}, 3000);
		});
	});
});
