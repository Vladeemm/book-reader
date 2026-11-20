const book = document.getElementById("book");
const fontSize = document.querySelectorAll(".font-size");
const color = document.querySelectorAll(".color");

fontSize.forEach((control) => {
    control.addEventListener("click", function (event) {
        event.preventDefault();

        fontSize.forEach((control) =>
            control.classList.remove("font-size_active"));
            this.classList.add("font-size_active");        
    
        const size = this.dataset.size;
        if (size) {
            book.classList.remove("book_fs-small", "book_fs-big");
            book.classList.add(`book_fs-${size}`); 
        }

    });
});

color.forEach((control) => {
    control.addEventListener("click", function (event) {
        event.preventDefault();

        color.forEach((control) =>
            control.classList.remove("color_active"));
        this.classList.add("color_active");
    
        const textColor = this.dataset.textColor;
        if (textColor) {
            book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
            book.classList.add(`book_color-${textColor}`); 
        }

        const bgColor = this.dataset.bgColor;
        if (bgColor) {
            book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-whitesmoke");
            book.classList.add(`book_bg-${bgColor}`); 
        }

    });
});
