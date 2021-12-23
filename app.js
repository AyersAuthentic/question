//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const quesiton = e.currentTarget.parentElement.parentElement;
        quesiton.classList.toggle('show-text');
    });
});
