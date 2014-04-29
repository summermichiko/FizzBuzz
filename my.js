function countingTime(number) {
	for (x=1; x<=number; x++) {
	    if (x%15===0) {
	        $('.addHere').append("FizzBuzz" + ", ");
	    } else if (x%3===0) {
	        $('.addHere').append("Fizz" + ", ");
	    } else if (x%5===0) {
	        $('.addHere').append("Buzz" + ", ");
	    } else {
	        $('.addHere').append(x + ", ");
	    }
	}
};

$(document).ready(function() {
	$("#numBox").focus();
	$("#submitButton").on("click", function() {
		$(".addHere").text(" ");
		$("#integer").hide();
		$("#between").hide();
		var number = $("#numBox").val();
		if (number % 1 === 0) {
			countingTime(number);
		} else {
			$("#integer").show();
		};
		if (number > 300) {
			$("#between").show();
			$(".addHere").text(" ");
		}
	});
});
	
