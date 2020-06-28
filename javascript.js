var books = [
  {
    title: 'Queenie',
    author: 'Candice Carty-Williams',
    description: 'Bridget Jones’s Diary meets Americanah in this disarmingly honest, boldly political, and truly inclusive novel that will speak to anyone who has gone looking for love and found something very different in its place.\n' +
      '\n' +
      'Queenie Jenkins is a 25-year-old Jamaican British woman living in London, straddling two cultures and slotting neatly into neither. She works at a national newspaper, where she’s constantly forced to compare herself to her white middle class peers. After a messy break up from her long-term white boyfriend, Queenie seeks comfort in all the wrong places…including several hazardous men who do a good job of occupying brain space and a bad job of affirming self-worth.\n' +
      '\n' +
      'As Queenie careens from one questionable decision to another, she finds herself wondering, “What are you doing? Why are you doing it? Who do you want to be?”—all of the questions today’s woman must face in a world trying to answer them for her.\n' +
      '\n' +
      'With “fresh and honest” (Jojo Moyes) prose, Queenie is a remarkably relatable exploration of what it means to be a modern woman searching for meaning in today’s world.',
    purchase_url: 'https://www.amazon.com/Queenie-Candice-Carty-Williams/dp/1501196022/ref=sr_1_1?dchild=1&gclid=CjwKCAjw_-D3BRBIEiwAjVMy7GP9EKHtRMOXAoFzDWRQs_lP-Woi8Hf3R2-8X1w3h4GJyj2xImxs7xoCn6QQAvD_BwE&hvadid=410093345423&hvdev=c&hvlocphy=9027257&hvnetw=g&hvqmt=b&hvrand=6878993641724397513&hvtargid=kwd-400107386394&hydadcr=9992_11546540&keywords=queenie+novel&qid=1593386407&sr=8-1&tag=googhydr-20',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580245350-51KGeS2os3L.jpg?crop=1.00xw:0.968xh;0,0.0140xh&resize=768:*'
  },
  {
    title: 'Between the World and Me',
    author: 'Ta-Nehisi Coates',
    description: '“This is your country, this is your world, this is your body, and you must find some way to live within the all of it.”\n' +
      ' \n' +
      'In a profound work that pivots from the biggest questions about American history and ideals to the most intimate concerns of a father for his son, Ta-Nehisi Coates offers a powerful new framework for understanding our nation’s history and current crisis. Americans have built an empire on the idea of “race,” a falsehood that damages us all but falls most heavily on the bodies of black women and men—bodies exploited through slavery and segregation, and, today, threatened, locked up, and murdered out of all proportion. What is it like to inhabit a black body and find a way to live within it? And how can we all honestly reckon with this fraught history and free ourselves from its burden?\n' +
      ' \n' +
      'Between the World and Me is Ta-Nehisi Coates’s attempt to answer these questions in a letter to his adolescent son. Coates shares with his son—and readers—the story of his awakening to the truth about his place in the world through a series of revelatory experiences, from Howard University to Civil War battlefields, from the South Side of Chicago to Paris, from his childhood home to the living rooms of mothers whose children’s lives were taken as American plunder. Beautifully woven from personal narrative, reimagined history, and fresh, emotionally charged reportage, Between the World and Me clearly illuminates the past, bracingly confronts our present, and offers a transcendent vision for a way forward.',
    purchase_url: 'https://www.amazon.com/dp/0812993543/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1',
    image_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549482990-51ndtpPOGTL.jpg?crop=1xw:1xh;center,top&resize=768:*'
  }
]


let new_book_btn = document.getElementById('new-book-btn');
let book_display = document.getElementById("bookDisplay");
let img_created = false;
let newImg = document.createElement("img");

new_book_btn.addEventListener("click", (e) => {
	let randBookInd = Math.floor(Math.random() * books.length);
    let newBook = books[randBookInd];
    newBook.innerHTML = newBook.title;
    
    newImg.setAttribute("src", newBook.image_url);
    newImg.setAttribute("height", "30%");
    newImg.setAttribute("width", "30%");
    newImg.setAttribute("display", "block");
    newImg.setAttribute("margin", "0 auto");
    // newImg.setAttribute("left", "50%");
    // newImg.setAttribute("right", "50%");
    if (!img_created) {
    	book_display.appendChild(newImg);
    	img_created = true;
    }
});