class book {
    constructor (title,author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages ;
        this.readStatus = false;
        this.id = title.replace(/\s+/g, '-').toLowerCase();        
    }
}


const library = [ {title:'The Hobbit',
        author: 'Tolkien',
        pages: '4',
        id: 'the-hobbit',
        readStatus: false,
},
{title:'Harry putter',
        author: 'Rolling',
        pages: '1235',
        id: 'harry-putter',
        readStatus: false,
}];

const libraryContainer = document.querySelector('#library');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

function addBookToLibrary (){
    if (title.value === "" || author.value === "" || pages.value === ""){
        return alert('Error: Please make sure to fill in all the information about the book you would like to add.')
    };
    const newBook = new book(title.value, author.value, pages.value);
    library.push(newBook);
    toggleForm();
    createCards();
}
function createCards (){
    while (libraryContainer.childElementCount > 0) {
        libraryContainer.removeChild(libraryContainer.lastChild)
    }
    library.forEach((book)=>{
        makeCard(book)
    }
    )
       
} 
function makeCard (book){
    const card = document.createElement('div');
    card.setAttribute('id',book.id);
    card.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = `${book.title}`;
    title.setAttribute('data-book',book.id);
    const author = document.createElement('h2');
    author.textContent = `By ${book.author}`;
    const pages = document.createElement('h3');
    pages.textContent = `${book.pages} pages`; 
    const buttons = document.createElement('div');
    const readBtn = document.createElement('button');
    readBtn.textContent = `Not read`;
    readBtn.setAttribute('id','readBtn');
    readBtn.setAttribute('data-book',book.id);
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id','deleteBtn');
    deleteBtn.textContent = 'Remove';
    deleteBtn.setAttribute('data-book',book.id);
    buttons.appendChild(readBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages); 
    card.appendChild(buttons);

    readBtn.addEventListener('click',toggleReadStatus);
    deleteBtn.addEventListener('click',removeBook);

    libraryContainer.appendChild(card);
}
function toggleReadStatus(){
    let index = library.findIndex(obj=> {return obj.id === this.dataset.book});
    if (library[index].readStatus === false){
        library[index].readStatus = true;
        this.textContent = "Read";
        if (this.classList !== 'read') {
            this.classList.toggle('read') }
    } else {
        library[index].readStatus = false;
        this.textContent = "Not read";
        if (this.classList == 'read') {
            this.classList.toggle('read') }
    }
}

function removeBook (){
    if (confirm (`Are you sure you want to delete ${this.title}?`) === true) {
    let index = library.findIndex(obj=> {return obj.id === this.dataset.book});
    library.splice(index,1);
    createCards();}
}

const addBookForm = document.querySelector('#addBookContainer');
const toggleFormBtn = document.querySelector('#toggleFormBtn');
const addBookBtn = document.querySelector('#addBookBtn');


toggleFormBtn.addEventListener('click',toggleForm);
addBookBtn.addEventListener('click',addBookToLibrary)

function toggleForm (){
    addBookForm.classList.toggle('active');
    document.querySelector('#addBookForm').reset();
}




createCards();
