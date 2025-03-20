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
            if (event.key === "Enter") {
                addMovie();
            }
        }
        
        function removeMovie(button) {
            button.parentElement.remove();
            updateRanks();
        }
        
        function updateRanks() {
            let items = document.querySelectorAll(".movie-item .rank-number");
            items.forEach((item, index) => {
                item.textContent = `${index + 1}.`;
            });
        }
        
        function dragStart(event) {
            event.dataTransfer.setData("text/plain", event.target.innerHTML);
            event.target.classList.add("dragging");
        }
        
        function dragOver(event) {
            event.preventDefault();
            let dragging = document.querySelector(".dragging");
            let list = document.getElementById("movie-list");
            let items = [...list.children];
            let index = items.indexOf(dragging);
            let target = event.target.closest(".movie-item");
            let targetIndex = items.indexOf(target);
            
            if (target && target !== dragging) {
                list.insertBefore(dragging, index > targetIndex ? target : target.nextSibling);
                updateRanks();
            }
        }
        
        function drop(event) {
            event.preventDefault();
            document.querySelector(".dragging").classList.remove("dragging");
            updateRanks();
        }
