// Book constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Library object
const Library = {
    books: [],

    addBook: function(book) {
        this.books.push(book);
        document.write(`Add: ${book.title} </br>`);
    },

    searchBooks: function(query) {
        const results = this.books.filter(book => 
            book.title.includes(query) || book.author.includes(query)
        );
        
        if (results.length > 0) {
            results.forEach(book => document.write(`Found: ${book.title} by ${book.author}</br>`));
        } else {
            document.write(`Book with query ${query} is not found</br>`);
        }
    }
};

// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));


// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
Library.searchBooks("Harper Lee");

document.write("<br/>Searching for the book with title 'The Great Gatsby':<br/>");
Library.searchBooks("The Great Gatsby");

document.write("<br/>Searching for the book with title 'Design Thinking':<br/>");
Library.searchBooks("Design Thinking");

// Displaying all books in the library
function displayBooks() {
    Library.books.forEach((book, index) => {
        let num = index + 1;  
        document.write(`${num}. ${book.title} by ${book.author}<br/>`);
    });
}

document.write("<br/>These are the books in the library:<br/>");
displayBooks();