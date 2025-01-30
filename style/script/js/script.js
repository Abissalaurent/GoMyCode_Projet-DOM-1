document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments nécessaires
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const trashButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
    const totalPriceElement = document.querySelector('.total');

    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.card').forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
            totalPrice += quantity * unitPrice;
        });
        totalPriceElement.textContent = `${totalPrice} $`;
    }

    // Ajouter des écouteurs d'événements pour les boutons "+"
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity += 1;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    // Ajouter des écouteurs d'événements pour les boutons "-"
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityElement = this.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity -= 1;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Ajouter des écouteurs d'événements pour les boutons de suppression
    trashButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            card.remove();
            updateTotalPrice();
        });
    });

    // Ajouter des écouteurs d'événements pour les boutons "like" (cœur)
    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.style.color = 'red';
            } else {
                this.style.color = 'black';
            }
        });
    });
});