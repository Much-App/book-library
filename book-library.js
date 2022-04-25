
const library = [
    {title:'The Hobbit',
        author: 'Tolkien',
        pages: '4',
        id: 'the-hobbit',
}];
const libraryContainer = document.querySelector('#library');

function addBookToLibrary (){
    const newBook = Array.from(document.querySelectorAll('#addBookForm input')).reduce((acc,input)=> ({...acc,[input.id]: input.value}),{});
    newBook.id = newBook.title.replace(/\s+/g, '-').toLowerCase();
    library.push(newBook);
    formPopup();
}
 /* div#**tittleID**.card > h1+h2+h3+button.readStatus+button#deleteBook*/

function book (title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages ;
    this.readStatus = readStatus;
    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}

function makeCard (book){
    const card = document.createElement('div');
    card.setAttribute('id',book.id);
    card.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = `${book.title}`;
    const author = document.createElement('h2');
    author.textContent = `By ${book.author}`;
    const pages = document.createElement('h3');
    pages.textContent = `${book.pages} pages`;
    const readBtn = document.createElement('button');
    readBtn.classList.add('unread');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id','deleteBtn');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readBtn);
    card.appendChild(deleteBtn);

    libraryContainer.appendChild(card);
}


/* Toggle add book form */
const addBookForm = document.querySelector('#addBookContainer');
const toggleFormBtn = document.querySelector('#toggleFormBtn');
const addBookBtn = document.querySelector('#addBookBtn');


toggleFormBtn.addEventListener('click',formPopup);
addBookBtn.addEventListener('click',addBookToLibrary)

function formPopup (){
    addBookForm.classList.toggle('active');
    document.querySelector('#addBookForm').reset();
}




