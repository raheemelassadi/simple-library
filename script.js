const myLibrary = [];
const list = document.querySelector('ul');
const addBtn = document.querySelector('.add-book');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit');
const container = document.getElementsByClassName('container');
const title = document.getElementById('title');
const author = document.getElementById('author');
const numOfPages = document.getElementById('numOfPages');
const read = document.getElementById('read');
const newBook = makeBook(title, author, numOfPages, read);



// constructor for making book
function makeBook(title, author, numOfPages, read){
    this.title.value = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

//adds book to library
function storeBooks(book){
    myLibrary.push(book)
}

//add book btn event handler
addBtn.addEventListener('click', function(){
    form.style.display = 'inline-block';
    title.value = "";
    author.value = "";
    numOfPages.value = "";
    read.value = "read";
})

//actions for submit btn
submitBtn.addEventListener('click', function(){
    form.style.display = 'none';

    newBook = makeBook(title, author, numOfPages, read);
    let newElem = document.createElement('li');
    newElem.innerHTML = `Title: ${newBook.title} </br> Author: ${newBook.author} </br> Pages: ${newBook.numOfPages} </br> Read: ${newBook.read}`
    list.appendChild(newElem);
})






// dummy books
const bookOne = new makeBook('harry potter');
bookOne.author = "jk rowling";
bookOne.numOfPages = '400';
bookOne.read = 'not read';
const bookTwo = new makeBook('the notebook');
bookTwo.author = "Nicholas Sparks";
bookTwo.numOfPages = '553';
bookTwo.read = 'Read';

storeBooks(bookOne);
storeBooks(bookTwo);

for (const book of myLibrary){
    let elem = document.createElement('li');
    elem.innerHTML = `Title: ${book.title} </br> Author: ${book.author} </br> Pages: ${book.numOfPages} </br> Read: ${book.read}`
    list.appendChild(elem);
}
