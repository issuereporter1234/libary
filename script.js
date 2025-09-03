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
const wizardOfOz = new Book('The Wizard of Oz', 'L. Frank Baum', 240, true)


function addBookToLibary(addBook, index){

    myLibary[index] = addBook;
  
}
function builtInBooks(){
    addBookToLibary(harryPoter, 0);
    addBookToLibary(dune, 1);
    addBookToLibary(gatsby, 2);
    addBookToLibary(orwell, 3);
    addBookToLibary(mobyDick, 4);
    addBookToLibary(wizardOfOz, 5)
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
        const haveReadEl = document.createElement('div');
        const changeBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        const emptyTd = document.createElement('td')
        const emptyTd2 = document.createElement('td')

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
        

        emptyTd2.append(haveReadEl)
        tableTr.append(emptyTd2)
        emptyTd2.classList.add('have-read')

        changeBtn.innerText = 'Change'
        emptyTd2.append(changeBtn)
        changeBtn.classList.add('change')

        changeBtn.onclick = () => changeStatus(myLibary[i].id)

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
    let haveRead = document.querySelector('input[name="haveRead"]:checked')?.value === "true"
    if(haveRead === 'true'){
        haveRead = true
    }

    else{
        false
    }

    addMoreBooks(name, autor, pages, haveRead)
    document.getElementById('book-form').reset();
});

function changeStatus(id){
    for(let i = 0; i < myLibary.length; i++){
        if (myLibary[i].id === id){
            if(myLibary[i].haveRead){
                myLibary[i].haveRead = false
            }
            else if(!myLibary[i].haveRead){
                myLibary[i].haveRead = true
            }
        }
        }
        displayAllBooks()
}
const form = document.getElementById('add-book-form')
function hideWindow(){
    form.style.visibility = 'hidden'
}

function showWindow(){
    form.style.visibility = 'visible'
}

const closeWind = document.getElementById('close');
closeWind.onclick = () => hideWindow()


const openWind = document.getElementById('new-book')

openWind.onclick = () => showWindow()