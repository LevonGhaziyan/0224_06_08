function duplicateItems() {
    const item = document.querySelector(".slide-track")
    const items = document.querySelector(".slide-track").children
    const length = items.length
    for (let i = 0; i < length * 10; i++) {
        item.appendChild(items[i].cloneNode(true))
        console.log(i)
    }
}

duplicateItems()

function getElemByCoordinates(x, y) {
    return document.elementFromPoint(x, y)
}

function getElemCoordinates(elem) {
    return elem.getBoundingClientRect()
}
