const p1 = document.createElement('p')
// p1.textContent = 'Método append'

const p2 = document.createElement('p')
// p2.innerText = 'Método prepend'

const body = document.querySelector('body')
// body.append(p1)
// body.prepend(p2)

const script = body.querySelector('script')
const header = body.querySelector('header')
const aside1 = document.createElement('aside')
const aside2 = document.createElement('aside')

aside1.innerText = 'insertBefore'
aside2.textContent = 'insertBefore, mas depois'

body.insertBefore(aside1, script)
body.insertBefore(aside2, header.nextSibling)

