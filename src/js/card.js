const cards = document.getElementsByClassName("card");

for (const card of cards) {
    const cardSizes = card.querySelectorAll(".card__size:not(.card__size_inactive)");
    cardSizes.forEach(size => size.addEventListener("click", function () {
        cardSizes.forEach(size2 => size2.classList.remove('card__size_selected'));
        this.classList.add('card__size_selected');
    }));
}