const questions = [
    "O que aconteceu de mais amargo hoje e o que eu aprendi com isso?",
    "O que aconteceu de mais doce hoje e como eu agradeci por isso?",
    "Como eu fui melhor que ontem?",
    "Amanhã, como eu vou ser melhor que hoje?"
]

const answers = []

const ask = (index = 0) => {
    process.stdout.write('\n\n' + questions[index] + '\n')
}

ask()

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    process.stdout.write('\n\n\n Olha só: ')
    for (index in questions){
        process.stdout.write(`
            ${questions[index]}
            ${answers[index]}

        `)
    }
})