const myLibrary = [];
const list = document.querySelector('ul');
const addBtn = document.querySelector('.add-book');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit');
const container = document.getElementsByClassName('container');
const getAuthor = document.getElementById('author');
const getNumOfPages = document.getElementById('numOfPages');
const getRead = document.getElementById('read');
const getTitle = document.getElementById('title');
let newBook = new book(getTitle.value, getAuthor.value, getNumOfPages.value, getRead.value);



// constructor for making book
function book(title, author, numOfPages, read){
    this.title = title;
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
submitBtn.addEventListener('click', function(newBook){
    storeBooks(newBook);
    form.style.display = 'none';
    newBook.title = getTitle.value;
    newBook.author = getAuthor.value;
    newBook.numOfPages = getNumOfPages.value;
    newBook.read = getRead.value;


    let newElem = document.createElement('li');
    newElem.innerHTML = `Title: ${newBook.title} </br> Author: ${newBook.author} </br> Pages: ${newBook.numOfPages} </br> Read: ${newBook.read}`
    list.appendChild(newElem);
})






// dummy books
const bookOne = new book('harry potter');
bookOne.author = "jk rowling";
bookOne.numOfPages = '400';
bookOne.read = 'not read';
const bookTwo = new book('the notebook');
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


