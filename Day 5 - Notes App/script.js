const notesContainer = document.getElementById('notes-container');
const createBtn = document.getElementById('btn');

let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('div');
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage();
            }
        });
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})