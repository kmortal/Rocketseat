const btn = document.getElementById('openModal')
const script = document.querySelector('body script')

const div = script.previousElementSibling

btn.addEventListener('click', ()=>div.classList.toggle('invisible'))

document.addEventListener('keypress', function (event){
    let isSpaceKey = event.key == ' '
    let containsInvisible = div.classList.contains('invisible')
    if (isSpaceKey && containsInvisible) div.classList.toggle('invisible')
})