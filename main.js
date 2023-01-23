const form = document.querySelector('form')
const heading = document.querySelector('#heading')
const message = document.querySelector('#message')
const todoStorage = document.querySelector('.todo-storage')


form.addEventListener("submit" , saveTodo)

function saveTodo(e){
    e.preventDefault()
    let newHeading = heading.value
    let newDiv = document.createElement("div")
    newDiv.className = "p-4 lg:w-1/3"
    todoStorage.appendChild(newDiv)
    let newDivInner = document.createElement("div")
    newDivInner.className = "list-box"
    newDiv.appendChild(newDivInner)
    let newDivlast = document.createElement("div")
    newDivInner.appendChild(newDivlast)
    let createHeading = document.createElement("h1")
    createHeading.className = "heading"
    newDivlast.appendChild(createHeading)
    createHeading.innerText = newHeading

    let createpera = document.createElement("p")
    createpera.className = "leading-relaxed mb-3"
    newDivlast.appendChild(createpera)
    createpera.innerText = message.value

    let createDelete = document.createElement("button")
    createDelete.className = "delete-btn"
    newDivInner.appendChild(createDelete)
    createDelete.innerText = "Delete this Todo"
     
}
// for delete todo

todoStorage.addEventListener("click" , deleteTodo)

function deleteTodo(e){
    if(e.target.className.includes("delete-btn")){
        let li = e.target.parentElement.parentElement
        todoStorage.removeChild(li)
    }
} 

const deleteAll = document.querySelector(".delete-all-btn")
const body = document.querySelector("body")
const box = document.querySelector(".box")

deleteAll.addEventListener("click" , deleteTodoAll)

function deleteTodoAll(e){
    if(e.target.className.includes("delete-all-btn")){
        let liz = todoStorage
        box.removeChild(liz)
    }
    location.reload() 
    form.reset()
} 