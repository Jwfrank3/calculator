let bills = {
  mortgage: 958,
  chickasaw: 135,
  comcast: 135,
  hardeman: 43,
  jCard: 123,
  vCard: 41,
  gamePass: 22,
  cricket: 135,
  crunchyRoll: 9,
  spotify: 14,
  adobe: 40,
  carInsurance: 88,
  lifeInsurance: 36,
  wetfood: 30,
  catLitter: 26,
  gas: 150,
  lunch: 150,
  groceries: 200,
  affirm: 176,
  ring: 5,
  careCredit: 30,
  studentLoans: 64, // due on the 11th
};

let accounts = {
  vickiCheck: 1130,
  myCheck1: 450,
  myCheck2: 550,
  myCheck3: 450,
  vickiCheck2: 1130
};

const foodGas = bills.groceries + bills.lunch + bills.gas;

function updateValue() {
  accounts.myCheck1 = Number(document.querySelector(".js-input-myCheck1").value) || 450;
  accounts.myCheck3 = Number(document.querySelector(".js-input-myCheck3").value) || 450;
  accounts.vickiCheck = Number(document.querySelector(".js-input-vickiCheck").value) || 1130;
  accounts.vickiCheck2 = Number(document.querySelector(".js-input-vickiCheck2").value) || 1130;

  bills.chickasaw = Number(document.querySelector(".js-input-chickasaw").value) || 135;
  bills.hardeman = Number(document.querySelector(".js-input-hardeman").value) || 43;
  bills.careCredit = Number(document.querySelector(".care-credit").value) || 30;
  bills.jCard = Number(document.querySelector(".js-input-jCard").value) || 123;
  bills.vCard = Number(document.querySelector(".js-input-vCard").value) || 41;
}

function totalBills1() {
  updateValue();

  // Get the checkbox
  const trashCheckbox = document.querySelector('input[name="trash"]');
  const trashCost = trashCheckbox && trashCheckbox.checked ? 100 : 0;

  // Add trashCost to total
  const total = bills.mortgage + bills.chickasaw + bills.comcast + bills.hardeman + trashCost;
  const parts = total / 4;

  const firstHalf = parts * 2 + bills.cricket + bills.adobe + bills.ring;
  const firstBudget = accounts.myCheck1 + accounts.vickiCheck - foodGas - firstHalf;

  document.querySelector(".js-paragraph-bills").innerText = `Total Bills = $${total}`;
  document.querySelector(".js-paragraph-parts").innerText = `Ned's and Kim's part = $${parts}`;
  document.querySelector(".js-paragraph-first").innerText = `My part = $${firstHalf}`;
  document.querySelector(".js-paragraph-first-budget").innerText = `Remaining Budget $${firstBudget}`;
}

function totalBills2() {
  updateValue();

  const secondHalf = bills.jCard + bills.vCard + bills.carInsurance + bills.lifeInsurance +
    bills.gamePass + bills.wetfood + bills.affirm + bills.careCredit + bills.spotify;

  const secondBudget = accounts.myCheck3 + accounts.vickiCheck2 - secondHalf - foodGas - bills.studentLoans;

  document.querySelector(".second-half").innerText = `Second Half is $${secondHalf}`;
  document.querySelector(".js-paragraph-second-budget").innerText = `Second Budget is $${secondBudget}`;
}
