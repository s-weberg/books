let library = [];
let running = true;

//add book function

function addBook() {
    const title = prompt("Enter the title of the book:");
    if (!title) {
        alert("This field cannot be empty!");
        return;
    }
    const author = prompt("Enter the author of the book:");
    if(!author) {
        alert("This field cannot be empty!");
        return;
    }
    const book = {
        title: title,
        author: author,
        isRead: false
    };
    library.push(book);
    alert(`Book ${title} by ${author} added to your library. `);
}




while(running) {
    const choice = prompt(`
    Book Tracker
    1. Add Book
    2. List Books
    3. Mark Book as Read
    4. Exit
    Enter your choice:`);

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const title = prompt("Enter the title of the book to mark as read:");
            markAsRead(title);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
        }
    }
