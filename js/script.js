// 
// elements:

var enterbtn = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


enterbtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function creatListElement() {

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    
    var deletebtn = document.createElement("button");
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    deletebtn.classList.add("btn-outline-danger")
    deletebtn.classList.add("rounded")
    deletebtn.style.transition=".3s";
    deletebtn.addEventListener("click", deletListItem);

    function deletListItem() {
        li.classList.add("delete")
    }

}

function inputValidate() {
    return input.value.length;
}

function addListAfterClick() {

    if (inputValidate() > 0) {
        creatListElement();
    };

}

function addListAfterKeypress(event) {

    if (inputValidate() > 0 && event.which === 13) {
        creatListElement();
    };

}