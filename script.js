const myLibrary = [];
const list = document.querySelector('ul');
const addBtn = document.querySelector('.add-book');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submit');
const container = document.getElementsByClassName('container');
const getAuthor = document.getElementById('author');
const pages = document.getElementById('numOfPages');
const getRead = document.getElementById('read');
const getTitle = document.getElementById('title');




// constructor for making book
function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
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
    pages.value = "";
    read.value = "read";
})

//actions for submit btn
submitBtn.addEventListener('click', function(newBook){
    storeBooks(newBook);
    form.style.display = 'none';
    newBook.title = getTitle.value;
    newBook.author = getAuthor.value;
    newBook.pages = pages.value;
    newBook.read = getRead.value;


    let newElem = document.createElement('li');
    newElem.innerHTML = `Title: ${newBook.title} </br> Author: ${newBook.author} </br> Pages: ${newBook.pages} </br> Read: ${newBook.read}`
    list.appendChild(newElem);
})

form.addEventListener('submit', function(event){
    if (!getAuthor.validity.valid || !pages.validity.valid || !getTitle.validity.valid){
        event.preventDefault()
    }
})