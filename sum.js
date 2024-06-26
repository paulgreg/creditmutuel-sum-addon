const accountsSelector = ".ei_sdsf_solde span";
const accountRowSelector = ".ei_comptescontrats tbody:last-child";

const compute = () => {
  let acc = 0;
  let accounts = document.querySelectorAll(accountsSelector);

  for (var account in accounts) {
    var value = accounts[account].textContent;
    if (!value) break;
    value = value
      .replace(",", ".")
      .replace("EUR", "")
      .replace("+", "")
      .replace(new RegExp(String.fromCharCode(160), "g"), "");
    acc += parseFloat(value, 10);
  }

  const sum = acc.toLocaleString();

  const tr = document.createElement("tr");
  tr.style = "height: 4em;";

  const tdTitle = document.createElement("td");
  tdTitle.textContent = "SOMME DE VOS COMPTES :";
  tdTitle.style = "font-weight: bold;";
  tr.appendChild(tdTitle);

  const tdSum = document.createElement("td");
  tdSum.textContent = `${acc > 0 ? "+" : ""} ${sum} EUR`;
  tdSum.style = `color: ${acc > 0 ? "green" : "red"}; text-align: left; font-weight: bold;`;
  tdSum.setAttribute("colspan", "2");
  tr.appendChild(tdSum);

  document.querySelector(accountRowSelector).appendChild(tr);
  sumButton.style.display = "none";
};

const sumButton = document.createElement("button");
sumButton.innerText = "Calculer la somme des comptes";
sumButton.classList.add("ei_btn");
sumButton.style = "color: white; font-weight: bold; margin-top: 1em;";
sumButton.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    e.preventDefault();
    compute();
  },
  false
);
document.querySelector(".ei_md_detail").appendChild(sumButton);
