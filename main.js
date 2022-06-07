function generate_random_integer(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

let lowercase_characters = "abcdefghijklmnopqrstuvwxyz";
let uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number_characters = "0123456789"
let special_characters = "!@#$%^&*()"

let password_length = 32;
let omitted_characters = "";
let available_characters = "";

function on_slider_changed() {
	password_length = document.getElementById("password_size").value
	document.getElementById("password_size_text").innerHTML = "Password Length: ".concat(password_length);
}

function submit_and_return_password() {
	let generated_password = "";
	available_characters = "";
	let none_checked = true;
	if (document.getElementById("lower").checked) {
		available_characters = available_characters.concat(lowercase_characters);
		none_checked = false;
	}
	if (document.getElementById("upper").checked) {
		available_characters = available_characters.concat(uppercase_characters);
		none_checked = false;
	}
	if (document.getElementById("number").checked) {
		available_characters = available_characters.concat(number_characters);
		none_checked = false;
	}
	if (document.getElementById("special").checked) {
		available_characters = available_characters.concat(special_characters);
		none_checked = false;
	}
	if (!none_checked) {
		for (let _=0; _<password_length; _++) {
			let random_index = generate_random_integer(0, available_characters.length);
			while (available_characters.charAt(random_index) == generated_password.charAt(generated_password.length-1)) {
				random_index = generate_random_integer(0, available_characters.length);
			}
			generated_password = generated_password.concat(available_characters.charAt(random_index));
		}
		document.getElementById("finished").innerHTML = generated_password;

	}else {
		document.getElementById("finished").innerHTML = "Please Set Some Parameters";
	}
}