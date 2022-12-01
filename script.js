let inputField = document.getElementById('inputarea');
let ToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDo-Container');

ToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = " ";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraph);
    })

})