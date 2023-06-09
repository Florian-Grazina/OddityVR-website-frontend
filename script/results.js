const resultsButton = document.querySelector("#results-button");
resultsButton.addEventListener('click', displayResults);

const resultsModal = document.querySelector("#results-modal");

const modal = document.querySelector("#results-modal");

const closeButton = document.querySelector("#close-modal")
closeButton.addEventListener('click', closeModal)

function displayResults(){
    resultsModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == closeButton) {
      modal.style.display = "none";
    }
} 

function closeModal() {
    modal.style.display = "none";
}
