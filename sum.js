const accountsSelector = '.ei_sdsf_solde span'
const accountTitleSelector = 'th.eir_tblshowth'

let acc = 0
let accounts = document.querySelectorAll(accountsSelector)
for(var account in accounts) {
    var value = accounts[account].innerText || accounts[account].textContent;
    if (!value) break;
    value = value.replace(",", ".")
        .replace("EUR", "")
        .replace("+", "")
        .replace(new RegExp(String.fromCharCode(160), 'g'), "")
    acc += parseFloat(value, 10)
};

const sum = acc.toLocaleString()

document.querySelector(accountTitleSelector).innerHTML += ` - <strong>total : ${sum} €</strong>`
