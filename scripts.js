let bills = {
  mortgage: 958,
  chickasaw: 135,
  comcast: 135,
  hardeman: 43,
  jCard: 123,
  vCard: 41,
  cricket: 135,
  crunchyRoll: 9,
  spotify: 14,
  carInsurance: 151,
  lifeInsurance: 36,
  vAllowance: 100,
  jAllowance: 150,
  groceries: 200,
  affirm: 176,
  ring: 5,
  careCredit: 41,
  studentLoans: 400, // due on the 11th
};

let accounts = {
  vickiCheck: 990,
  myCheck1: 462,
  myCheck2: 568,
  myCheck3: 462,
  vickiCheck2: 990
};

const foodAllowance = bills.groceries + bills.lunch + bills.vAllowance;

function updateValue() {
  accounts.myCheck1 = Number(document.querySelector(".js-input-myCheck1").value) || 462;
  accounts.myCheck3 = Number(document.querySelector(".js-input-myCheck3").value) || 462;
  accounts.vickiCheck = Number(document.querySelector(".js-input-vickiCheck").value) || 990;
  accounts.vickiCheck2 = Number(document.querySelector(".js-input-vickiCheck2").value) || 990;

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

  const firstHalf = parts * 2 + bills.cricket + bills.ring;
  const firstBudget = accounts.myCheck1 + accounts.vickiCheck - foodAllowance - firstHalf;

  document.querySelector(".js-paragraph-bills").innerText = `Total Bills = $${total}`;
  document.querySelector(".js-paragraph-parts").innerText = `Ned's and Kim's part = $${parts}`;
  document.querySelector(".js-paragraph-first").innerText = `My part = $${firstHalf}`;
  document.querySelector(".js-paragraph-first-budget").innerText = `Remaining Budget $${firstBudget}`;
}

function totalBills2() {
  updateValue();

  const secondHalf = bills.jCard + bills.vCard + bills.carInsurance + bills.lifeInsurance + bills.affirm + bills.careCredit + bills.spotify + bills.studentLoans;

  const secondBudget = accounts.myCheck3 + accounts.vickiCheck2 - secondHalf - foodAllowance;

  document.querySelector(".second-half").innerText = `Second Half is $${secondHalf}`;
  document.querySelector(".js-paragraph-second-budget").innerText = `Second Budget is $${secondBudget}`;
}
