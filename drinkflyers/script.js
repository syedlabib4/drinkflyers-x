// Existing toggleMenu function should remain:
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// SLIDER LOGIC START
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code for toggleMenu() ...

    const sliderContent = document.querySelector('.slider-content');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');

    if (!sliderContent || cards.length === 0) return; // Exit if elements not found

    const cardWidth = cards[0].offsetWidth + 20; // Card width + margin (10px on each side)
    const cardsPerView = 3; // Number of cards visible at once on desktop

    nextButton.addEventListener('click', () => {
        // Calculate the scroll distance (e.g., one card width)
        const scrollAmount = cardWidth; 
        
        // Scroll the container
        sliderContent.scrollLeft += scrollAmount;

        // Optional: Loop back to the start if near the end (requires more complex logic for perfect loop)
        // For simplicity, we'll let it stop at the end.
    });

    prevButton.addEventListener('click', () => {
        // Calculate the scroll distance (e.g., one card width)
        const scrollAmount = cardWidth; 
        
        // Scroll the container
        sliderContent.scrollLeft -= scrollAmount;
    });

    // For better functionality, you might want to scroll by the whole view width
    // nextButton.addEventListener('click', () => {
    //     const scrollAmount = sliderContent.clientWidth;
    //     sliderContent.scrollLeft += scrollAmount;
    // });
    
    // prevButton.addEventListener('click', () => {
    //     const scrollAmount = sliderContent.clientWidth;
    //     sliderContent.scrollLeft -= scrollAmount;
    // });
    
});
// SLIDER LOGIC END



document.addEventListener('DOMContentLoaded', () => {
    // Select all the question elements
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Get the parent .faq-item of the clicked question
            const faqItem = question.closest('.faq-item');
            
            // Toggle the 'active' class on the parent item
            faqItem.classList.toggle('active');
        });
    });
});