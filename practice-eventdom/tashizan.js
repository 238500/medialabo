window.onload = function() {
    function Sum() {
        let leftInput = document.querySelector('input#left');
        let rightInput = document.querySelector('input#right');
        let left = Number(leftInput.value);
        let right = Number(rightInput.value);

        let answerSpan = document.querySelector('span#answer');
        answerSpan.textContent = left + right;
    }

    let button = document.querySelector('button#calc');
    button.addEventListener('click', Sum);
};
