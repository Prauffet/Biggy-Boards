function addMovie() {
    let input = document.getElementById("movie-input");
    let movieTitle = input.value.trim();
    if (!movieTitle) return;

    let list = document.getElementById("movie-list");
    if (list.children.length >= 25) {
        alert("You can only rank up to 25 movies.");
        return;
    }

    let li = document.createElement("li");
    li.className = "movie-item";
    li.draggable = true;
    let rank = list.children.length + 1;
    li.innerHTML = `<span class='rank-number'>${rank}.</span> <span class='movie-title'>${movieTitle}</span> <button class='remove-btn' onclick='removeMovie(this)'>X</button>`;
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragover", dragOver);
    li.addEventListener("drop", drop);

    list.appendChild(li);
    updateRanks();
    input.value = "";
}

function handleKeyPress(event) {
    if (event.key ===


function handleKeyPress(event) {
    if (event.key ===
