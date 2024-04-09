const inputBox = document.getElementById('input-text')
const listBox = document.getElementById('list-container')


function addTask() {
    if (inputBox.value === '') {
        alert("Enter the task details.")
    } else {
        let li = document.createElement('li')
        listBox.appendChild(li)
        li.innerHTML = inputBox.value;
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.append(span)
        listBox.insertBefore(li, listBox.firstChild)
    }
    inputBox.value = '';
    setData()
}

listBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        setData()
    }
    else if (e.target.tagName === "SPAN") {
        // alert("Are you sure you want to delete this task?")
        if (confirm("Are you sure you want to delete this task?")) {
            e.target.parentElement.remove()
        }
        setData()
    }
}, false)

function setData() {
    localStorage.setItem("data", listBox.innerHTML)
}

function showData() {
    listBox.innerHTML = localStorage.getItem("data")
}

showData()