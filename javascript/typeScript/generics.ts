/* Convenção
S - state
T - type
K - key
V - value
E - element
*/

//gerics T sendo number ou string. Se não for passado o T, será string
function useState<T extends number | string = string>(){
    let state : T

    function get(){
        return state
    }

    function set(newState : T){
        state = newState
        return newState
    }

    return {get, set}
}

//definindo o T
let state = useState<string>()
state.get()
state.set('qwe')
//state.set(123)  //erro por tipo inválido