body { 
    font-family: Georgia, serif; 
    text-align: center; 
    background: linear-gradient(to right, #2c3e50, #4c5c68);
    color: white;
    margin: 0;
    padding: 0;
    border-left: 5px solid #ddd; /* Left border */
    border-right: 5px solid #ddd; /* Right border */
}
#movie-list { 
    width: 60%; 
    margin: 20px auto; 
    padding: 0; 
    list-style: none; 
}
.movie-item { 
    padding: 10px; 
    margin: 5px; 
    background: #f0f0f0; 
    cursor: grab; 
    display: flex; 
    align-items: center; 
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    color: black;
}
.remove-btn { 
    background: red; 
    color: white; 
    border: none; 
    cursor: pointer; 
    margin-left: 20px;
    padding: 5px 10px;
    border-radius: 5px;
}
.rank-number { 
    font-weight: bold; 
    background: #ddd;
    padding: 5px 10px;
    border-radius: 10px;
    margin-right: 10px;
    min-width: 30px;
    text-align: center;
}
.movie-title {
    flex-grow: 1;
    width: 100%;
    text-align: left;
}

function drop(event) {
    event.preventDefault();
    document.querySelector(".dragging").classList.remove("dragging");
    updateRanks();
}
