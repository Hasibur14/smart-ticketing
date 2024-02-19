const allSeat = document.getElementsByClassName('seat');
let totalSeat = 40;
let count = 0;
let totalPrice = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        if (!seat.classList.contains('disabled')) { 
            totalSeat = totalSeat - 1;

            if (count < 4) {
                count = count + 1;
                seat.style.backgroundColor = "#1DD100";
                seat.style.cursor = "default"; 
                seat.classList.add('disabled');
            } else {
                alert("You purchased maximum 4 seats");
                return;
            }

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

            getTotalPrice("total-price", parseInt(price));

            setInnerText('seat-count', totalSeat);
            setInnerText('cart-count', count);
        } else {
            alert("This seat has already been purchased.");
        }
    });
}

function getTotalPrice(id, value) {
    const totalPriceElement = document.getElementById(id);
    const totalPriceValue = parseInt(totalPriceElement.innerText);
    const sum = totalPriceValue + value;
    setInnerText(id, sum);
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const discountElement = document.getElementById('input-field').value;

    if (count === 4) {
        if (discountElement === 'NEW15') {
            const discountAmount = totalPrice * 0.15;
            setInnerText('discountPrice1', discountAmount.toFixed(2));
            setInnerText('total', (totalPrice - discountAmount));
            document.getElementById('input-field').value = '';
        } else if (discountElement === 'Couple 20') {
            const discountAmount = totalPrice * 0.2;
            setInnerText('discountPrice', discountAmount.toFixed(2));
            setInnerText('total', (totalPrice - discountAmount));
            document.getElementById('input-field').value = '';
        } else {
            alert("Invalid coupon code");
            document.getElementById('input-field').value = '';
        }
    } else {
        alert("Please buy at least $200");
        document.getElementById('input-field').value = '';
    }
});

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
