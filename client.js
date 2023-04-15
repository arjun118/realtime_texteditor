let socket=io();

function getEl(id) {
    return document.getElementById(id)
}
const editor = getEl("editor")
editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.emit('message',text)
})
socket.on('message', (data) => {
    editor.value = data
})