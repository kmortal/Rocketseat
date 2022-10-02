let techs = ['html', 'css', 'js']

techs.push('react')
techs.unshift('python')

techs.pop()
techs.shift()

console.log(techs.slice(0,3))
techs.splice(0,1)

console.log(techs.indexOf('js'))

console.log(techs)