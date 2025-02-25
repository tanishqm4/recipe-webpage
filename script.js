function openModal(recipe) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (recipe === 'recipe1') {
        title.innerText = "butter chicken";
        description.innerText = "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.";
    } else if (recipe === 'recipe2') {
        title.innerText = "gulab jamun ";
        description.innerText = "A flavorful dish made with sweet desert";
    } else if (recipe === 'recipe3') {
        title.innerText = "Dahi wada ";
        description.innerText = "A quick and healthy dish made with a variety of fresh vegetables and curd.";
    } else if (recipe === 'recipe4') {
        title.innerText = "Chocolate Cake";
        description.innerText = "A rich and moist chocolate cake perfect for any occasion.";
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}