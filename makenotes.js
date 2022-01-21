console.log("Welcome to Make Notes");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', createNote);

function createNote(){
    let addTxt = document.getElementById('addTxt');
    // check if there are already notes in the localstorage or not 
    let notes = localStorage.getItem('notes');

    // now if storage is null then what
    if(notes==null){
        notesObj = [];  // make an empty array;
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);  //to push value of textarea in notesobj
    localStorage.setItem('notes', JSON.stringify(notesObj)); // adding value to local storage
    addTxt.value=''; //after adding note making the textarea blank 
    
    // to show all the notes written in the application 
    showNotes();
}

function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes==null){
        notesObj = []; 
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html='';

    // to get every element from the array so 
    notesObj.forEach(function(element , index){
        html = html + 
        `<div class="noteCard" style="width: 18rem;" >
        <div class="card-body">
          <h5 class="card-title">Note ${index+ 1}</h5>
          <p class="card-text">${element}</p>
          <button id= ${index} onclick="deleteBtn(this.id)" class="btn btn-primary my-2" id="addBtn">Delete Note</button>
        </div>
      </div>`
    });

    // now we will push this html inside the notes container in app using js
    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to Show Here . Add a Note.`
    }
}

function deleteBtn(index){
    console.log("This is Deleting "+ index)
    let notes = localStorage.getItem('notes');

    if(notes==null){
        notesObj = []; 
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1); //splice will delete element from the array given with position and how many to delete
    localStorage.setItem('notes', JSON.stringify(notesObj)); // to update the local storage
    showNotes();

}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', search);

function search(){
    let inputValue = searchTxt.value.toLowerCase(); // to get string from the input  and in case it is in upper case
    
    //we will saerch in notecards so applying event on them
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        // now in card we will search in p tag as there contains our notes data so
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
    
}

