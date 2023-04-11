async function getPhrase() {
	try {
		let resp = await fetch(
			'https://geek-jokes.sameerkumar.website/api?format=json'
		);
		let data = await resp.json();
		// Capturar seccion donde se insertará el texto
		let content = document.getElementById('cardContent');
		content.innerHTML = data.joke;
	} catch (error) {
		console.log(error);
	}
}
