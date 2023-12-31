let library = [];

function Manga(title, author, chapters, read) {
    this.title = title,
    this.author = author,
    this.chapters = chapters,
    this.read = read
}

function display() {
    let libraryManga = document.querySelector('#library');
    libraryManga.innerHTML = "";
    for(let i =0; i<library.length; i++) {
        let manga = library[i];
        let mangaElement = document.createElement("div");       //using backticks so we can write html here
        mangaElement.innerHTML = `                              
          <div class = "card">
            <div class="header">
                <h1>${manga.title}</h1>
                <h2>${manga.author}</h2>
            </div>
             <div class="body">
                <p>${manga.chapters}</p>
                <p class ="readStatus">${manga.read ? "READ" : "NOT READ" }</p>
                <button id = "delete" onclick = "deleteManga(${i})"> x </button>
                <button id = "read" onclick = "toggleRead(${i})">read?</button>
             </div> 
         </div>  
            `;

        libraryManga.appendChild(mangaElement);
    }
}

function addToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let chapters = document.querySelector('#chapters').value;
    let read = document.querySelector('#read').checked;
    let newManga = new Manga(title, author, chapters, read);
    library.push(newManga);
    display();
}

function deleteManga(index) {
    library.splice(index, 1);           //will only remove the one object, at the index
    display();                          //need to display again
}


Manga.prototype.toggleRead = function () {          //using prototype so it works with every manga iteration
    this.read = !this.read;
}

function toggleRead(index) {                    //this function calls the prototype
    library[index].toggleRead();
    display()
}

let newMangaButton = document.querySelector("#newButton");
    newMangaButton.addEventListener("click", function() {
        let form = document.querySelector('#form');
        form.style.display = 'block'
    });


document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();
    addToLibrary();
})

// const bleach =  new Manga('Bleach', 'Kubo', 698, 'read');

// const onePiece = new Manga('One Piece', 'Oda', 1094, 'not read');

// const jujutsuKaisen = new Manga('Jujutsu Kaisen', 'Akutami', 242, 'not read');

// const soulEater = new Manga('Soul Eater', 'Ohkubo', 113, 'not read');
