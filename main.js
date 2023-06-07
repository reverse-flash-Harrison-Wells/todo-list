let taskInput = document.querySelector('input')
let taskBox = document.querySelector('ol')
let button = document.querySelector('button')

button.addEventListener('click', myFunction)
// button.onclick(myFunction)

function myFunction() {
    let task = taskInput.value
    let li = document.createElement('li')
    let del = document.createElement('button')
    del.addEventListener('click', delItem);
    del.textContent = '-'
    li.textContent = task
    li.append(del)
    taskBox.append(li)
    taskInput.value = ''
}

function delItem(li) {
   li.target.parentElement.remove()
   
}