const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log('categories')
console.log(booksByCategory.length)

for (category of booksByCategory){
    console.log(category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = []
    for (category of booksByCategory){
        for (let book of category.books){
            if (authors.indexOf(book.author) == -1){
                authors.push(book.author)
            } 
        }  
    }
    return authors
}

console.log(countAuthors().length)

function booksofAugustoCury(){
    let books = []
    for (category of booksByCategory){
        for (let book of category.books){
            if (book.author == 'Augusto Cury'){
                books.push(book.title)
            } 
        }  
    }
    return books
}

console.log(booksofAugustoCury())

function booksofName(name){
    let books = []
    for (category of booksByCategory){
        for (let book of category.books){
            if (book.author == name){
                books.push(book.title)
            } 
        }  
    }
    return books
}

console.log(booksofName('T. Harv Eker'))