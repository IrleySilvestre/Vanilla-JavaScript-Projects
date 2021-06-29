const btn = document.querySelector('[data-btnColor]')
const spanColor = document.querySelector('.color')

const colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F", "F"]

btn.addEventListener('click', (evt) => {
    evt.preventDefault()
    changeColor()
})

function changeColor() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += colorHex[getRondomNumber()]
    }
    document.getElementById('mainColor').style.backgroundColor = hexColor

    spanColor.textContent = hexColor
}

function getRondomNumber() {
    return Math.floor(Math.random() * colorHex.length)
}

document.onload = changeColor()