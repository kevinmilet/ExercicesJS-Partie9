let cleaveTelNumber = new Cleave('#telNumber', {
    prefix: '+33',
    delimiter: " ",
    blocks: [3, 2, 2, 2, 2, 2]
});

let cleaveDate = new Cleave('#comDate', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '-'
});

let cbNumberCleave = new Cleave('#cbNumber', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        document.querySelector('.cardType').innerHTML = type;
    //     // update UI ...
    }
});