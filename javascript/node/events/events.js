const {EventEmitter} = require('events')

let event = new EventEmitter()

event.on('saySomething', (name)=>console.log('eu ouvi você, ', name))
event.emit('saySomething', 'Kelvyn')



class Characther extends EventEmitter{
    constructor(name){
        super()
        this.name = name
    }
}

let someone = new Characther('estudios')
someone.on('queria estudar mais', (name)=>console.log('só se for agora, ' + name))
someone.emit('queria estudar mais', 'Kelvyn')
