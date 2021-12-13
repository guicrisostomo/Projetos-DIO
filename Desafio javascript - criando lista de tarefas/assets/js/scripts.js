function addTask() {
    var addCkeckBox = document.createElement("input");
    addCkeckBox.type = "checkbox";
    tasks.appendChild(addCkeckBox);

    var textCkeckBox = document.createElement("label");
    var textInput = document.getElementById('task-input').value;
    textCkeckBox.innerHTML = textInput;
    tasks.appendChild(textCkeckBox);

    var pulaLinha = document.createElement("br");
    tasks.appendChild(pulaLinha);
}