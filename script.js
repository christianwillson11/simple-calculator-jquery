$(document).ready(function() {
	var result = 0, operand_1 = 0, operand_2 = 0;
	console.log("init value: " + result);
	var operand_check = 0, func_check = 0, func_error_check = true;
	var prev_func = "";

	$(".num").on('mousedown', function() {
			$(this).css({"backgroundColor": "#dbdbdb"});
	}).on('mouseup mouseleave', function() {
			$(this).css({"backgroundColor": "white"});
	});

	$('.num').click(function() {
		console.log($(this).text());
		$('.func').css({"backgroundColor": "white"});

		if ($("#result").text() == "0") {
			$("#result").text($(this).text());
			operand_check = 0;
		} else if (operand_check == 1) {
			$("#result").text($(this).text());
			operand_check = 0;
		} else if ($("#result").text() != "0") {
			$("#result").text($("#result").text() + $(this).text());
		}

		func_error_check = false;

	});

	//negative value
	$('.negative').click(function() {
		//prepend negative value if not 0
		if ($('#result').text() != "0") {
			var tmp = $("#result").text();
			$("#result").text("-"+tmp);
		}
	});

	$('.func').click(function() {

		if (func_check == 0 && func_error_check == false) {
			operand_1 = parseFloat($("#result").text());
			console.log($(this).text());
			$(this).css({"backgroundColor": "hsla(120, 60%, 70%, 0.3)"});

			if ($(this).text() == "+") {
				prev_func = "+";
			} else if ($(this).text() == "-") {
				prev_func = "-";
			} else if ($(this).text() == "X") {
				prev_func = "X";
			} else if ($(this).text() == "/") {
				prev_func = "/";
			}

			operand_check = 1;
			func_error_check = true;
			func_check = 1;
			equal_pressed = false;
			console.log("func_check 0");

		} else if (func_check == 1 && func_error_check == false) {

			operand_2 = parseFloat($("#result").text());

			if ($(this).text() == "+") {

				if (prev_func == "+") {
					result = operand_1 + operand_2;
					$("#result").html(result);
				} else if (prev_func == "X") {
					result = operand_1 * operand_2;
					$("#result").html(result);
				} else if (prev_func == "/") {
					result = operand_1 / operand_2;
					$("#result").html(result);
				} else if (prev_func == "-") {
					result = operand_1 - operand_2;
					$("#result").html(result);
				}
				prev_func = "+";

			} else if ($(this).text() == "-") {

				if (prev_func == "+") {
					result = operand_1 + operand_2;
					$("#result").html(result);
				} else if (prev_func == "X") {
					result = operand_1 * operand_2;
					$("#result").html(result);
				} else if (prev_func == "/") {
					result = operand_1 / operand_2;
					$("#result").html(result);
				} else if (prev_func == "-") {
					result = operand_1 - operand_2;
					$("#result").html(result);
				}
				prev_func = "-";

			} else if ($(this).text() == "X") {

				if (prev_func == "+") {
					result = operand_1 + operand_2;
					$("#result").html(result);
				} else if (prev_func == "X") {
					result = operand_1 * operand_2;
					$("#result").html(result);
				} else if (prev_func == "/") {
					result = operand_1 / operand_2;
					$("#result").html(result);
				} else if (prev_func == "-") {
					result = operand_1 - operand_2;
					$("#result").html(result);
				}
				prev_func = "X";

			} else if ($(this).text() == "/") {

				if (prev_func == "+") {
					result = operand_1 + operand_2;
					$("#result").html(result);
				} else if (prev_func == "X") {
					result = operand_1 * operand_2;
					$("#result").html(result);
				} else if (prev_func == "/") {
					result = operand_1 / operand_2;
					$("#result").html(result);
				} else if (prev_func == "-") {
					result = operand_1 - operand_2;
					$("#result").html(result);
				}
				prev_func = "/";
			}

			func_error_check = true;
			operand_1 = parseFloat($("#result").text());

		}

		operand_check = 1;
		equal_pressed = false;

		console.log("result = " + result);

	});

	$(".equalto").click(function() {

		operand_2 = parseFloat($("#result").text());
		if (prev_func == "+") {
			result = operand_1 + operand_2;
			$("#result").html(result);
		} else if (prev_func == "X") {
			result = operand_1 * operand_2;
			$("#result").html(result);
		} else if (prev_func == "/") {
			result = operand_1 / operand_2;
			$("#result").html(result);
		} else if (prev_func == "-") {
			result = operand_1 - operand_2;
			$("#result").html(result);
		}
		$("#result").html(result);
		//operand_1 = parseFloat($("#result").text());
		operand_2 = 0;
		func_error_check = false;
		func_check = 0;
	});

	$(".percent").click(function() {
		if ($("#result").text() != "0" && operand_check != 1) {
			result = parseFloat($("#result").text()) / 100;
			$("#result").html(result);
		} else if (operand_check == 1) {
			$("#result").html("error");
		}
	});

	$(".del").click(function() {
		if($("#result").text() != 0 && operand_check != 1) {
			if ($("#result").text().length == 1) {
				$("#result").text("0");
			} else {
				var tmp = $("#result").text().slice(0, -1);
				$("#result").text(tmp);
			}
		} else if (operand_check == 1) {
			$("#result").html("error");
		}
	});

	$(".clear").click(function() {
		result = 0;
		$("#result").html("0");
		check = 0
		operand_1 = 0;
		operand_2 = 0;
		func_error_check = true;
		func_check = 0;
		equal_pressed = false;
		location.reload(true);
	});


});
