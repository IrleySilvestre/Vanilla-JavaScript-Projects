const btns = document.querySelectorAll('.btn')
const elNumber = document.getElementById('number')
let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }
        elNumber.textContent = count
        setColor(count)
    })
})

function setColor(n) {
    if (n < 0) {
        elNumber.style.color = 'red'
    } else {
        if (n == 0) {
            elNumber.style.color = '#000000'
        } else {
            elNumber.style.color = '#0b8128'
        }
    }
}