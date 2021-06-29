const reviews = [{
    id: 1,
    name: "Name 1",
    job: "Web develop 1",
    img: "../assets/img/avatar6.png",
    text: 
    " 1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt sed omnisoluptate quidem molestias quasi nam, placeat, tempora illum nemo error repellendus!Enim nemo odit amet hic consequatur culpa!",

},
{
    id: 2,
    name: "Name 2",
    job: "Web develop 2",
    img: "../assets/img/img_avatar.png",
    text: 
    " 2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt sed omnisoluptate quidem molestias quasi nam, placeat, tempora illum nemo error repellendus!Enim nemo odit amet hic consequatur culpa!",

},
{
    id: 3,
    name: "Name 3",
    job: "Web develop 3",
    img: "../assets/img/avatar2.png",
    text: 
    " 3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt sed omnisoluptate quidem molestias quasi nam, placeat, tempora illum nemo error repellendus!Enim nemo odit amet hic consequatur culpa!",
}]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
const btnSort = document.getElementById('btnSort')

let currentItem = 0

window.addEventListener("DOMContentLoaded", ()=>{
    showPerson()
})

function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

btnNext.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson()
})

btnPrev.addEventListener('click',()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson()
})

btnSort.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})

