var faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(button) {
    button.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            // This FAQ is currently hidden, so show it
            answer.classList.remove('hidden');
        } else {
            // This FAQ is currently shown, so hide it
            answer.classList.add('hidden');
        } 
    });
});