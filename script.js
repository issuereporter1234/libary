const myLibary = []
function Book(name, author, pages, haveRead){
this.name = name;
this.autor = author;
this.pages = pages;
this.haveRead = haveRead
this.id = crypto.randomUUID()
}

const harryPoter = new Book('Harry Poter', 'J. K. Rowling', 4100, false)
const lotr = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1178, true)
const dune = new Book('Dune', 'Frank Herbert', 896, false)
const gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true)
const orwell = new Book('1984', 'George Orwell', 328, false)
const mobyDick = new Book('Moby Dick', 'Herman Melville', 635, false)


function addBookToLibary(addBook, index){

    myLibary[index] = addBook;
  
}
function builtInBooks(){
    addBookToLibary(harryPoter, 0);
    addBookToLibary(dune, 1);
    addBookToLibary(gatsby, 2);
    addBookToLibary(orwell, 3);
    addBookToLibary(mobyDick, 4);
}
builtInBooks();

const table = document.querySelector('table')
const tbody = document.querySelector('tbody')

function deleteBook(deleteId){
    for(let i = 0; i < myLibary.length; i++){
        if (myLibary[i].id === deleteId){
            myLibary.splice(i, 1)
        }
        }
        displayAllBooks()
}



function displayAllBooks(){
    tbody.innerHTML = ''
    for(let i = 0 ;i < myLibary.length ; i++ ){

        
        const tableTr = document.createElement('tr');
            
        const tableBookName = document.createElement('td');
        const tableAuthor = document.createElement('td');
        const numberOfPages = document.createElement('td');
        const haveReadEl = document.createElement('td');
        const deleteBtn = document.createElement('button')
        const emptyTd = document.createElement('td')

        tableTr.setAttribute('id', myLibary[i].id)
        tbody.append(tableTr)


        tableBookName.innerText = myLibary[i].name
        tableTr.append(tableBookName);

        tableAuthor.innerText = myLibary[i].autor
        tableTr.append(tableAuthor)

        numberOfPages.innerText = myLibary[i].pages
        tableTr.append(numberOfPages)

        if (myLibary[i].haveRead){
            haveReadEl.innerText = 'Read'
        }
        else if(!myLibary[i].haveRead){
            haveReadEl.innerText = 'Not read'
        }
        else {
            haveReadEl.innerText = 'Error'
        }
        tableTr.append(haveReadEl)

        deleteBtn.innerText = 'Delete the book'
        tableTr.append(emptyTd)
        emptyTd.append(deleteBtn)

        deleteBtn.onclick = () => deleteBook(myLibary[i].id)

        

    }
}
displayAllBooks()
function newLibaryIndex(){
   return  myLibary.length
}
function addMoreBooks(name, author, pages, haveRead){
   let newBook = new Book(name, author, pages, haveRead)
   addBookToLibary(newBook, newLibaryIndex())
   displayAllBooks()
}

document.querySelector('#add-book-form form').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const autor = document.getElementById('autor').value;
    const pages = Number(document.getElementById('pages').value);
    const haveRead = document.querySelector('input[name="haveRead"]:checked')?.value === "true"

    addMoreBooks(name, autor, pages, haveRead)
});


 