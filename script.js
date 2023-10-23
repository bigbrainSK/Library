let library = [];


function Manga(a, p, c, r) {
    // this.author = a,
    // this.protaganist = p,
    // this.chapters = c,
    // this.read = r,
}

function addToLibrary() {
}

// function mangaInfo() {
//     for (i=0; i<library.length; i++) {
//         return (i, library[i]);
//     }
// }



let newMangaButton = document.querySelector("#newButton");
    newMangaButton.addEventListener("click", function() {
        let form = document.querySelector('#form');
        form.style.display = 'block'
    });

const bleach =  new Manga('Kubo', 'Ichigo', 698, 'read');

const onePiece = new Manga('Oda', 'Luffy', 1094, 'not read');

const jujutsuKaisen = new Manga('Akutami', 'Yuuji', 242, 'not read');

const soulEater = new Manga('Ohkubo', 'Soul', 113, 'not read');
