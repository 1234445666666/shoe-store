const table = document.querySelector(".section__two__filter table");

table.addEventListener('click', function(event) {
    if (event.target.tagName === "TH") {
        event.target.classList.toggle("active__table");
    }

    else if (event.target.tagName === "TD") {
        event.target.classList.toggle("active__table");
    }
}); 



