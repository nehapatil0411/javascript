// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const list = document.querySelector(".container .list");
// // let notes = JSON.parse (localStorage.getItem("notes"))|| [];
// let isEdit = false;
// let editIndex = 0;

// function readNote(){
//     list.innerHTML="";
// notes.forEach((notes,index)=>{
//     const p = document.createElement("p");
//     p.textContent = notes;


//     const deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn";
//     deleteBtn.id = "deleteId";
//     deleteBtn.textContent = "Delete";
//     deleteBtn.onclick = () => deleteNote(index);

//     const editBtn = document.createElement("button");
//     editBtn.className ="btn";
//     editBtn.id = "editBtn";
//     editBtn.textContent = "Edit";
//     editBtn.onclick = () => updateNote(index);

//     const div = document.createElement("div");
//     div.className = "row";
//     div.appendChild(p);
//     div.appendChild(deleteBtn);
//     div.appendChild(editBtn);
//     list.appendChild(div);
// });
// }
// function addNote(){
//     const value = input.value;
//     notes.push(value);
//     localStorage.setItem("notes",JSON.stringify(todos));
//     console.log(todos);
//     input.value="";
//     readNote();

// }
// function updateNote(index){
//     input.value = notes[index];
//     isEdit = true;
//     editIndex = index;
    
// }
// function deleteNote(index){
//     notes.splice(index , 1);
//     localStorage.setItem("notes",JSON.stringify(notes));
//     readNote();

// }

// button.addEventListener("click" , function(){
//     if(isEdit){
//         notes[editIndex] = input.value;
//         isEdit = false;
//     }else{
//         addNote();
//     }
//     localStorage.setItem("notes",JSON.stringify(notes));
//     input.value = "";
//     readNote();
// });
// readNote();

const input = document.getElementById("input");
const button = document.getElementById("button");

const list = document.querySelector(".main .list");
let todos= [];
// let notes = JSON.parse (localStorage.getItem("notes"))|| [];
//  let isEdit = false;
//   let editIndex = 0;

function readTask(){
const p = document.createElement("p");
todos.forEach((todo)=>{
    p.innerHTML = todo;
    list.appendChild(p);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn";
    deleteBtn.id = "deleteId";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteNote(index);

    const editBtn = document.createElement("button");
    editBtn.className ="btn";
    editBtn.id = "editBtn";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => updateNote(index);

    const div = document.createElement("div");
    div.className = "row";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);
    list.appendChild(div);
});
}
function updateNote(index){
        input.value = notes[index];
        isEdit = true;
        editIndex = index;
        
    }
    function deleteNote(index){
        notes.splice(index , 1);
        localStorage.setItem("notes",JSON.stringify(notes));
        readNote();
    
    }
function addTask(){
    const value = input.value;
    todos.push(value);
    console.log(todos);
    readTask();

}
button.addEventListener("click" , addTask);


// button.addEventListener("click" , function(){
//     if(isEdit){
//         notes[editIndex] = input.value;
//         isEdit = false;
//     }else{
//         addNote();
//     }
//     localStorage.setItem("notes",JSON.stringify(notes));
//     input.value = "";
//     readNote();
// });
// readNote();