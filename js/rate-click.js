const rateChilds = document.querySelectorAll('.box-rate > *');


rateChilds.forEach((rateChild) => {
    rateChild.addEventListener('click', (e) => {
        // delete '.rate-click' class from all elements
        rateChilds.forEach((rateChild) => {
            rateChild.classList.remove('rate-click');
        });
        // add '.rate-click' class to the clicked element
        e.target.classList.add('rate-click');
    });
});
