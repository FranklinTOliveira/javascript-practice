// JavaScript source code

// api url
fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
		.then(cats => {
			const randomNumberInRange = Math.random() * cats.length;
			const randomIndex = Math.floor(randomNumberInRange);
			const randomCat = cats[randomIndex];

			console.log(randomCat.text);
		});
