var books = ["Queenie by Candice Carty-Williams",
"Between the World and Meby Ta-Nehisi Coates",
"We Should All Be Feminists/i> by Chimamanda Ngozi Adiche",
"How We Fight for Our Lives by Saeed Jones",
"Black Leopard, Red Wolf by Marlon James",
"Well-Read Black Girl by Glory Edim",
"Salvage the Bones by Jesmyn Ward",
"Freshwater by Akwaeke Emezi",
"Such a Fun Age by Kiley Reid"
]

function newBook() {
	var randomBook = Math.floor(Math.random() * books.length);
	document.getElementById("bookDisplay").innerHTML = books[randomBook];
}