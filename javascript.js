var books = [
  {
    title: 'title_test',
    author: 'author_test',
    description: 'description_test',
    purchase_url: 'http://amazon.com/',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png'
  },
  {
    title: 'title_test2',
    author: 'author_test2',
    description: 'description_test2',
    purchase_url: 'http://amazon.com/',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/2560px-Image_created_with_a_mobile_phone.png'
  }
]

let new_book_btn = document.getElementById('new-book-btn');
let book_display = document.getElementById("bookDisplay");
let img_created = false;

new_book_btn.addEventListener("click", (e) => {
	let randBookInd = Math.floor(Math.random() * books.length);
    let newBook = books[randBookInd];
    newBook.innerHTML = newBook.title;
    
    if (!img_created) {
	    let newImg = document.createElement("img");
	    newImg.setAttribute("src", newBook.image_url);
	    newImg.setAttribute("height", "200px");
	    book_display.appendChild(newImg);
	    img_created = true;
    }
});