document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            let category = this.dataset.filter;

            // Remove active class from all buttons and apply to the clicked one
            filterButtons.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');

            cards.forEach(card => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // All your existing JavaScript code should be inside this function

    document.getElementById('search-input').addEventListener('input', function(e) {
        let searchValue = e.target.value.toLowerCase();
        console.log("Search Value:", searchValue);

        // Get all cards
        let cards = document.querySelectorAll('.card');
        
        cards.forEach(function(card) {
            let linkText = card.querySelector('a').textContent.toLowerCase();
            let descriptionText = card.querySelector('span').textContent.toLowerCase();

            console.log("Link Text:", linkText);
            console.log("Description Text:", descriptionText);

            // Check if searchValue is present in linkText or descriptionText
            if (linkText.includes(searchValue) || descriptionText.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

