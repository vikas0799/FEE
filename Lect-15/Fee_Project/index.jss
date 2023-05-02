const form = document.getElementById('survey-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const feedback = document.getElementById('feedback').value;

	// Do something with the form data, e.g. send it to a server or store it locally

	alert(`Thank you for your submission, ${name}!`);
});