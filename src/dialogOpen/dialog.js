const dialog = document.getElementById("dialog")
const newSchedulingButton = document.getElementById("newScheduling")

const closeModalButton = document.getElementById("closeModal")

newSchedulingButton.onclick = (event) => {
    event.preventDefault()
    dialog.showModal()
}

closeModalButton.onclick = (event) => {
    event.preventDefault()
    dialog.close()
}