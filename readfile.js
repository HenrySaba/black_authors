const fs = require('fs'); 
const csv = require('csv-parser');

const inputFilePath = "./books.csv"
books = []

fs.createReadStream(inputFilePath)
.pipe(csv())
.on('data', function(data){
    try {
    	data.description = data.description.replace("\"", "'\"'")
        books.push(data);
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    console.log(books);
});