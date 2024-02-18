const allSeat = document.getElementsByClassName('seat');
let totalSeat = 40;
let count = 0;
let totalPrice = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {

        totalSeat = totalSeat - 1;
        count = count + 1;


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


        setInnerText('seat-count', totalSeat);
        setInnerText('cart-count', count);
    });
};

// total price
function getTotalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText('total-price', sum);
};

//grand total with coupon code
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {


    const discountElement = document.getElementById('input-field').value;
    // const couponCode1 = discountElement.split(' ').join('').toUpperCase();
    // const couponCode2 = discountElement.split(' ').join('').toUpperCase();

    //  const couponCode1 = discountElement.;
    // const couponCode2 = discountElement.;

    


        if (couponCode1 === 'NEW15') {
            //discount price calculation
            const discountElement = document.getElementById('discountPrice1');
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText = discountAmount.toFixed(2);

            //rest total calculation
            const restTotal = document.getElementById('total');
            const restTotalPrice = totalPrice - discountAmount;
            restTotal.innerText = restTotalPrice.toFixed(2);

            document.getElementById('input-field').value = '';

        }
        else if(couponCode2 === 'Couple 20'){
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            //rest total calculation
            const restTotal = document.getElementById('total');
            const restTotalPrice = totalPrice - discountAmount;
            restTotal.innerText = restTotalPrice.toFixed(2);

            document.getElementById('input-field').value = '';
        }
    
    else {
        alert("please at least $200 buy");
        document.getElementById('input-field').value = '';
    }
});



    // Inner Text show
    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    };


