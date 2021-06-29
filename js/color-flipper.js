
const btn = document.querySelector('[data-btnColor]')
const spanColor = document.querySelector('.color')
const colors = [
    "SlateBlue",
    "SlateBlue1",
    "SlateBlue3",
    "DarkSlateBlue",
    " MidnightBlue",
    "Navy",
    " DarkBlue",
    "MediumBlue",
    " Blue",
    " CornflowerBlue",
    " RoyalBlue",
    " DodgerBlue",
    " DeepSkyBlue",
    " LightSkyBlue",
    " SkyBlue",
    " LightBlue",
    " SteelBlue",
    " LightSteelBlue",
    "SlateGray",
    "LightSlateGray"
]

btn.addEventListener('click', (evt) => {
    evt.preventDefault()
    changeColor()
})

function changeColor() {
    let newColor = colors[sortColor()]
    document.getElementById('mainColor').style.backgroundColor = newColor

    spanColor.textContent = newColor


}

function sortColor() {
    return Math.floor(Math.random() * colors.length)
}

document.onload = changeColor()

