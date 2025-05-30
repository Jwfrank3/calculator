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
  carNote: 262,
  spotify: 14,
  adobe: 40,
  carInsurance: 214,
  lifeInsurance: 36,
  wetfood: 30,
  catLitter: 26,
  gas: 100,
  lunch: 100,
  groceries: 200,
  affirm: 176,
  ring: 5,
  careCredit: 30
};

let accounts = {
  vickiCheck: 1070,
  myCheck1: 450,
  myCheck2: 550,
  myCheck3: 450,
  vickiCheck2: 1070
};

const foodGas = bills.groceries + bills.lunch + bills.gas;

function updateValue() {
  accounts.myCheck1 = Number(document.querySelector(".js-input-myCheck1").value) || 450;
  accounts.myCheck2 = Number(document.querySelector(".js-input-myCheck2").value) || 550;
  accounts.myCheck3 = Number(document.querySelector(".js-input-myCheck3").value) || 450;
  accounts.vickiCheck = Number(document.querySelector(".js-input-vickiCheck").value) || 1070;
  accounts.vickiCheck2 = Number(document.querySelector(".js-input-vickiCheck2").value) || 1070;

  bills.chickasaw = Number(document.querySelector(".js-input-chickasaw").value) || 135;
  bills.hardeman = Number(document.querySelector(".js-input-hardeman").value) || 43;
  bills.careCredit = Number(document.querySelector(".care-credit").value) || 30;
  bills.jCard = Number(document.querySelector(".js-input-jCard").value) || 123;
  bills.vCard = Number(document.querySelector(".js-input-vCard").value) || 41;
}

function totalBills1() {
  updateValue();

  const total = bills.mortgage + bills.chickasaw + bills.comcast + bills.hardeman + bills.trash;
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

  const secondHalf = bills.jCard + bills.vCard + bills.carNote + bills.carInsurance + bills.lifeInsurance +
    bills.gamePass + bills.wetfood + bills.affirm + bills.careCredit + bills.spotify;

  const secondBudget = accounts.myCheck3 + accounts.vickiCheck2 - secondHalf - foodGas;
  const miniBudget = accounts.myCheck2 - foodGas - bills.catLitter - bills.wetfood;

  document.querySelector(".second-half").innerText = `Second Half is $${secondHalf}`;
  document.querySelector(".js-paragraph-second-budget").innerText = `Second Budget is $${secondBudget}`;
  document.querySelector(".js-paragraph-mini-budget").innerText = `Mini Budget is $${miniBudget}`;
}
