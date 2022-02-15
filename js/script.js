document.getElementById('sixteenGB').addEventListener('click', function () {
    // const memoryPrice = document.getElementById('memory-cost');
    // memoryPrice.innerText = 200;

    // const bestPrice = document.getElementById('best-price').innerText;
    // const memoryCost = document.getElementById('memory-cost').innerText;
    // const storageCost = document.getElementById('storage-cost').innerText;
    // const deliveryCost = document.getElementById('delivery-cost').innerText;

    // const total = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    // const totalPrice = document.getElementById('total-price');
    // totalPrice.innerText = total;
    updatePrice('memory-cost', 300);
});
// function onClick(clickId, updateId, price) {
//     document.getElementById(clickId).addEventListener("click", function () {
//         updatePrice(updateId, price);
//         document.getElementById(clickId).style.backgroundColor = "cornflowerblue"
//     });
// }


// onClick("sixteenGB", "memory-cost", 300);
// onClick("eightGB", "memory-cost", 0);
// onClick("ssd1", "storage-cost", 0);
// onClick("ssd2", "storage-cost", 200);

function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
        document.getElementById(clickId).style.backgroundColor = "cornflowerblue"

    });
}
onClick('sixteenGB', 'memory-cost', 300);
onClick('eightGB', 'memory-cost', 0);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 200);

function updatePrice(itemId, price) {
    const memoryPrice = document.getElementById(itemId);
    memoryPrice.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const total = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
}

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput === fakeCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
    }
});




