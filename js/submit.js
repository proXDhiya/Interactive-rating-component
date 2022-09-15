const submitBtn = document.querySelector('.box-submit');
const box = document.querySelector('.box');
const thanksBox = document.querySelector('.thanks-box');
const rateText = document.querySelector('.thanks-box-rate');
let rate = 0;


submitBtn.addEventListener('click', () => {
    // add class '.none-box' to box
    box.classList.add('none-box');
    // add class '.none-box' to thanksBox
    thanksBox.classList.remove('none-box');

    let state = true;
    rateChilds.forEach((rateChild) => {
        if (state) {
            rate++;
            if (rateChild.classList.contains('rate-click')) {
                rateText.innerHTML = `You selected ${rate} out of 5`;
                state = false;
            }
        }
    });
});
