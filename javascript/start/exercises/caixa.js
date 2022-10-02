let cashier = {
    incomes: [600],
    expenses: [800, 600]
}

function sum(array){
    let total = 0
    for (let i of array) total+=i
    return total
}

function budget(){
    let expenses = sum(cashier.expenses)
    let incomes = sum(cashier.incomes)
    return console.log(incomes-expenses)
}

budget()