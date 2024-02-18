const allSeat = document.getElementsByClassName('seat');
let totalPrice = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {


        const seatNo = e.target.innerText;

        const price = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText;

        const selectedSeatNo = document.getElementById('Selected-place-container');
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = seatNo;
        const p2 = document.createElement('p');
        p2.innerText = 'Economic';
        const p3 = document.createElement('p');
        p3.innerText = '550';

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        

        selectedSeatNo.appendChild(li);

        // calculated total price
        getTotalPrice("total-price", parseInt(price));
    });
};


// total price
function getTotalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText('total-price', sum);
};


// Inner Text show
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}