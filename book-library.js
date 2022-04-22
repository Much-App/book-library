
const library = [];


function addBookToLibrary (){
    const newBook = Array.from(document.querySelectorAll('#addBookForm input')).reduce((acc,input)=> ({...acc,[input.id]: input.value}),{});
    library.push(newBook);
    formPopup();
}

function book (title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages ;
    this.readStatus = readStatus;
    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}


/* Toggle add book form */
const addBookForm = document.querySelector('#addBookContainer');
const addBookBtn = document.querySelector('#addBookBtn');

addBookBtn.addEventListener('click',formPopup);

function formPopup (){
    addBookForm.classList.toggle('active');
    document.querySelector('#addBookForm').reset();
}




